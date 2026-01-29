/**
 * Bloxd.io 積木代碼編輯器 - 代碼生成器
 * 提供自定義代碼生成邏輯
 */

// ============ 進階函數積木 ============

Blockly.defineBlocksWithJsonArray([
    // 遊戲時間相關
    {
        "type": "get_time_passed",
        "message0": "獲取遊戲運行時間（秒）",
        "output": "Number",
        "colour": "#74b9ff",
        "tooltip": "獲取自遊戲開始以來經過的秒數"
    },
    // 隨機數
    {
        "type": "random_number",
        "message0": "隨機數 %1 到 %2",
        "args0": [
            { "type": "field_number", "name": "MIN", "value": 1 },
            { "type": "field_number", "name": "MAX", "value": 10 }
        ],
        "output": "Number",
        "colour": "#74b9ff",
        "tooltip": "返回指定範圍內的隨機整數"
    },
    // 取得所有玩家
    {
        "type": "get_all_players",
        "message0": "獲取所有玩家列表",
        "output": "Array",
        "colour": "#74b9ff",
        "tooltip": "獲取遊戲中所有玩家的 ID 列表"
    },
    // 檢查玩家是否活著
    {
        "type": "is_alive",
        "message0": "%1 是否活著",
        "args0": [{ "type": "field_variable", "name": "ENTITY", "variable": "myId" }],
        "output": "Boolean",
        "colour": "#ff6348",
        "tooltip": "檢查實體是否還活著"
    },
    // 獲取實體類型
    {
        "type": "get_entity_type",
        "message0": "獲取 %1 的實體類型",
        "args0": [{ "type": "field_variable", "name": "ENTITY", "variable": "myId" }],
        "output": "String",
        "colour": "#74b9ff",
        "tooltip": "獲取實體的類型"
    },
    // 設置方塊矩形區域
    {
        "type": "set_block_rect",
        "message0": "設置方塊矩形 從 X:%1 Y:%2 Z:%3 到 X:%4 Y:%5 Z:%6 為 %7",
        "args0": [
            { "type": "field_number", "name": "X1", "value": 0 },
            { "type": "field_number", "name": "Y1", "value": 0 },
            { "type": "field_number", "name": "Z1", "value": 0 },
            { "type": "field_number", "name": "X2", "value": 10 },
            { "type": "field_number", "name": "Y2", "value": 10 },
            { "type": "field_number", "name": "Z2", "value": 10 },
            { "type": "field_input", "name": "BLOCK", "text": "stone" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#74b9ff",
        "tooltip": "設置一個方塊矩形區域"
    }
]);

// 進階函數的代碼生成
Blockly.JavaScript['get_time_passed'] = function (block) {
    return [`api.now()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['random_number'] = function (block) {
    const min = block.getFieldValue('MIN');
    const max = block.getFieldValue('MAX');
    return [`Math.floor(Math.random() * (${max} - ${min} + 1)) + ${min}`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['get_all_players'] = function (block) {
    return [`api.getPlayerIds()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['is_alive'] = function (block) {
    const entity = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('ENTITY'),
        Blockly.Variables.NAME_TYPE
    );
    return [`api.isAlive(${entity})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['get_entity_type'] = function (block) {
    const entity = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('ENTITY'),
        Blockly.Variables.NAME_TYPE
    );
    return [`api.getEntityType(${entity})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['set_block_rect'] = function (block) {
    const x1 = block.getFieldValue('X1');
    const y1 = block.getFieldValue('Y1');
    const z1 = block.getFieldValue('Z1');
    const x2 = block.getFieldValue('X2');
    const y2 = block.getFieldValue('Y2');
    const z2 = block.getFieldValue('Z2');
    const blockType = block.getFieldValue('BLOCK');
    return `api.setBlockRect([${x1}, ${y1}, ${z1}], [${x2}, ${y2}, ${z2}], "${blockType}");\n`;
};

// ============ 模板代碼 ============

function getWorldCodeTemplate() {
    return `// Bloxd.io 世界代碼模板
// 這個代碼在世界加載時執行一次

console.log("世界已加載!");

// 在這裡添加你的世界代碼
`;
}

function getCodeBlockTemplate() {
    return `// Bloxd.io 代碼塊模板
// 這個代碼在代碼塊被激活時執行

console.log("代碼塊已執行!");

// 在這裡添加你的代碼
`;
}

// ============ 確保所有生成器都可被訪問 ============
console.log('✅ code-generator.js 已加載，進階生成器已註冊到 Blockly.JavaScript');
