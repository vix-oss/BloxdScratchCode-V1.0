/**
 * Bloxd.io 世界代碼 - 完整模板
 * 使用本模板快速開始編寫 Bloxd.io 伺服器代碼
 */

// 初始化數據庫
try { db } catch { db = {} }
if (!db.kills) db.kills = {};
if (!db.stats) db.stats = {};

/**
 * 定期保存數據
 */
doPeriodicSave = () => {
    console.log("保存數據到數據庫");
};


/**
 * 玩家數據管理函數
 */
function getKills(playerId) {
    const dbId = api.getPlayerDbId(playerId);
    return db.kills[dbId] ?? 0;
}

function setKills(playerId, kills) {
    const dbId = api.getPlayerDbId(playerId);
    db.kills[dbId] = kills;
}

function updateStats() {
    const count = api.getNumPlayers();
    const text = [
        { icon: "zap", style: { color: "gold" } },
        { str: "歡迎來到 Bloxd.io 伺服器", style: { color: "aqua", fontWeight: "bold" } },
        { icon: "zap", style: { color: "gold" } },
        { str: "\n目前在線人數：", style: { color: "white" } },
        { str: count + " 人", style: { color: "aqua" } },
    ];

    for (const id of api.getPlayerIds()) {
        api.setClientOption(id, "RightInfoText", text);
    }
}


/**
 * 事件：玩家聊天
 */
function onPlayerChat(playerId, msg) {
    const name = api.getEntityName(playerId);
    console.log(`[聊天] ${name}: ${msg}`);

    // 返回 true 允許聊天，false 阻止聊天
    return true;
}

/**
 * 事件：玩家加入
 */
function onPlayerJoin(playerId) {
    const name = api.getEntityName(playerId);
    console.log(`玩家加入: ${name}`);

    // 發送歡迎消息
    api.sendMessage(playerId, [
        { icon: "Gold Trophy", style: { color: "#00a4bd" } },
        { str: " 歡迎加入伺服器！", style: { color: "green" } },
    ]);

    // 初始化玩家數據
    const dbId = api.getPlayerDbId(playerId);
    if (db.kills[dbId] == null) {
        db.kills[dbId] = 0;
    }

    updateStats();
}

/**
 * 事件：玩家擊殺其他玩家
 */
function onPlayerKilledOtherPlayer(killerId, victimId) {
    if (killerId === victimId) return true; // 自殺不計算

    const killerName = api.getEntityName(killerId);
    const victimName = api.getEntityName(victimId);
    const newKills = getKills(killerId) + 1;

    setKills(killerId, newKills);

    // 廣播擊殺消息
    api.broadcastMessage([
        { str: killerName, style: { color: "gold" } },
        { str: " 擊殺了 ", style: { color: "white" } },
        { str: victimName, style: { color: "red" } },
        { str: " (" + newKills + " 連殺)", style: { color: "yellow" } },
    ]);

    return false;
}

/**
 * 事件：玩家離開
 */
function onPlayerLeave(playerId) {
    const name = api.getEntityName(playerId);
    console.log(`玩家離開: ${name}`);
    updateStats();
}

/**
 * tick 事件 - 每幀執行一次
 * dt: 距離上次 tick 的時間間隔（毫秒）
 */
tick = (dt) => {
    // 在這裡添加每幀執行的代碼
    // 例如：定期保存、更新動畫等
};
