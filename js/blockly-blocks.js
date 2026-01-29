/**
 * Bloxd.io 積木代碼編輯器 - Neon Scratch 版本
 * 基於 Bloxd.io API 文檔
 */

// 確保 Blockly.JavaScript 存在
if (typeof Blockly !== 'undefined' && !Blockly.JavaScript) {
    console.warn('Blockly.JavaScript not initialized yet');
}

// ============ 事件積木 ============
Blockly.defineBlocksWithJsonArray([
    // 玩家加入事件
    {
        "type": "on_player_join",
        "message0": "Player Join %1 playerId %2",
        "args0": [
            { "type": "input_dummy" },
            { "type": "input_statement", "name": "DO" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "When a new player joins the game"
    },
    // 玩家離開事件
    {
        "type": "on_player_leave",
        "message0": "Player Leave %1 playerId %2",
        "args0": [
            { "type": "input_dummy" },
            { "type": "input_statement", "name": "DO" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "When a player leaves the game"
    },
    // 玩家聊天事件
    {
        "type": "on_player_chat",
        "message0": "Player Chat %1 playerId %2 message %3",
        "args0": [
            { "type": "input_dummy" },
            { "type": "input_dummy" },
            { "type": "input_statement", "name": "DO" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "When a player sends a chat message"
    },
    // 玩家跳躍事件
    {
        "type": "on_player_jump",
        "message0": "Player Jump %1 playerId %2",
        "args0": [
            { "type": "input_dummy" },
            { "type": "input_statement", "name": "DO" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "When a player jumps"
    },
    // Respawn Request 事件
    {
        "type": "on_respawn_request",
        "message0": "Respawn Request %1 playerId %2",
        "args0": [
            { "type": "input_dummy" },
            { "type": "input_statement", "name": "DO" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "When a player requests respawn"
    },
    // Every Tick 事件
    {
        "type": "on_tick",
        "message0": "Every Tick %1 ms %2",
        "args0": [
            { "type": "input_dummy" },
            { "type": "input_statement", "name": "DO" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "Executes every tick"
    },

    // ============ 玩家動作積木 ============
    {
        "type": "set_pos",
        "message0": "Set Pos ID %1 X %2 Y %3 Z %4",
        "args0": [
            { "type": "input_value", "name": "ID" },
            { "type": "input_value", "name": "X", "check": "Number" },
            { "type": "input_value", "name": "Y", "check": "Number" },
            { "type": "input_value", "name": "Z", "check": "Number" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#4ecdc4",
        "tooltip": "Set player position"
    },
    {
        "type": "set_velocity",
        "message0": "Set Velocity ID %1 X %2 Y %3 Z %4",
        "args0": [
            { "type": "input_value", "name": "ID" },
            { "type": "input_value", "name": "X", "check": "Number" },
            { "type": "input_value", "name": "Y", "check": "Number" },
            { "type": "input_value", "name": "Z", "check": "Number" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#4ecdc4",
        "tooltip": "Set player velocity"
    },
    {
        "type": "apply_impulse",
        "message0": "Apply Impulse ID %1 X %2 Y %3 Z %4",
        "args0": [
            { "type": "input_value", "name": "ID" },
            { "type": "input_value", "name": "X", "check": "Number" },
            { "type": "input_value", "name": "Y", "check": "Number" },
            { "type": "input_value", "name": "Z", "check": "Number" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#4ecdc4",
        "tooltip": "Apply impulse to player"
    },
    {
        "type": "set_health",
        "message0": "Set Health ID %1 HP %2",
        "args0": [
            { "type": "input_value", "name": "ID" },
            { "type": "input_value", "name": "HP", "check": "Number" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#ff6348",
        "tooltip": "Set player health"
    },
    {
        "type": "send_message",
        "message0": "Send Message ID %1 Text %2",
        "args0": [
            { "type": "input_value", "name": "ID" },
            { "type": "input_value", "name": "TEXT", "check": "String" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#4ecdc4",
        "tooltip": "Send message to player"
    },
    {
        "type": "broadcast_message",
        "message0": "Broadcast Text %1",
        "args0": [{ "type": "input_value", "name": "TEXT", "check": "String" }],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#4ecdc4",
        "tooltip": "Broadcast message to all players"
    },
    {
        "type": "kill_player",
        "message0": "Kill ID %1",
        "args0": [{ "type": "input_value", "name": "ID" }],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#ff6348",
        "tooltip": "Kill a player"
    },
    {
        "type": "kick_player",
        "message0": "Kick ID %1 Reason %2",
        "args0": [
            { "type": "input_value", "name": "ID" },
            { "type": "input_value", "name": "REASON", "check": "String" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#ff6348",
        "tooltip": "Kick a player"
    },
    {
        "type": "log_info",
        "message0": "Log Info %1",
        "args0": [{ "type": "input_value", "name": "TEXT" }],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#a29bfe",
        "tooltip": "Log information"
    },

    // ============ 物品積木 ============
    {
        "type": "give_item",
        "message0": "Give Item ID %1 Item %2 Amount %3",
        "args0": [
            { "type": "input_value", "name": "ID" },
            { "type": "field_input", "name": "ITEM", "text": "wood" },
            { "type": "input_value", "name": "AMOUNT", "check": "Number" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#ffd700",
        "tooltip": "Give item to player"
    },
    {
        "type": "set_item_attr",
        "message0": "Set Item Attribute Key %1 Value %2",
        "args0": [
            { "type": "field_input", "name": "KEY", "text": "name" },
            { "type": "input_value", "name": "VALUE" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#ffd700",
        "tooltip": "Set item attribute"
    },

    // ============ 邏輯積木 ============
    {
        "type": "if_condition",
        "message0": "if %1 then %2",
        "args0": [
            { "type": "input_value", "name": "CONDITION", "check": "Boolean" },
            { "type": "input_statement", "name": "DO" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#fdcb6e",
        "tooltip": "Conditional branching"
    },
    {
        "type": "while_loop",
        "message0": "while %1 do %2",
        "args0": [
            { "type": "input_value", "name": "CONDITION", "check": "Boolean" },
            { "type": "input_statement", "name": "DO" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#fdcb6e",
        "tooltip": "Loop while condition is true"
    },
    {
        "type": "for_loop",
        "message0": "repeat %1 times %2",
        "args0": [
            { "type": "input_value", "name": "TIMES", "check": "Number" },
            { "type": "input_statement", "name": "DO" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#fdcb6e",
        "tooltip": "Loop a number of times"
    },

    // ============ 運算符積木 ============
    {
        "type": "compare_equal",
        "message0": "%1 = %2",
        "args0": [
            { "type": "input_value", "name": "A" },
            { "type": "input_value", "name": "B" }
        ],
        "output": "Boolean",
        "colour": "#fdcb6e",
        "tooltip": "Check if equal"
    },
    {
        "type": "compare_less",
        "message0": "%1 < %2",
        "args0": [
            { "type": "input_value", "name": "A" },
            { "type": "input_value", "name": "B" }
        ],
        "output": "Boolean",
        "colour": "#fdcb6e",
        "tooltip": "Check if less than"
    },
    {
        "type": "logic_and",
        "message0": "%1 and %2",
        "args0": [
            { "type": "input_value", "name": "A", "check": "Boolean" },
            { "type": "input_value", "name": "B", "check": "Boolean" }
        ],
        "output": "Boolean",
        "colour": "#fdcb6e",
        "tooltip": "Logical AND"
    },
    {
        "type": "logic_or",
        "message0": "%1 or %2",
        "args0": [
            { "type": "input_value", "name": "A", "check": "Boolean" },
            { "type": "input_value", "name": "B", "check": "Boolean" }
        ],
        "output": "Boolean",
        "colour": "#fdcb6e",
        "tooltip": "Logical OR"
    },
    {
        "type": "logic_not",
        "message0": "not %1",
        "args0": [{ "type": "input_value", "name": "A", "check": "Boolean" }],
        "output": "Boolean",
        "colour": "#fdcb6e",
        "tooltip": "Logical NOT"
    },
    {
        "type": "math_add",
        "message0": "%1 + %2",
        "args0": [
            { "type": "input_value", "name": "A", "check": "Number" },
            { "type": "input_value", "name": "B", "check": "Number" }
        ],
        "output": "Number",
        "colour": "#95a5a6",
        "tooltip": "Addition"
    },
    {
        "type": "math_subtract",
        "message0": "%1 - %2",
        "args0": [
            { "type": "input_value", "name": "A", "check": "Number" },
            { "type": "input_value", "name": "B", "check": "Number" }
        ],
        "output": "Number",
        "colour": "#95a5a6",
        "tooltip": "Subtraction"
    },
    {
        "type": "math_multiply",
        "message0": "%1 * %2",
        "args0": [
            { "type": "input_value", "name": "A", "check": "Number" },
            { "type": "input_value", "name": "B", "check": "Number" }
        ],
        "output": "Number",
        "colour": "#95a5a6",
        "tooltip": "Multiplication"
    },
    {
        "type": "random_number",
        "message0": "Random 1-10",
        "output": "Number",
        "colour": "#95a5a6",
        "tooltip": "Random number between 1 and 10"
    },

    // ============ 值積木 ============
    {
        "type": "number_value",
        "message0": "%1",
        "args0": [{ "type": "field_number", "name": "NUM", "value": 0 }],
        "output": "Number",
        "colour": "#95a5a6",
        "tooltip": "A number"
    },
    {
        "type": "text_value",
        "message0": "text %1",
        "args0": [{ "type": "field_input", "name": "TEXT", "text": "" }],
        "output": "String",
        "colour": "#a29bfe",
        "tooltip": "A text string"
    },
    {
        "type": "text_join",
        "message0": "join %1 %2",
        "args0": [
            { "type": "input_value", "name": "A" },
            { "type": "input_value", "name": "B" }
        ],
        "output": "String",
        "colour": "#a29bfe",
        "tooltip": "Join two texts"
    }
]);

// ============ 代碼生成器 ============

// 事件生成器
Blockly.JavaScript['on_player_join'] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `function onPlayerJoin(playerId) {\n${statements}}\n`;
};

Blockly.JavaScript['on_player_leave'] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `function onPlayerLeave(playerId) {\n${statements}}\n`;
};

Blockly.JavaScript['on_player_chat'] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `function onPlayerChat(playerId, message) {\n${statements}return false;\n}\n`;
};

Blockly.JavaScript['on_player_jump'] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `function onPlayerJump(playerId) {\n${statements}}\n`;
};

Blockly.JavaScript['on_respawn_request'] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `function onRespawnRequest(playerId) {\n${statements}}\n`;
};

Blockly.JavaScript['on_tick'] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `function onTick(ms) {\n${statements}}\n`;
};

// 玩家動作
Blockly.JavaScript['set_pos'] = function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC) || 'playerId';
    const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const z = Blockly.JavaScript.valueToCode(block, 'Z', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return `setPos(${id}, ${x}, ${y}, ${z});\n`;
};

Blockly.JavaScript['set_velocity'] = function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC) || 'playerId';
    const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const z = Blockly.JavaScript.valueToCode(block, 'Z', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return `setVelocity(${id}, ${x}, ${y}, ${z});\n`;
};

Blockly.JavaScript['apply_impulse'] = function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC) || 'playerId';
    const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const z = Blockly.JavaScript.valueToCode(block, 'Z', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return `applyImpulse(${id}, ${x}, ${y}, ${z});\n`;
};

Blockly.JavaScript['set_health'] = function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC) || 'playerId';
    const hp = Blockly.JavaScript.valueToCode(block, 'HP', Blockly.JavaScript.ORDER_ATOMIC) || '20';
    return `setHealth(${id}, ${hp});\n`;
};

Blockly.JavaScript['send_message'] = function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC) || 'playerId';
    const text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    return `sendMessage(${id}, ${text});\n`;
};

Blockly.JavaScript['broadcast_message'] = function (block) {
    const text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    return `broadcast(${text});\n`;
};

Blockly.JavaScript['kill_player'] = function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC) || 'playerId';
    return `kill(${id});\n`;
};

Blockly.JavaScript['kick_player'] = function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC) || 'playerId';
    const reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    return `kick(${id}, ${reason});\n`;
};

Blockly.JavaScript['log_info'] = function (block) {
    const text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    return `logInfo(${text});\n`;
};

// 物品
Blockly.JavaScript['give_item'] = function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC) || 'playerId';
    const item = block.getFieldValue('ITEM') || 'wood';
    const amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_ATOMIC) || '1';
    return `giveItem(${id}, "${item}", ${amount});\n`;
};

Blockly.JavaScript['set_item_attr'] = function (block) {
    const key = block.getFieldValue('KEY') || 'name';
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    return `setItemAttribute("${key}", ${value});\n`;
};

// 邏輯
Blockly.JavaScript['if_condition'] = function (block) {
    const condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `if (${condition}) {\n${statements}}\n`;
};

Blockly.JavaScript['while_loop'] = function (block) {
    const condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `while (${condition}) {\n${statements}}\n`;
};

Blockly.JavaScript['for_loop'] = function (block) {
    const times = Blockly.JavaScript.valueToCode(block, 'TIMES', Blockly.JavaScript.ORDER_ATOMIC) || '10';
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `for (let i = 0; i < ${times}; i++) {\n${statements}}\n`;
};

// 運算符
Blockly.JavaScript['compare_equal'] = function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_RELATIONAL) || '0';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_RELATIONAL) || '0';
    return [`${a} === ${b}`, Blockly.JavaScript.ORDER_RELATIONAL];
};

Blockly.JavaScript['compare_less'] = function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_RELATIONAL) || '0';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_RELATIONAL) || '0';
    return [`${a} < ${b}`, Blockly.JavaScript.ORDER_RELATIONAL];
};

Blockly.JavaScript['logic_and'] = function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_LOGICAL_AND) || 'false';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_LOGICAL_AND) || 'false';
    return [`${a} && ${b}`, Blockly.JavaScript.ORDER_LOGICAL_AND];
};

Blockly.JavaScript['logic_or'] = function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_LOGICAL_OR) || 'false';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_LOGICAL_OR) || 'false';
    return [`${a} || ${b}`, Blockly.JavaScript.ORDER_LOGICAL_OR];
};

Blockly.JavaScript['logic_not'] = function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_LOGICAL_NOT) || 'false';
    return [`!${a}`, Blockly.JavaScript.ORDER_LOGICAL_NOT];
};

Blockly.JavaScript['math_add'] = function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ADDITIVE) || '0';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ADDITIVE) || '0';
    return [`${a} + ${b}`, Blockly.JavaScript.ORDER_ADDITIVE];
};

Blockly.JavaScript['math_subtract'] = function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ADDITIVE) || '0';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ADDITIVE) || '0';
    return [`${a} - ${b}`, Blockly.JavaScript.ORDER_ADDITIVE];
};

Blockly.JavaScript['math_multiply'] = function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_MULTIPLICATIVE) || '0';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_MULTIPLICATIVE) || '0';
    return [`${a} * ${b}`, Blockly.JavaScript.ORDER_MULTIPLICATIVE];
};

Blockly.JavaScript['random_number'] = function (block) {
    return [`Math.floor(Math.random() * 10) + 1`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// 值
Blockly.JavaScript['number_value'] = function (block) {
    const num = block.getFieldValue('NUM');
    return [num, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['text_value'] = function (block) {
    const text = block.getFieldValue('TEXT');
    return [`"${text}"`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['text_join'] = function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    return [`${a} + ${b}`, Blockly.JavaScript.ORDER_ADDITIVE];
};

console.log('✅ Neon Scratch blocks loaded successfully');

// ============ 事件積木 ============
Blockly.defineBlocksWithJsonArray([
    // 玩家加入事件
    {
        "type": "on_player_join",
        "message0": "當玩家加入 %1",
        "args0": [{ "type": "input_statement", "name": "DO" }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "當新玩家加入遊戲時觸發"
    },
    // 玩家離開事件
    {
        "type": "on_player_leave",
        "message0": "當玩家離開 %1",
        "args0": [{ "type": "input_statement", "name": "DO" }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "當玩家離開遊戲時觸發"
    },
    // 玩家聊天事件
    {
        "type": "on_player_chat",
        "message0": "當玩家聊天 %1",
        "args0": [{ "type": "input_statement", "name": "DO" }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "當玩家發送聊天消息時觸發"
    },
    // 玩家擊殺事件
    {
        "type": "on_player_killed",
        "message0": "當玩家擊殺 %1",
        "args0": [{ "type": "input_statement", "name": "DO" }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "當玩家擊殺其他玩家時觸發"
    },
    // tick 事件
    {
        "type": "on_tick",
        "message0": "每幀執行 %1",
        "args0": [{ "type": "input_statement", "name": "DO" }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "每幀執行一次"
    },
    // ============ 玩家動作積木 ============
    {
        "type": "broadcast_message",
        "message0": "廣播消息 %1",
        "args0": [{ "type": "input_value", "name": "MSG", "check": "String" }],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#4ecdc4",
        "tooltip": "向所有玩家廣播消息"
    },
    {
        "type": "set_health",
        "message0": "設置 %1 的生命值為 %2",
        "args0": [
            { "type": "field_variable", "name": "ENTITY", "variable": "playerId" },
            { "type": "input_value", "name": "HEALTH", "check": "Number" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#ff6348",
        "tooltip": "設置實體的生命值"
    },
    {
        "type": "get_health",
        "message0": "獲取 %1 的生命值",
        "args0": [{ "type": "field_variable", "name": "ENTITY", "variable": "playerId" }],
        "output": "Number",
        "colour": "#ff6348",
        "tooltip": "獲取實體的生命值"
    },
    {
        "type": "apply_damage",
        "message0": "給 %1 造成傷害 %2",
        "args0": [
            { "type": "field_variable", "name": "ENTITY", "variable": "playerId" },
            { "type": "input_value", "name": "DAMAGE", "check": "Number" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#ff6348",
        "tooltip": "給實體造成傷害"
    },
    // ============ 邏輯積木 ============
    {
        "type": "if_condition",
        "message0": "如果 %1 那麼 %2",
        "args0": [
            { "type": "input_value", "name": "CONDITION", "check": "Boolean" },
            { "type": "input_statement", "name": "DO" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#fdcb6e",
        "tooltip": "條件分支"
    },
    {
        "type": "while_loop",
        "message0": "當 %1 執行 %2",
        "args0": [
            { "type": "input_value", "name": "CONDITION", "check": "Boolean" },
            { "type": "input_statement", "name": "DO" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#fdcb6e",
        "tooltip": "循環執行直到條件為假"
    },
    {
        "type": "for_loop",
        "message0": "重複 %1 次 %2",
        "args0": [
            { "type": "input_value", "name": "TIMES", "check": "Number" },
            { "type": "input_statement", "name": "DO" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#fdcb6e",
        "tooltip": "循環執行指定次數"
    },
    {
        "type": "set_variable",
        "message0": "設置變數 %1 為 %2",
        "args0": [
            { "type": "field_variable", "name": "VAR", "variable": "item" },
            { "type": "input_value", "name": "VALUE" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#a29bfe",
        "tooltip": "給變數賦值"
    },
    {
        "type": "get_variable",
        "message0": "獲取變數 %1",
        "args0": [{ "type": "field_variable", "name": "VAR", "variable": "item" }],
        "output": null,
        "colour": "#a29bfe",
        "tooltip": "獲取變數的值"
    },
    // ============ 比較積木 ============
    {
        "type": "compare_equal",
        "message0": "%1 等於 %2",
        "args0": [
            { "type": "input_value", "name": "A" },
            { "type": "input_value", "name": "B" }
        ],
        "output": "Boolean",
        "colour": "#fdcb6e",
        "tooltip": "檢查兩個值是否相等"
    },
    {
        "type": "compare_greater",
        "message0": "%1 大於 %2",
        "args0": [
            { "type": "input_value", "name": "A" },
            { "type": "input_value", "name": "B" }
        ],
        "output": "Boolean",
        "colour": "#fdcb6e",
        "tooltip": "檢查第一個值是否大於第二個"
    },
    {
        "type": "compare_less",
        "message0": "%1 小於 %2",
        "args0": [
            { "type": "input_value", "name": "A" },
            { "type": "input_value", "name": "B" }
        ],
        "output": "Boolean",
        "colour": "#fdcb6e",
        "tooltip": "檢查第一個值是否小於第二個"
    },
    {
        "type": "logic_and",
        "message0": "%1 AND %2",
        "args0": [
            { "type": "input_value", "name": "A", "check": "Boolean" },
            { "type": "input_value", "name": "B", "check": "Boolean" }
        ],
        "output": "Boolean",
        "colour": "#fdcb6e",
        "tooltip": "兩個條件都為真"
    },
    {
        "type": "logic_or",
        "message0": "%1 OR %2",
        "args0": [
            { "type": "input_value", "name": "A", "check": "Boolean" },
            { "type": "input_value", "name": "B", "check": "Boolean" }
        ],
        "output": "Boolean",
        "colour": "#fdcb6e",
        "tooltip": "至少一個條件為真"
    },
    {
        "type": "logic_not",
        "message0": "NOT %1",
        "args0": [{ "type": "input_value", "name": "A", "check": "Boolean" }],
        "output": "Boolean",
        "colour": "#fdcb6e",
        "tooltip": "反轉條件"
    },
    // ============ 數學積木 ============
    {
        "type": "math_add",
        "message0": "%1 + %2",
        "args0": [
            { "type": "input_value", "name": "A", "check": "Number" },
            { "type": "input_value", "name": "B", "check": "Number" }
        ],
        "output": "Number",
        "colour": "#fdcb6e",
        "tooltip": "加法"
    },
    {
        "type": "number_value",
        "message0": "%1",
        "args0": [{ "type": "field_number", "name": "NUM", "value": 0 }],
        "output": "Number",
        "colour": "#fdcb6e",
        "tooltip": "數字"
    },
    {
        "type": "string_value",
        "message0": "文字 %1",
        "args0": [{ "type": "field_input", "name": "TEXT", "text": "" }],
        "output": "String",
        "colour": "#a29bfe",
        "tooltip": "文本字符串"
    },
    // ============ 方塊積木 ============
    {
        "type": "get_block_at",
        "message0": "獲取位置 X:%1 Y:%2 Z:%3 的方塊",
        "args0": [
            { "type": "field_number", "name": "X", "value": 0 },
            { "type": "field_number", "name": "Y", "value": 0 },
            { "type": "field_number", "name": "Z", "value": 0 }
        ],
        "output": "String",
        "colour": "#74b9ff",
        "tooltip": "獲取指定位置的方塊類型"
    },
    {
        "type": "set_block_at",
        "message0": "在 X:%1 Y:%2 Z:%3 放置 %4 方塊",
        "args0": [
            { "type": "field_number", "name": "X", "value": 0 },
            { "type": "field_number", "name": "Y", "value": 0 },
            { "type": "field_number", "name": "Z", "value": 0 },
            { "type": "field_input", "name": "BLOCK", "text": "stone" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#74b9ff",
        "tooltip": "在指定位置設置方塊"
    },
    // ============ 缺失的積木定義 ============
    {
        "type": "get_shield",
        "message0": "獲取 %1 的盾牌",
        "args0": [{ "type": "field_variable", "name": "ENTITY", "variable": "playerId" }],
        "output": "Number",
        "colour": "#6c5ce7",
        "tooltip": "獲取實體的盾牌值"
    },
    {
        "type": "set_shield",
        "message0": "設置 %1 的盾牌為 %2",
        "args0": [
            { "type": "field_variable", "name": "ENTITY", "variable": "playerId" },
            { "type": "input_value", "name": "SHIELD", "check": "Number" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#6c5ce7",
        "tooltip": "設置實體的盾牌值"
    },
    {
        "type": "kill_entity",
        "message0": "擊殺 %1",
        "args0": [{ "type": "field_variable", "name": "ENTITY", "variable": "playerId" }],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#ff6348",
        "tooltip": "擊殺實體"
    },
    {
        "type": "apply_impulse",
        "message0": "給 %1 施加衝擊 X: %2 Y: %3 Z: %4",
        "args0": [
            { "type": "field_variable", "name": "ENTITY", "variable": "playerId" },
            { "type": "input_value", "name": "X", "check": "Number" },
            { "type": "input_value", "name": "Y", "check": "Number" },
            { "type": "input_value", "name": "Z", "check": "Number" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#4ecdc4",
        "tooltip": "對實體施加推力"
    },
    {
        "type": "set_position",
        "message0": "設置 %1 的位置為 X: %2 Y: %3 Z: %4",
        "args0": [
            { "type": "field_variable", "name": "ENTITY", "variable": "playerId" },
            { "type": "input_value", "name": "X", "check": "Number" },
            { "type": "input_value", "name": "Y", "check": "Number" },
            { "type": "input_value", "name": "Z", "check": "Number" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#4ecdc4",
        "tooltip": "設置實體位置"
    },
    {
        "type": "get_position",
        "message0": "獲取 %1 的位置",
        "args0": [{ "type": "field_variable", "name": "ENTITY", "variable": "playerId" }],
        "output": "Array",
        "colour": "#4ecdc4",
        "tooltip": "獲取實體的位置"
    },
    {
        "type": "wait_seconds",
        "message0": "等待 %1 秒",
        "args0": [{ "type": "input_value", "name": "SECONDS", "check": "Number" }],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#4ecdc4",
        "tooltip": "暫停執行指定秒數"
    },
    {
        "type": "db_set",
        "message0": "設置數據 %1 為 %2",
        "args0": [
            { "type": "field_input", "name": "KEY", "text": "key" },
            { "type": "input_value", "name": "VALUE" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#a29bfe",
        "tooltip": "保存數據到數據庫"
    },
    {
        "type": "db_get",
        "message0": "獲取數據 %1",
        "args0": [{ "type": "field_input", "name": "KEY", "text": "key" }],
        "output": null,
        "colour": "#a29bfe",
        "tooltip": "從數據庫獲取數據"
    },
    {
        "type": "db_delete",
        "message0": "刪除數據 %1",
        "args0": [{ "type": "field_input", "name": "KEY", "text": "key" }],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#a29bfe",
        "tooltip": "從數據庫刪除數據"
    },
    {
        "type": "get_player_id",
        "message0": "獲取玩家 ID",
        "output": "String",
        "colour": "#4ecdc4",
        "tooltip": "獲取當前玩家的 ID"
    },
    {
        "type": "get_player_name",
        "message0": "獲取玩家名稱",
        "output": "String",
        "colour": "#4ecdc4",
        "tooltip": "獲取當前玩家的名稱"
    },
    {
        "type": "send_message",
        "message0": "發送消息 %1",
        "args0": [{ "type": "input_value", "name": "MSG", "check": "String" }],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#4ecdc4",
        "tooltip": "發送消息給玩家"
    }
]);

// ============ 代碼生成器 ============

// 事件積木代碼生成
Blockly.JavaScript['on_player_join'] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `function onPlayerJoin(playerId) {\n${statements}}\n`;
};

Blockly.JavaScript['on_player_leave'] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `function onPlayerLeave(playerId) {\n${statements}}\n`;
};

Blockly.JavaScript['on_player_chat'] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `function onPlayerChat(playerId, msg) {\n${statements}return true;\n}\n`;
};

Blockly.JavaScript['on_player_killed'] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `function onPlayerKilledOtherPlayer(killerId, victimId) {\n${statements}return false;\n}\n`;
};

Blockly.JavaScript['on_tick'] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `tick = (dt) => {\n${statements}};\n`;
};

// 玩家動作
Blockly.JavaScript['broadcast_message'] = function (block) {
    const msg = Blockly.JavaScript.valueToCode(
        block, 'MSG', Blockly.JavaScript.ORDER_ATOMIC
    ) || '""';
    return `api.broadcastMessage(${msg});\n`;
};

Blockly.JavaScript['set_health'] = function (block) {
    const entity = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('ENTITY'),
        Blockly.Variables.NAME_TYPE
    );
    const health = Blockly.JavaScript.valueToCode(
        block, 'HEALTH', Blockly.JavaScript.ORDER_ATOMIC
    ) || '20';
    return `api.setHealth(${entity}, ${health});\n`;
};

Blockly.JavaScript['get_health'] = function (block) {
    const entity = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('ENTITY'),
        Blockly.Variables.NAME_TYPE
    );
    return [`api.getHealth(${entity})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['apply_damage'] = function (block) {
    const entity = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('ENTITY'),
        Blockly.Variables.NAME_TYPE
    );
    const damage = Blockly.JavaScript.valueToCode(
        block, 'DAMAGE', Blockly.JavaScript.ORDER_ATOMIC
    ) || '1';
    return `api.applyHealthChange(${entity}, -${damage});\n`;
};

// 邏輯控制
Blockly.JavaScript['if_condition'] = function (block) {
    const condition = Blockly.JavaScript.valueToCode(
        block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC
    ) || 'false';
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `if (${condition}) {\n${statements}}\n`;
};

Blockly.JavaScript['while_loop'] = function (block) {
    const condition = Blockly.JavaScript.valueToCode(
        block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC
    ) || 'false';
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `while (${condition}) {\n${statements}}\n`;
};

Blockly.JavaScript['for_loop'] = function (block) {
    const times = Blockly.JavaScript.valueToCode(
        block, 'TIMES', Blockly.JavaScript.ORDER_ATOMIC
    ) || '10';
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `for (let i = 0; i < ${times}; i++) {\n${statements}}\n`;
};

Blockly.JavaScript['set_variable'] = function (block) {
    const variable = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE
    );
    const value = Blockly.JavaScript.valueToCode(
        block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC
    ) || '0';
    return `${variable} = ${value};\n`;
};

Blockly.JavaScript['get_variable'] = function (block) {
    const variable = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE
    );
    return [variable, Blockly.JavaScript.ORDER_ATOMIC];
};

// 比較和邏輯
Blockly.JavaScript['compare_equal'] = function (block) {
    const a = Blockly.JavaScript.valueToCode(
        block, 'A', Blockly.JavaScript.ORDER_RELATIONAL
    ) || '0';
    const b = Blockly.JavaScript.valueToCode(
        block, 'B', Blockly.JavaScript.ORDER_RELATIONAL
    ) || '0';
    return [`${a} === ${b}`, Blockly.JavaScript.ORDER_RELATIONAL];
};

Blockly.JavaScript['compare_greater'] = function (block) {
    const a = Blockly.JavaScript.valueToCode(
        block, 'A', Blockly.JavaScript.ORDER_RELATIONAL
    ) || '0';
    const b = Blockly.JavaScript.valueToCode(
        block, 'B', Blockly.JavaScript.ORDER_RELATIONAL
    ) || '0';
    return [`${a} > ${b}`, Blockly.JavaScript.ORDER_RELATIONAL];
};

Blockly.JavaScript['compare_less'] = function (block) {
    const a = Blockly.JavaScript.valueToCode(
        block, 'A', Blockly.JavaScript.ORDER_RELATIONAL
    ) || '0';
    const b = Blockly.JavaScript.valueToCode(
        block, 'B', Blockly.JavaScript.ORDER_RELATIONAL
    ) || '0';
    return [`${a} < ${b}`, Blockly.JavaScript.ORDER_RELATIONAL];
};

Blockly.JavaScript['logic_and'] = function (block) {
    const a = Blockly.JavaScript.valueToCode(
        block, 'A', Blockly.JavaScript.ORDER_LOGICAL_AND
    ) || 'false';
    const b = Blockly.JavaScript.valueToCode(
        block, 'B', Blockly.JavaScript.ORDER_LOGICAL_AND
    ) || 'false';
    return [`${a} && ${b}`, Blockly.JavaScript.ORDER_LOGICAL_AND];
};

Blockly.JavaScript['logic_or'] = function (block) {
    const a = Blockly.JavaScript.valueToCode(
        block, 'A', Blockly.JavaScript.ORDER_LOGICAL_OR
    ) || 'false';
    const b = Blockly.JavaScript.valueToCode(
        block, 'B', Blockly.JavaScript.ORDER_LOGICAL_OR
    ) || 'false';
    return [`${a} || ${b}`, Blockly.JavaScript.ORDER_LOGICAL_OR];
};

Blockly.JavaScript['logic_not'] = function (block) {
    const a = Blockly.JavaScript.valueToCode(
        block, 'A', Blockly.JavaScript.ORDER_LOGICAL_NOT
    ) || 'false';
    return [`!${a}`, Blockly.JavaScript.ORDER_LOGICAL_NOT];
};

// 數學運算
Blockly.JavaScript['math_add'] = function (block) {
    const a = Blockly.JavaScript.valueToCode(
        block, 'A', Blockly.JavaScript.ORDER_ADDITIVE
    ) || '0';
    const b = Blockly.JavaScript.valueToCode(
        block, 'B', Blockly.JavaScript.ORDER_ADDITIVE
    ) || '0';
    return [`${a} + ${b}`, Blockly.JavaScript.ORDER_ADDITIVE];
};

Blockly.JavaScript['number_value'] = function (block) {
    const num = block.getFieldValue('NUM');
    return [num, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['string_value'] = function (block) {
    const str = block.getFieldValue('TEXT');
    return [`"${str}"`, Blockly.JavaScript.ORDER_ATOMIC];
};

// 方塊操作
Blockly.JavaScript['get_block_at'] = function (block) {
    const x = block.getFieldValue('X');
    const y = block.getFieldValue('Y');
    const z = block.getFieldValue('Z');
    return [`api.getBlockData(${x}, ${y}, ${z})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['set_block_at'] = function (block) {
    const x = block.getFieldValue('X');
    const y = block.getFieldValue('Y');
    const z = block.getFieldValue('Z');
    const blockType = block.getFieldValue('BLOCK');
    return `api.setBlock(${x}, ${y}, ${z}, "${blockType}");\n`;
};

// ============ 新增積木的代碼生成器 ============

Blockly.JavaScript['get_shield'] = function (block) {
    const entity = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('ENTITY'),
        Blockly.Variables.NAME_TYPE
    );
    return [`api.getShieldAmount(${entity})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['set_shield'] = function (block) {
    const entity = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('ENTITY'),
        Blockly.Variables.NAME_TYPE
    );
    const shield = Blockly.JavaScript.valueToCode(
        block, 'SHIELD', Blockly.JavaScript.ORDER_ATOMIC
    ) || '0';
    return `api.setShieldAmount(${entity}, ${shield});\n`;
};

Blockly.JavaScript['kill_entity'] = function (block) {
    const entity = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('ENTITY'),
        Blockly.Variables.NAME_TYPE
    );
    return `api.applyHealthChange(${entity}, -999999);\n`;
};

Blockly.JavaScript['apply_impulse'] = function (block) {
    const entity = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('ENTITY'),
        Blockly.Variables.NAME_TYPE
    );
    const x = Blockly.JavaScript.valueToCode(
        block, 'X', Blockly.JavaScript.ORDER_ATOMIC
    ) || '0';
    const y = Blockly.JavaScript.valueToCode(
        block, 'Y', Blockly.JavaScript.ORDER_ATOMIC
    ) || '0';
    const z = Blockly.JavaScript.valueToCode(
        block, 'Z', Blockly.JavaScript.ORDER_ATOMIC
    ) || '0';
    return `api.applyImpulse(${entity}, ${x}, ${y}, ${z});\n`;
};

Blockly.JavaScript['set_position'] = function (block) {
    const entity = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('ENTITY'),
        Blockly.Variables.NAME_TYPE
    );
    const x = Blockly.JavaScript.valueToCode(
        block, 'X', Blockly.JavaScript.ORDER_ATOMIC
    ) || '0';
    const y = Blockly.JavaScript.valueToCode(
        block, 'Y', Blockly.JavaScript.ORDER_ATOMIC
    ) || '0';
    const z = Blockly.JavaScript.valueToCode(
        block, 'Z', Blockly.JavaScript.ORDER_ATOMIC
    ) || '0';
    return `api.setPosition(${entity}, ${x}, ${y}, ${z});\n`;
};

Blockly.JavaScript['get_position'] = function (block) {
    const entity = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('ENTITY'),
        Blockly.Variables.NAME_TYPE
    );
    return [`api.getPosition(${entity})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['wait_seconds'] = function (block) {
    const seconds = Blockly.JavaScript.valueToCode(
        block, 'SECONDS', Blockly.JavaScript.ORDER_ATOMIC
    ) || '1';
    return `await new Promise(resolve => setTimeout(resolve, ${seconds} * 1000));\n`;
};

Blockly.JavaScript['db_set'] = function (block) {
    const key = block.getFieldValue('KEY');
    const value = Blockly.JavaScript.valueToCode(
        block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC
    ) || 'null';
    return `db["${key}"] = ${value};\n`;
};

Blockly.JavaScript['db_get'] = function (block) {
    const key = block.getFieldValue('KEY');
    return [`(db["${key}"] ?? null)`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['db_delete'] = function (block) {
    const key = block.getFieldValue('KEY');
    return `delete db["${key}"];\n`;
};

Blockly.JavaScript['get_player_id'] = function (block) {
    return [`myId`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_player_name'] = function (block) {
    return [`api.getEntityName(myId)`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['send_message'] = function (block) {
    const msg = Blockly.JavaScript.valueToCode(
        block, 'MSG', Blockly.JavaScript.ORDER_ATOMIC
    ) || '""';
    return `api.sendMessage(myId, ${msg});\n`;
};

// ============ 確保所有生成器都可被訪問 ============
console.log('✅ blockly-blocks.js 已加載，所有生成器已註冊到 Blockly.JavaScript');


