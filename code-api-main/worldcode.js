try { db } catch { db = {} }
if (!db.kills) db.kills = {};

doPeriodicSave = () => {

}


function getKills(playerId) {
    const dbId = api.getPlayerDbId(playerId);
    return db.kills[dbId] ?? 0;
}

function setKills(playerId, kills) {
    const dbId = api.getPlayerDbId(playerId);
    db.kills[dbId] = kills;
}

function updateRightInfoForAll() {
    const count = api.getNumPlayers();
    const text = [
        { icon: "zap", style: { color: "gold" } },
        { str: "Welcome to liam.hyplxel", style: { color: "aqua", fontWeight: "bold" } },
        { icon: "zap", style: { color: "gold" } },
        { str: "\n目前人數：", style: { color: "white" } },
        { str: count + " 人", style: { color: "aqua" } },
    ];

    for (const id of api.getPlayerIds()) {
        api.setClientOption(id, "RightInfoText", text);
    }
}

/* =====================================================
   玩家分類
===================================================== */
const ownerName = ["bloxdio_Liam_YT", "ItzSnow", "charlie1222"]; /*管理員*/
const Trump = ["bloxdio_supermonkeyYT", "VicaBloxd", "EricTM", "YThayker", "", "SubTo_AKA_is_banned", "YTProcat135", "ChineseYT", "TW_sean_yang_YT", "Absolukiller_YT_ARC"];/*Youtuber*/
const guan = ["YT_Eden_blocky", "itz_bedwars_TW", "hypixel_best_serveryk", "TonyYang_TW_YT", "AndyPan02"];/*MVP++*/
const jian = ["Lrake", "TW_ryan0130_YT", ""];/*MVP+*/
const lao = ["TINGYUAN_TW", "V_UNE_RT25_STL_Terra"];/*VIP++*/
const gou = [""];/*VIP+*/
/*更多詳情請至大廳查看!*/

/* =====================================================
   Rank 資料
===================================================== */
const rankPlayers = {
    "VicaBloxd": { rank: "Coder", color: "cyan" },
    "bloxdio_Liam_YT": { rank: "Owner", color: "gold" },
    "ItzSnow": { rank: "Coder", color: "cyan" },
    "charlie1222": { rank: "Liam超劍", color: "cyan" },
    "YTProcat135": { rank: "Co-onwer", color: "red" },
};

/* =====================================================
   玩家聊天(rank製作)
===================================================== */
function onPlayerChat(playerId, msg) {
    const name = api.getEntityName(playerId);

    function sendNormal(prefix, color) {
        api.broadcastMessage([
            { str: "[", style: { color: "white" } },
            { str: prefix, style: { color: color } },
            { str: "] ", style: { color: "white" } },
            { str: name, style: { color: "gold" } },
            { str: ": " + msg, style: { color: "white" } }
        ]);
        return false;
    }

    function sendYT() {
        api.broadcastMessage([
            { str: "[", style: { color: "white" } },

            { icon: "youtube", style: { color: "#FE0000" } },
            { str: "You", style: { color: "#FFFFFF" } },
            { str: "Tuber", style: { color: "#FE0000" } },

            { str: "] ", style: { color: "white" } },
            { str: name, style: { color: "#CEF3FF" } },
            { str: ": " + msg, style: { color: "white" } }
        ]);
        return false;
    }

    function sendOwner() {
        api.broadcastMessage([
            { str: "[", style: { color: "white" } },

            { icon: "crown", style: { color: "#FDFF75" } },
            { str: "Owner", style: { color: "#fffb00" } },

            { str: "] ", style: { color: "white" } },
            { str: name, style: { color: "#CEF3FF" } },
            { str: ": " + msg, style: { color: "white" } }
        ]);
        return false;
    }

    function sendMVP2() {
        api.broadcastMessage([
            { str: "[", style: { color: "white" } },

            { icon: "star", style: { color: "#00FFF2" } },
            { str: "MVP", style: { color: "gold" } },
            { str: "++", style: { color: "#FF0000" } },

            { str: "] ", style: { color: "white" } },
            { str: name, style: { color: "#CEF3FF" } },
            { str: ": " + msg, style: { color: "white" } }
        ]);
        return false;
    }

    function sendMVP1() {
        api.broadcastMessage([
            { str: "[", style: { color: "white" } },

            { icon: "heart", style: { color: "#00FFF2" } },
            { str: "MVP", style: { color: "yarn" } },
            { str: "+", style: { color: "#FF0000" } },

            { str: "] ", style: { color: "white" } },
            { str: name, style: { color: "#CEF3FF" } },
            { str: ": " + msg, style: { color: "white" } }
        ]);
        return false;
    }

    function sendVIP2() {
        api.broadcastMessage([
            { str: "[", style: { color: "white" } },

            { icon: "zap", style: { color: "#f6ff00" } },
            { str: "VIP", style: { color: "#91deff" } },
            { str: "++", style: { color: "#e1c2ff" } },

            { str: "] ", style: { color: "white" } },
            { str: name, style: { color: "#CEF3FF" } },
            { str: ": " + msg, style: { color: "white" } }
        ]);
        return false;
    }

    function sendVIP1() {
        api.broadcastMessage([
            { str: "[", style: { color: "white" } },

            { icon: "fire", style: { color: "#f6ff00" } },
            { str: "VIP", style: { color: "#91deff" } },
            { str: "+", style: { color: "#e1c2ff" } },

            { str: "] ", style: { color: "white" } },
            { str: name, style: { color: "#CEF3FF" } },
            { str: ": " + msg, style: { color: "white" } }
        ]);
        return false;
    }

    if (ownerName.includes(name)) return sendOwner();
    if (Trump.includes(name)) return sendYT();
    if (guan.includes(name)) return sendMVP2();
    if (jian.includes(name)) return sendMVP1();
    if (lao.includes(name)) return sendVIP2();
    if (gou.includes(name)) return sendVIP1();

    return true;
}


/* =====================================================
   玩家加入
===================================================== */
function onPlayerJoin(playerId) {

    // ===== 基本限制 =====
    api.setCantChangeBlockType(playerId, "Invisible Solid");
    api.setCantChangeBlockType(playerId, "Bedrock");
    api.setCantChangeBlockType(playerId, "Board");

    api.sendMessage(playerId, [
        { icon: "Gold Trophy", style: { color: "#00a4bd" } },
        { str: " 歡迎來到台灣最好的 PVP 伺服器", style: { color: "green" } },
        { str: " liam.hyplxel!", style: { color: "green" } },
        { icon: "Gold Trophy", style: { color: "#00a4bd" } },
    ]);

    // ===== 正確取得資料 =====
    const name = api.getEntityName(playerId);
    const dbId = api.getPlayerDbId(playerId);

    // ===== db kills 初始化（永久保存）=====
    if (db.kills[dbId] == null) {
        db.kills[dbId] = 0;
    }
    const kills = db.kills[dbId];

    const rankInfo = rankPlayers[name] ?? { rank: "", color: "white" };

    // ===== 名牌設定 =====
    api.setTargetedPlayerSettingForEveryone(
        playerId,
        "nameTagInfo",
        { backgroundColor: "transparent" },
        true
    );

    api.setClientOptions(playerId, {
        lobbyLeaderboardInfo: {
            name: { displayName: "Name", sortPriority: 0 },
            rank: { displayName: "Rank", sortPriority: 1 },
            kills: { displayName: "Kills", sortPriority: 2 }
        }
    });



    // ===== Leaderboard 資料 =====
    api.setTargetedPlayerSettingForEveryone(
        playerId,
        "lobbyLeaderboardValues",
        {
            name,
            rank: rankInfo.rank,
            kills
        },
        true
    );

    api.setTargetedPlayerSettingForEveryone(
        playerId,
        "colorInLobbyLeaderboard",
        rankInfo.color,
        true
    );

    updateRightInfoForAll();
}


/* =====================================================
   玩家擊殺
===================================================== */
function onPlayerKilledOtherPlayer(killerId, victimId) {
    if (killerId === victimId) return true;

    const newKills = getKills(killerId) + 1;
    setKills(killerId, newKills);

    const name = api.getEntityName(killerId);
    const rankInfo = rankPlayers[name] ?? { rank: "", color: "white" };

    api.setTargetedPlayerSettingForEveryone(killerId, "lobbyLeaderboardValues", {
        name,
        rank: rankInfo.rank,
        kills: newKills
    }, true);

    return false;
}
// ======= 清空 UHC 區域 =======
const POS1 = [-130.75, -704, 21.75];
const POS2 = [-31.25, -699.21, -57.75];

let minX = Math.min(POS1[0], POS2[0]);
let maxX = Math.max(POS1[0], POS2[0]);
let minZ = Math.min(POS1[2], POS2[2]);
let maxZ = Math.max(POS1[2], POS2[2]);
let topY = Math.max(POS1[1], POS2[1]);
let bottomY = Math.min(POS1[1], POS2[1]);

let curY_UHC = topY;
let timer_UHC = 0;
let started_UHC = false;
let done_UHC = false;
const START_MS_UHC = 600000;
const REPEAT_INTERVAL_UHC = 600000;
let repeatTimer_UHC = 0;

// ======= 定時補石頭區域 =======
const STONE_POS1 = [-129, -754, 246.75];
const STONE_POS2 = [-100.25, -710, 217.25];

let minX2 = Math.min(STONE_POS1[0], STONE_POS2[0]);
let maxX2 = Math.max(STONE_POS1[0], STONE_POS2[0]);
let minZ2 = Math.min(STONE_POS1[2], STONE_POS2[2]);
let maxZ2 = Math.max(STONE_POS1[2], STONE_POS2[2]);
let topY2 = Math.max(STONE_POS1[1], STONE_POS2[1]);
let bottomY2 = Math.min(STONE_POS1[1], STONE_POS2[1]);

let curY2 = topY2;
let timer2 = 0;
let started2 = false;
let done2 = false;
const START_MS2 = 900000;
const REPEAT_INTERVAL2 = 900000;
let repeatTimer2 = 0;

// ======= 合併 tick =======
tick = (dt) => {
    // ========== 清空 UHC ==========
    if (!done_UHC) {
        timer_UHC += dt;
        if (!started_UHC) {
            if (timer_UHC >= START_MS_UHC) {
                started_UHC = true;
                api.broadcastMessage("正在清理UHC競技場", { color: "yellow" });
            }
        } else {
            if (curY_UHC < bottomY) {
                done_UHC = true;
                api.broadcastMessage("區域已清空完畢", { color: "green" });
            } else {
                for (let z = minZ; z <= maxZ; z += 10) {
                    for (let x = minX; x <= maxX; x += 10) {
                        api.setBlockRect(
                            [x, curY_UHC, z],
                            [Math.min(x + 9, maxX), curY_UHC, Math.min(z + 9, maxZ)],
                            "Air"
                        );
                    }
                }
                curY_UHC--;
            }
        }
    } else {
        repeatTimer_UHC += dt;
        if (repeatTimer_UHC >= REPEAT_INTERVAL_UHC) {
            // 重設狀態，準備下一輪清空
            curY_UHC = topY;
            timer_UHC = 0;
            started_UHC = false;
            done_UHC = false;
            repeatTimer_UHC = 0;
            api.broadcastMessage("準備下一輪 UHC 清理", { color: "yellow" });
        }
    }

    // ========== 補石頭 ==========
    if (!done2) {
        timer2 += dt;
        if (!started2) {
            if (timer2 >= START_MS2) {
                started2 = true;
                api.broadcastMessage("正在補充 Hole PvP 石頭", { color: "yellow" });
            }
        } else {
            if (curY2 < bottomY2) {
                done2 = true;
                api.broadcastMessage("已補充完畢", { color: "green" });
            } else {
                for (let z = minZ2; z <= maxZ2; z += 10) {
                    for (let x = minX2; x <= maxX2; x += 10) {
                        api.setBlockRect(
                            [x, curY2, z],
                            [Math.min(x + 9, maxX2), curY2, Math.min(z + 9, maxZ2)],
                            "Stone"
                        );
                    }
                }
                curY2--;
            }
        }
    } else {
        repeatTimer2 += dt;
        if (repeatTimer2 >= REPEAT_INTERVAL2) {
            curY2 = topY2;
            timer2 = 0;
            started2 = false;
            done2 = false;
            repeatTimer2 = 0;
            api.broadcastMessage("準備下一輪石頭補充", { color: "yellow" });
        }
    }
    guard = ["YTProcat135"];

};