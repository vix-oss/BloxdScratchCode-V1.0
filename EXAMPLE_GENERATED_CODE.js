// ===== Bloxd.io 積木編輯器示例代碼 =====
// 這些是使用積木編輯器生成的示例代碼

// ===== 示例 1: 玩家加入歡迎系統 =====
/*
積木配置:
  當玩家加入 →
    廣播消息: "歡迎來到遊戲!"
    設置 myId 的生命值為 20
    設置 myId 的盾牌為 10

生成的代碼:
*/
api.broadcastMessage("歡迎來到遊戲!");
api.setHealth(myId, 20);
api.setShieldAmount(myId, 10);


// ===== 示例 2: 玩家跳躍時向上推動 =====
/*
積木配置:
  當玩家跳躍 →
    對 myId 施加衝擊 X: 0 Y: 20 Z: 0

生成的代碼:
*/
api.applyImpulse(myId, 0, 20, 0);


// ===== 示例 3: 條件判斷和傷害系統 =====
/*
積木配置:
  當實體受傷 (entity, damage) →
    獲取 entity 的生命值
    如果 [生命值] 小於 5 那麼
      廣播消息: "警告: 生命值過低!"

生成的代碼:
*/
let health = api.getHealth(entity);
if (health < 5) {
    api.broadcastMessage("警告: 生命值過低!");
}


// ===== 示例 4: 循環造成傷害 =====
/*
積木配置:
  當玩家加入 →
    重複 3 次
      對 target 造成 10 傷害 (來自 myId)
      等待 1 秒

生成的代碼:
*/
for (let i = 0; i < 3; i++) {
    api.applyHealthChange(target, -10, myId);
    await new Promise(resolve => setTimeout(resolve, 1000));
}


// ===== 示例 5: 複雜的遊戲邏輯 =====
/*
積木配置:
  當玩家加入 →
    將 playerHealth 設為 20
    將 playerShield 設為 10
    設置 myId 的生命值為 playerHealth
    設置 myId 的盾牌為 playerShield
    廣播消息: "遊戲開始!"
    
    當 (playerHealth 大於 0) 時重複
      如果 (playerHealth) 小於 (5) 那麼
        廣播消息: "你的生命值很低!"
        等待 2 秒

生成的代碼:
*/
let playerHealth = 20;
let playerShield = 10;
api.setHealth(myId, playerHealth);
api.setShieldAmount(myId, playerShield);
api.broadcastMessage("遊戲開始!");

while (playerHealth > 0) {
    if (playerHealth < 5) {
        api.broadcastMessage("你的生命值很低!");
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
}


// ===== 示例 6: 位置傳送 =====
/*
積木配置:
  當玩家聊天 (message) →
    如果 message 等於 "/spawn" 那麼
      設置 myId 的位置 X: 0 Y: 10 Z: 0
      廣播消息: "已傳送到出生點!"

生成的代碼:
*/
if (message === "/spawn") {
    api.setPosition(myId, 0, 10, 0);
    api.broadcastMessage("已傳送到出生點!");
}


// ===== 示例 7: 隨機數遊戲 =====
/*
積木配置:
  當玩家加入 →
    將 randomDamage 設為 (隨機數 1 到 20)
    對 myId 造成 randomDamage 傷害 (來自 myId)
    廣播消息: "受到隨機傷害!"

生成的代碼:
*/
let randomDamage = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
api.applyHealthChange(myId, -randomDamage, myId);
api.broadcastMessage("受到隨機傷害!");


// ===== 示例 8: 檢查實體狀態 =====
/*
積木配置:
  當玩家加入 →
    如果 myId 是否活著 那麼
      廣播消息: "玩家已加入遊戲"
    否則
      廣播消息: "玩家已死亡"

生成的代碼:
*/
if (api.isAlive(myId)) {
    api.broadcastMessage("玩家已加入遊戲");
}


// ===== 示例 9: 多條件判斷 =====
/*
積木配置:
  當實體受傷 (entity, damage) →
    獲取 entity 的生命值
    獲取 entity 的盾牌
    
    如果 ((生命值 大於 10) AND (盾牌 大於 5)) 那麼
      廣播消息: "狀態良好"
    
    如果 ((生命值 小於 5) OR (盾牌 等於 0)) 那麼
      廣播消息: "危險!"

生成的代碼:
*/
let health = api.getHealth(entity);
let shield = api.getShieldAmount(entity);

if ((health > 10) && (shield > 5)) {
    api.broadcastMessage("狀態良好");
}

if ((health < 5) || (shield === 0)) {
    api.broadcastMessage("危險!");
}


// ===== 示例 10: 方塊操作 =====
/*
積木配置:
  當玩家聊天 (message) →
    如果 message 等於 "/build" 那麼
      在 X:0 Y:5 Z:0 放置 stone 方塊
      在 X:1 Y:5 Z:0 放置 stone 方塊
      在 X:2 Y:5 Z:0 放置 stone 方塊
      廣播消息: "建築完成!"

生成的代碼:
*/
if (message === "/build") {
    api.setBlock(0, 5, 0, "stone");
    api.setBlock(1, 5, 0, "stone");
    api.setBlock(2, 5, 0, "stone");
    api.broadcastMessage("建築完成!");
}


// ===== API 函數快速參考 =====
/*

位置和移動:
  api.getPosition(entityId) → [x, y, z]
  api.setPosition(entityId, x, y, z) → void
  api.applyImpulse(entityId, x, y, z) → void
  api.getVelocity(entityId) → [x, y, z]

生命值:
  api.getHealth(entityId) → number
  api.setHealth(entityId, health) → void
  api.applyHealthChange(entityId, change, source) → void
  api.killLifeform(entityId, source) → void

盾牌:
  api.getShieldAmount(entityId) → number
  api.setShieldAmount(entityId, amount) → void

實體信息:
  api.getEntityType(entityId) → string
  api.getEntityName(entityId) → string
  api.isAlive(entityId) → boolean

消息和通信:
  api.broadcastMessage(text) → void
  api.sendMessage(playerId, text) → void

方塊操作:
  api.getBlockData(x, y, z) → string
  api.setBlock(x, y, z, blockType) → void

更多 API 詳見: code-api-main/API.md

*/
