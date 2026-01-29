/**
 * Neon Scratch - Bloxd Code Tool Blocks
 * Based on official Bloxd.io API documentation
 */

// Wait for Blockly to load properly
if (typeof Blockly === 'undefined') {
    console.error('❌ Blockly not loaded');
} else {
    console.log('✅ Blockly loaded, version info:', {
        hasJavaScript: !!Blockly.JavaScript,
        hasForBlock: !!(Blockly.JavaScript && Blockly.JavaScript.forBlock),
        jsType: typeof Blockly.JavaScript,
        jsKeys: Blockly.JavaScript ? Object.keys(Blockly.JavaScript).slice(0, 10) : 'N/A'
    });
}

// Define all blocks based on Bloxd.io API
Blockly.defineBlocksWithJsonArray([
    // ============ EVENT BLOCKS (Callbacks) ============
    {
        "type": "tick",
        "message0": "tick %1 ms",
        "args0": [{ "type": "input_statement", "name": "DO" }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "Called every tick (20 times per second)"
    },
    {
        "type": "on_player_join",
        "message0": "onPlayerJoin %1 playerId",
        "args0": [{ "type": "input_statement", "name": "DO" }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "Called when a player joins the game"
    },
    {
        "type": "on_player_leave",
        "message0": "onPlayerLeave %1 playerId",
        "args0": [{ "type": "input_statement", "name": "DO" }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "Called when a player leaves the game"
    },
    {
        "type": "on_player_chat",
        "message0": "onPlayerChat %1 playerId, message",
        "args0": [{ "type": "input_statement", "name": "DO" }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "Called when a player sends a chat message"
    },
    {
        "type": "on_player_jump",
        "message0": "onPlayerJump %1 playerId",
        "args0": [{ "type": "input_statement", "name": "DO" }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "Called when a player jumps"
    },
    {
        "type": "on_respawn_request",
        "message0": "onRespawnRequest %1 playerId",
        "args0": [{ "type": "input_statement", "name": "DO" }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "Called when a player requests to respawn"
    },
    {
        "type": "player_command",
        "message0": "playerCommand %1 playerId, command",
        "args0": [{ "type": "input_statement", "name": "DO" }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff6b6b",
        "tooltip": "Called when a player executes a command"
    },

    // ============ ENTITY BLOCKS ============
    {
        "type": "get_position",
        "message0": "Get Position of %1",
        "args0": [{ "type": "input_value", "name": "ENTITY_ID" }],
        "output": null,
        "colour": "#4ecdc4",
        "tooltip": "Get position [x, y, z]"
    },
    {
        "type": "set_position",
        "message0": "Set Position %1 X %2 Y %3 Z %4",
        "args0": [
            { "type": "input_value", "name": "ENTITY_ID" },
            { "type": "input_value", "name": "X", "check": "Number" },
            { "type": "input_value", "name": "Y", "check": "Number" },
            { "type": "input_value", "name": "Z", "check": "Number" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#4ecdc4",
        "tooltip": "Set entity position"
    },
    {
        "type": "get_velocity",
        "message0": "Get Velocity of %1",
        "args0": [{ "type": "input_value", "name": "ENTITY_ID" }],
        "output": null,
        "colour": "#4ecdc4",
        "tooltip": "Get velocity [x, y, z]"
    },
    {
        "type": "get_health",
        "message0": "Get Health of %1",
        "args0": [{ "type": "input_value", "name": "ENTITY_ID" }],
        "output": "Number",
        "colour": "#ff6348",
        "tooltip": "Get entity current health"
    },
    {
        "type": "set_health",
        "message0": "Set Health %1 to %2",
        "args0": [
            { "type": "input_value", "name": "ENTITY_ID" },
            { "type": "input_value", "name": "HEALTH", "check": "Number" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#ff6348",
        "tooltip": "Set entity health"
    },
    {
        "type": "apply_health_change",
        "message0": "Apply Health Change %1 amount %2",
        "args0": [
            { "type": "input_value", "name": "ENTITY_ID" },
            { "type": "input_value", "name": "AMOUNT", "check": "Number" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#ff6348",
        "tooltip": "Positive = heal, Negative = damage"
    },
    {
        "type": "get_shield_amount",
        "message0": "Get Shield of %1",
        "args0": [{ "type": "input_value", "name": "ENTITY_ID" }],
        "output": "Number",
        "colour": "#6c5ce7",
        "tooltip": "Get entity shield amount"
    },
    {
        "type": "set_shield_amount",
        "message0": "Set Shield %1 to %2",
        "args0": [
            { "type": "input_value", "name": "ENTITY_ID" },
            { "type": "input_value", "name": "SHIELD", "check": "Number" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#6c5ce7",
        "tooltip": "Set entity shield"
    },
    {
        "type": "get_entity_name",
        "message0": "Get Name of %1",
        "args0": [{ "type": "input_value", "name": "ENTITY_ID" }],
        "output": "String",
        "colour": "#4ecdc4",
        "tooltip": "Get entity display name"
    },
    {
        "type": "send_message",
        "message0": "Send Message to %1 : %2",
        "args0": [
            { "type": "input_value", "name": "ENTITY_ID" },
            { "type": "input_value", "name": "TEXT", "check": "String" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#4ecdc4",
        "tooltip": "Send message to player"
    },
    {
        "type": "broadcast_message",
        "message0": "Broadcast Message %1",
        "args0": [{ "type": "input_value", "name": "TEXT", "check": "String" }],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#4ecdc4",
        "tooltip": "Send message to all players"
    },
    {
        "type": "apply_impulse",
        "message0": "Apply Impulse to %1 X %2 Y %3 Z %4",
        "args0": [
            { "type": "input_value", "name": "ENTITY_ID" },
            { "type": "input_value", "name": "X", "check": "Number" },
            { "type": "input_value", "name": "Y", "check": "Number" },
            { "type": "input_value", "name": "Z", "check": "Number" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#4ecdc4",
        "tooltip": "Apply impulse (velocity change) to entity"
    },

    // ============ WORLD & SOUND BLOCKS ============
    {
        "type": "get_block_at",
        "message0": "Get Block at X %1 Y %2 Z %3",
        "args0": [
            { "type": "input_value", "name": "X", "check": "Number" },
            { "type": "input_value", "name": "Y", "check": "Number" },
            { "type": "input_value", "name": "Z", "check": "Number" }
        ],
        "output": "String",
        "colour": "#74b9ff",
        "tooltip": "Get block type at position"
    },
    {
        "type": "set_block_at",
        "message0": "Set Block at X %1 Y %2 Z %3 to %4",
        "args0": [
            { "type": "input_value", "name": "X", "check": "Number" },
            { "type": "input_value", "name": "Y", "check": "Number" },
            { "type": "input_value", "name": "Z", "check": "Number" },
            { "type": "field_input", "name": "BLOCK", "text": "Dirt" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#74b9ff",
        "tooltip": "Set block at position"
    },
    {
        "type": "play_sound",
        "message0": "Play Sound %1 pitch %2 volume %3 to %4",
        "args0": [
            { "type": "field_input", "name": "SOUND", "text": "exp_collect" },
            { "type": "input_value", "name": "PITCH", "check": "Number" },
            { "type": "input_value", "name": "VOLUME", "check": "Number" },
            { "type": "input_value", "name": "ENTITY_ID" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#a29bfe",
        "tooltip": "Play sound at player location"
    },

    // ============ INVENTORY BLOCKS ============
    {
        "type": "give_item",
        "message0": "Give Item to %1 : %2 amount %3",
        "args0": [
            { "type": "input_value", "name": "ENTITY_ID" },
            { "type": "field_input", "name": "ITEM", "text": "Dirt" },
            { "type": "input_value", "name": "AMOUNT", "check": "Number" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#ffd700",
        "tooltip": "Give item to player"
    },
    {
        "type": "clear_inventory",
        "message0": "Clear Inventory of %1",
        "args0": [{ "type": "input_value", "name": "ENTITY_ID" }],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#ffd700",
        "tooltip": "Clear all items from player inventory"
    },

    // ============ LOGIC BLOCKS ============
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
        "tooltip": "Conditional block"
    },
    {
        "type": "if_else_condition",
        "message0": "if %1 then %2 else %3",
        "args0": [
            { "type": "input_value", "name": "CONDITION", "check": "Boolean" },
            { "type": "input_statement", "name": "DO" },
            { "type": "input_statement", "name": "ELSE" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#fdcb6e",
        "tooltip": "Conditional with else"
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
        "message0": "for i = %1 to %2 step %3 %4",
        "args0": [
            { "type": "input_value", "name": "START", "check": "Number" },
            { "type": "input_value", "name": "END", "check": "Number" },
            { "type": "input_value", "name": "STEP", "check": "Number" },
            { "type": "input_statement", "name": "DO" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#fdcb6e",
        "tooltip": "For loop"
    },

    // ============ OPERATOR BLOCKS ============
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
        "type": "compare_greater",
        "message0": "%1 > %2",
        "args0": [
            { "type": "input_value", "name": "A" },
            { "type": "input_value", "name": "B" }
        ],
        "output": "Boolean",
        "colour": "#fdcb6e",
        "tooltip": "Check if greater than"
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
        "type": "math_divide",
        "message0": "%1 / %2",
        "args0": [
            { "type": "input_value", "name": "A", "check": "Number" },
            { "type": "input_value", "name": "B", "check": "Number" }
        ],
        "output": "Number",
        "colour": "#95a5a6",
        "tooltip": "Division"
    },
    {
        "type": "random_number",
        "message0": "Random number from %1 to %2",
        "args0": [
            { "type": "input_value", "name": "MIN", "check": "Number" },
            { "type": "input_value", "name": "MAX", "check": "Number" }
        ],
        "output": "Number",
        "colour": "#95a5a6",
        "tooltip": "Generate random number"
    },

    // ============ VALUE BLOCKS ============
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
    },
    {
        "type": "text_array",
        "message0": "message array %1",
        "args0": [{ "type": "input_statement", "name": "ITEMS" }],
        "output": "Array",
        "colour": "#a29bfe",
        "tooltip": "Create a message array with str and icon elements"
    },
    {
        "type": "text_array_item",
        "message0": "item str %1 color %2 bold %3 size %4 bg %5",
        "args0": [
            { "type": "input_value", "name": "VALUE" },
            { "type": "field_dropdown", "name": "COLOR", "options": [["white", "white"], ["red", "red"], ["yellow", "yellow"], ["lime", "lime"], ["cyan", "cyan"], ["aqua", "aqua"], ["gold", "gold"], ["blue", "blue"], ["purple", "purple"], ["orange", "orange"], ["black", "black"]] },
            { "type": "field_dropdown", "name": "BOLD", "options": [["normal", "normal"], ["bold", "bold"]] },
            { "type": "field_dropdown", "name": "SIZE", "options": [["12px", "12px"], ["14px", "14px"], ["16px", "16px"], ["18px", "18px"], ["20px", "20px"], ["24px", "24px"]] },
            { "type": "field_dropdown", "name": "BG", "options": [["none", "none"], ["black", "black"], ["blue", "blue"], ["red", "red"], ["green", "green"]] }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#a29bfe",
        "tooltip": "Add a styled text element to the array"
    },
    {
        "type": "text_array_icon",
        "message0": "icon %1 color %2 size %3 bg %4",
        "args0": [
            { "type": "field_dropdown", "name": "ICON", "options": [["zap", "zap"], ["star", "star"], ["heart", "heart"], ["skull", "skull"], ["fire", "fire"], ["shield", "shield"], ["check", "check"], ["cross", "cross"], ["add_circle", "add_circle"], ["remove_circle", "remove_circle"], ["money", "money"]] },
            { "type": "field_dropdown", "name": "COLOR", "options": [["white", "white"], ["yellow", "yellow"], ["gold", "gold"], ["red", "red"], ["lime", "lime"], ["cyan", "cyan"], ["blue", "blue"], ["purple", "purple"], ["orange", "orange"], ["black", "black"]] },
            { "type": "field_dropdown", "name": "SIZE", "options": [["12px", "12px"], ["14px", "14px"], ["16px", "16px"], ["18px", "18px"], ["20px", "20px"], ["24px", "24px"]] },
            { "type": "field_dropdown", "name": "BG", "options": [["none", "none"], ["black", "black"], ["blue", "blue"], ["red", "red"], ["green", "green"]] }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#a29bfe",
        "tooltip": "Add a styled icon element to the array"
    },
    {
        "type": "get_my_id",
        "message0": "myId",
        "output": "String",
        "colour": "#a29bfe",
        "tooltip": "Get current player ID (Code Block only)"
    },
    {
        "type": "get_this_pos",
        "message0": "thisPos",
        "output": "Array",
        "colour": "#a29bfe",
        "tooltip": "Get current position (Code Block only)"
    },

    // ============ VARIABLE DECLARATION BLOCKS ============
    {
        "type": "declare_variable",
        "message0": "%1 %2 = %3",
        "args0": [
            { "type": "field_dropdown", "name": "VAR_TYPE", "options": [["const", "const"], ["let", "let"], ["var", "var"]] },
            { "type": "field_input", "name": "VAR_NAME", "text": "myVariable" },
            { "type": "input_value", "name": "VALUE" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#9b59b6",
        "tooltip": "Declare a variable with const, let, or var"
    },
    {
        "type": "assign_variable",
        "message0": "%1 = %2",
        "args0": [
            { "type": "field_input", "name": "VAR_NAME", "text": "myVariable" },
            { "type": "input_value", "name": "VALUE" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#9b59b6",
        "tooltip": "Assign a value to an existing variable"
    },
    {
        "type": "get_variable_value",
        "message0": "%1",
        "args0": [
            { "type": "field_input", "name": "VAR_NAME", "text": "myVariable" }
        ],
        "output": null,
        "colour": "#9b59b6",
        "tooltip": "Get the value of a variable"
    },

    // ============ CLIENT OPTIONS BLOCKS (玩家客戶端) ============
    {
        "type": "set_client_option",
        "message0": "Set Client Option %1 playerId %2 option %3 value %4",
        "args0": [
            { "type": "input_value", "name": "PLAYER_ID" },
            {
                "type": "field_dropdown", "name": "OPTION", "options": [
                    ["canChange", "canChange"],
                    ["canCraft", "canCraft"],
                    ["canPickUpItems", "canPickUpItems"],
                    ["canCustomiseChar", "canCustomiseChar"],
                    ["canUseZoomKey", "canUseZoomKey"],
                    ["canAltAction", "canAltAction"],
                    ["canSeeNametagsThroughWalls", "canSeeNametagsThroughWalls"],
                    ["canPickBlocks", "canPickBlocks"],
                    ["canClimbWalls", "canClimbWalls"],
                    ["music", "music"],
                    ["musicVolumeLevel", "musicVolumeLevel"],
                    ["maxHealth", "maxHealth"],
                    ["initialHealth", "initialHealth"],
                    ["invincible", "invincible"],
                    ["maxShield", "maxShield"],
                    ["initialShield", "initialShield"],
                    ["speedMultiplier", "speedMultiplier"],
                    ["crouchingSpeed", "crouchingSpeed"],
                    ["flySpeedMultiplier", "flySpeedMultiplier"],
                    ["jumpAmount", "jumpAmount"],
                    ["airJumpCount", "airJumpCount"],
                    ["bounciness", "bounciness"],
                    ["bunnyhopMaxMultiplier", "bunnyhopMaxMultiplier"],
                    ["cameraTint", "cameraTint"],
                    ["playerZoom", "playerZoom"],
                    ["zoomOutDistance", "zoomOutDistance"],
                    ["maxPlayerZoom", "maxPlayerZoom"],
                    ["fogChunkDistanceOverride", "fogChunkDistanceOverride"],
                    ["fogColourOverride", "fogColourOverride"],
                    ["showPlayersInUnloadedChunks", "showPlayersInUnloadedChunks"],
                    ["showKillfeed", "showKillfeed"],
                    ["showBasicMovementControls", "showBasicMovementControls"],
                    ["showProgressBar", "showProgressBar"],
                    ["useInventory", "useInventory"],
                    ["useFullInventory", "useFullInventory"],
                    ["inventoryItemsMoveable", "inventoryItemsMoveable"],
                    ["creative", "creative"],
                    ["fallDamage", "fallDamage"],
                    ["dealingDamageMultiplier", "dealingDamageMultiplier"],
                    ["receivingDamageMultiplier", "receivingDamageMultiplier"],
                    ["horizontalKnockbackMultiplier", "horizontalKnockbackMultiplier"],
                    ["verticalKnockbackMultiplier", "verticalKnockbackMultiplier"],
                    ["ttbMultiplier", "ttbMultiplier"],
                    ["canEditCode", "canEditCode"]
                ]
            },
            { "type": "input_value", "name": "VALUE" }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#e67e22",
        "tooltip": "Set a client option for a player"
    },
    {
        "type": "get_client_option",
        "message0": "Get Client Option %1 playerId %2 option %3",
        "args0": [
            { "type": "input_value", "name": "PLAYER_ID" },
            {
                "type": "field_dropdown", "name": "OPTION", "options": [
                    ["canChange", "canChange"],
                    ["canCraft", "canCraft"],
                    ["canPickUpItems", "canPickUpItems"],
                    ["canCustomiseChar", "canCustomiseChar"],
                    ["canUseZoomKey", "canUseZoomKey"],
                    ["canAltAction", "canAltAction"],
                    ["canSeeNametagsThroughWalls", "canSeeNametagsThroughWalls"],
                    ["canPickBlocks", "canPickBlocks"],
                    ["canClimbWalls", "canClimbWalls"],
                    ["music", "music"],
                    ["musicVolumeLevel", "musicVolumeLevel"],
                    ["maxHealth", "maxHealth"],
                    ["initialHealth", "initialHealth"],
                    ["invincible", "invincible"],
                    ["maxShield", "maxShield"],
                    ["initialShield", "initialShield"],
                    ["speedMultiplier", "speedMultiplier"],
                    ["creative", "creative"]
                ]
            }
        ],
        "output": null,
        "colour": "#e67e22",
        "tooltip": "Get the current value of a client option"
    },
    {
        "type": "music_selector",
        "message0": "Music %1",
        "args0": [
            {
                "type": "field_dropdown", "name": "MUSIC", "options": [
                    ["Awkward Comedy Quirky", "Awkward Comedy Quirky"],
                    ["battle-ship-111902", "battle-ship-111902"],
                    ["cdk-Silence-Await", "cdk-Silence-Await"],
                    ["corsairs-studiokolomna-main-version-23542-02-33", "corsairs-studiokolomna-main-version-23542-02-33"],
                    ["ghost-Reverie-small-theme", "ghost-Reverie-small-theme"],
                    ["happy", "happy"],
                    ["Heroic-Demise-New", "Heroic-Demise-New"],
                    ["I-am-the-Sea-The-Room-4", "I-am-the-Sea-The-Room-4"],
                    ["progress", "progress"],
                    ["raise-the-sails-152124", "raise-the-sails-152124"],
                    ["ramblinglibrarian-I-Have-Often-T", "ramblinglibrarian-I-Have-Often-T"],
                    ["Slow-Motion-Bensound", "Slow-Motion-Bensound"],
                    ["snowflake-Ethereal-Space", "snowflake-Ethereal-Space"],
                    ["the-epic-adventure-131399", "the-epic-adventure-131399"],
                    ["The Suspense Ambient", "The Suspense Ambient"],
                    ["TownTheme", "TownTheme"],
                    ["LonePeakMusic-Highway-1", "LonePeakMusic-Highway-1"],
                    ["Adigold - A Place To Be Free", "Adigold - A Place To Be Free"],
                    ["Adigold - Butterfly Effect", "Adigold - Butterfly Effect"],
                    ["Adigold - Dreamless Sleep", "Adigold - Dreamless Sleep"],
                    ["Adigold - Frozen Pulse", "Adigold - Frozen Pulse"],
                    ["Adigold - Frozen Skies", "Adigold - Frozen Skies"],
                    ["Adigold - Healing Thoughts", "Adigold - Healing Thoughts"],
                    ["Adigold - Here Forever", "Adigold - Here Forever"],
                    ["Adigold - Just a Little Hope", "Adigold - Just a Little Hope"],
                    ["Adigold - Just Like Heaven", "Adigold - Just Like Heaven"],
                    ["Adigold - Memories Remain", "Adigold - Memories Remain"],
                    ["Adigold - Place To Be", "Adigold - Place To Be"],
                    ["Adigold - The Riverside", "Adigold - The Riverside"],
                    ["Adigold - The Wonder", "Adigold - The Wonder"],
                    ["Adigold - Vetrar (Cut B)", "Adigold - Vetrar (Cut B)"],
                    ["Juhani Junkala [Retro Game Music Pack] Ending", "Juhani Junkala [Retro Game Music Pack] Ending"],
                    ["Juhani Junkala [Retro Game Music Pack] Level 1", "Juhani Junkala [Retro Game Music Pack] Level 1"],
                    ["Juhani Junkala [Retro Game Music Pack] Level 2", "Juhani Junkala [Retro Game Music Pack] Level 2"],
                    ["Juhani Junkala [Retro Game Music Pack] Level 3", "Juhani Junkala [Retro Game Music Pack] Level 3"],
                    ["Juhani Junkala [Retro Game Music Pack] Title Screen", "Juhani Junkala [Retro Game Music Pack] Title Screen"],
                    ["Mojo Productions - Pirates", "Mojo Productions - Pirates"],
                    ["Mojo Productions - Sneaky Jazz", "Mojo Productions - Sneaky Jazz"],
                    ["Mojo Productions - The Sneaky", "Mojo Productions - The Sneaky"],
                    ["Mojo Productions - The Sneaky Jazz", "Mojo Productions - The Sneaky Jazz"]
                ]
            }
        ],
        "output": "String",
        "colour": "#e67e22",
        "tooltip": "Select a music track"
    }
]);

// ============ CODE GENERATORS ============

// Support both old and new Blockly API
const registerGenerator = (blockType, generatorFn) => {
    // Try registering with the new Blockly API (v10+)
    if (typeof Blockly !== 'undefined' && Blockly.JavaScript) {
        // Register in forBlock object (new API)
        if (!Blockly.JavaScript.forBlock) {
            Blockly.JavaScript.forBlock = {};
        }
        Blockly.JavaScript.forBlock[blockType] = generatorFn;

        // Also register in the old location for compatibility (old API)
        Blockly.JavaScript[blockType] = generatorFn;
    }
};

// Callbacks/Events - Use arrow function format as per Bloxd.io API
registerGenerator('tick', function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `tick = (ms) => {\n${statements}};\n`;
});

registerGenerator('on_player_join', function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `onPlayerJoin = (playerId, fromGameReset) => {\n${statements}};\n`;
});

registerGenerator('on_player_leave', function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `onPlayerLeave = (playerId, serverIsShuttingDown) => {\n${statements}};\n`;
});

registerGenerator('on_player_chat', function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `onPlayerChat = (playerId, message) => {\n${statements}return false;\n};\n`;
});

registerGenerator('on_player_jump', function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `onPlayerJump = (playerId) => {\n${statements}};\n`;
});

registerGenerator('on_respawn_request', function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `onRespawnRequest = (playerId) => {\n${statements}return [0, 0, 0];\n};\n`;
});

registerGenerator('player_command', function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `playerCommand = (playerId, command) => {\n${statements}};\n`;
});

// Entity functions using api.* namespace
registerGenerator('get_position', function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ENTITY_ID', Blockly.JavaScript.ORDER_ATOMIC) || 'myId';
    return [`api.getPosition(${id})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
});

registerGenerator('set_position', function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ENTITY_ID', Blockly.JavaScript.ORDER_ATOMIC) || 'myId';
    const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const z = Blockly.JavaScript.valueToCode(block, 'Z', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return `api.setPosition(${id}, ${x}, ${y}, ${z});\n`;
});

registerGenerator('get_velocity', function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ENTITY_ID', Blockly.JavaScript.ORDER_ATOMIC) || 'myId';
    return [`api.getVelocity(${id})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
});

registerGenerator('get_health', function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ENTITY_ID', Blockly.JavaScript.ORDER_ATOMIC) || 'myId';
    return [`api.getHealth(${id})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
});

registerGenerator('set_health', function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ENTITY_ID', Blockly.JavaScript.ORDER_ATOMIC) || 'myId';
    const health = Blockly.JavaScript.valueToCode(block, 'HEALTH', Blockly.JavaScript.ORDER_ATOMIC) || '20';
    return `api.setHealth(${id}, ${health});\n`;
});

registerGenerator('apply_health_change', function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ENTITY_ID', Blockly.JavaScript.ORDER_ATOMIC) || 'myId';
    const amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return `api.applyHealthChange(${id}, ${amount});\n`;
});

registerGenerator('get_shield_amount', function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ENTITY_ID', Blockly.JavaScript.ORDER_ATOMIC) || 'myId';
    return [`api.getShieldAmount(${id})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
});

registerGenerator('set_shield_amount', function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ENTITY_ID', Blockly.JavaScript.ORDER_ATOMIC) || 'myId';
    const shield = Blockly.JavaScript.valueToCode(block, 'SHIELD', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return `api.setShieldAmount(${id}, ${shield});\n`;
});

registerGenerator('get_entity_name', function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ENTITY_ID', Blockly.JavaScript.ORDER_ATOMIC) || 'myId';
    return [`api.getEntityName(${id})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
});

registerGenerator('send_message', function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ENTITY_ID', Blockly.JavaScript.ORDER_ATOMIC) || 'myId';
    const text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    return `api.sendMessage(${id}, ${text});\n`;
});

registerGenerator('broadcast_message', function (block) {
    const text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    return `api.broadcastMessage(${text});\n`;
});

registerGenerator('apply_impulse', function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ENTITY_ID', Blockly.JavaScript.ORDER_ATOMIC) || 'myId';
    const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const z = Blockly.JavaScript.valueToCode(block, 'Z', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return `api.applyImpulse(${id}, ${x}, ${y}, ${z});\n`;
});

// World blocks
registerGenerator('get_block_at', function (block) {
    const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const z = Blockly.JavaScript.valueToCode(block, 'Z', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return [`api.getBlockData(${x}, ${y}, ${z})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
});

registerGenerator('set_block_at', function (block) {
    const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const z = Blockly.JavaScript.valueToCode(block, 'Z', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const block_type = block.getFieldValue('BLOCK') || 'Dirt';
    return `api.setBlockFromString(${x}, ${y}, ${z}, "${block_type}");\n`;
});

registerGenerator('play_sound', function (block) {
    const sound = block.getFieldValue('SOUND') || 'exp_collect';
    const pitch = Blockly.JavaScript.valueToCode(block, 'PITCH', Blockly.JavaScript.ORDER_ATOMIC) || '1';
    const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC) || '1';
    const id = Blockly.JavaScript.valueToCode(block, 'ENTITY_ID', Blockly.JavaScript.ORDER_ATOMIC) || 'myId';
    return `api.playSound(${id}, "${sound}", ${pitch}, ${volume});\n`;
});

// Inventory blocks
registerGenerator('give_item', function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ENTITY_ID', Blockly.JavaScript.ORDER_ATOMIC) || 'myId';
    const item = block.getFieldValue('ITEM') || 'Dirt';
    const amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_ATOMIC) || '1';
    return `api.giveItem(${id}, "${item}", ${amount});\n`;
});

registerGenerator('clear_inventory', function (block) {
    const id = Blockly.JavaScript.valueToCode(block, 'ENTITY_ID', Blockly.JavaScript.ORDER_ATOMIC) || 'myId';
    return `api.clearInventory(${id});\n`;
});

// Logic blocks
registerGenerator('if_condition', function (block) {
    const condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `if (${condition}) {\n${statements}}\n`;
});

registerGenerator('if_else_condition', function (block) {
    const condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    const do_statements = Blockly.JavaScript.statementToCode(block, 'DO');
    const else_statements = Blockly.JavaScript.statementToCode(block, 'ELSE');
    return `if (${condition}) {\n${do_statements}} else {\n${else_statements}}\n`;
});

registerGenerator('while_loop', function (block) {
    const condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `while (${condition}) {\n${statements}}\n`;
});

registerGenerator('for_loop', function (block) {
    const start = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const end = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC) || '10';
    const step = Blockly.JavaScript.valueToCode(block, 'STEP', Blockly.JavaScript.ORDER_ATOMIC) || '1';
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return `for (let i = ${start}; i <= ${end}; i += ${step}) {\n${statements}}\n`;
});

// Operators
registerGenerator('compare_equal', function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_RELATIONAL) || '0';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_RELATIONAL) || '0';
    return [`${a} === ${b}`, Blockly.JavaScript.ORDER_RELATIONAL];
});

registerGenerator('compare_less', function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_RELATIONAL) || '0';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_RELATIONAL) || '0';
    return [`${a} < ${b}`, Blockly.JavaScript.ORDER_RELATIONAL];
});

registerGenerator('compare_greater', function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_RELATIONAL) || '0';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_RELATIONAL) || '0';
    return [`${a} > ${b}`, Blockly.JavaScript.ORDER_RELATIONAL];
});

registerGenerator('logic_and', function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_LOGICAL_AND) || 'false';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_LOGICAL_AND) || 'false';
    return [`${a} && ${b}`, Blockly.JavaScript.ORDER_LOGICAL_AND];
});

registerGenerator('logic_or', function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_LOGICAL_OR) || 'false';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_LOGICAL_OR) || 'false';
    return [`${a} || ${b}`, Blockly.JavaScript.ORDER_LOGICAL_OR];
});

registerGenerator('logic_not', function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_LOGICAL_NOT) || 'false';
    return [`!${a}`, Blockly.JavaScript.ORDER_LOGICAL_NOT];
});

registerGenerator('math_add', function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ADDITION) || '0';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ADDITION) || '0';
    return [`${a} + ${b}`, Blockly.JavaScript.ORDER_ADDITION];
});

registerGenerator('math_subtract', function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ADDITION) || '0';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ADDITION) || '0';
    return [`${a} - ${b}`, Blockly.JavaScript.ORDER_ADDITION];
});

registerGenerator('math_multiply', function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_MULTIPLICATION) || '0';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_MULTIPLICATION) || '0';
    return [`${a} * ${b}`, Blockly.JavaScript.ORDER_MULTIPLICATION];
});

registerGenerator('math_divide', function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_DIVISION) || '0';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_DIVISION) || '1';
    return [`${a} / ${b}`, Blockly.JavaScript.ORDER_DIVISION];
});

registerGenerator('random_number', function (block) {
    const min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC) || '10';
    return [`Math.floor(Math.random() * (${max} - ${min} + 1)) + ${min}`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
});

// Values
registerGenerator('number_value', function (block) {
    const num = block.getFieldValue('NUM');
    return [num, Blockly.JavaScript.ORDER_ATOMIC];
});

registerGenerator('text_value', function (block) {
    const text = block.getFieldValue('TEXT');
    return [`"${text}"`, Blockly.JavaScript.ORDER_ATOMIC];
});

registerGenerator('text_join', function (block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    return [`(${a} + ${b})`, Blockly.JavaScript.ORDER_ADDITIVE];
});

registerGenerator('text_array', function (block) {
    const itemsArray = [];
    let currentBlock = block.getInputTargetBlock('ITEMS');

    while (currentBlock) {
        if (currentBlock.type === 'text_array_item') {
            const value = Blockly.JavaScript.valueToCode(currentBlock, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '""';
            const color = currentBlock.getFieldValue('COLOR');
            const bold = currentBlock.getFieldValue('BOLD');
            const size = currentBlock.getFieldValue('SIZE');
            const bg = currentBlock.getFieldValue('BG');

            let styleObj = `{ color: "${color}"`;
            if (bold === 'bold') styleObj += `, fontWeight: "bold"`;
            if (size !== '16px') styleObj += `, fontSize: "${size}"`;
            if (bg !== 'none') styleObj += `, backgroundColor: "${bg}"`;
            styleObj += ` }`;

            itemsArray.push(`{ str: ${value}, style: ${styleObj} }`);
        } else if (currentBlock.type === 'text_array_icon') {
            const icon = currentBlock.getFieldValue('ICON');
            const color = currentBlock.getFieldValue('COLOR');
            const size = currentBlock.getFieldValue('SIZE');
            const bg = currentBlock.getFieldValue('BG');

            let styleObj = `{ color: "${color}"`;
            if (size !== '16px') styleObj += `, fontSize: "${size}"`;
            if (bg !== 'none') styleObj += `, backgroundColor: "${bg}"`;
            styleObj += ` }`;

            itemsArray.push(`{ icon: "${icon}", style: ${styleObj} }`);
        }
        currentBlock = currentBlock.getNextBlock();
    }

    const arrayCode = `[\n        ${itemsArray.join(',\n        ')}\n    ]`;
    return [arrayCode, Blockly.JavaScript.ORDER_ATOMIC];
});

registerGenerator('text_array_item', function (block) {
    return '';
});

registerGenerator('text_array_icon', function (block) {
    return '';
});

registerGenerator('get_my_id', function (block) {
    return [`myId`, Blockly.JavaScript.ORDER_ATOMIC];
});

registerGenerator('get_this_pos', function (block) {
    return [`thisPos`, Blockly.JavaScript.ORDER_ATOMIC];
});

// ============ VARIABLE GENERATORS ============

registerGenerator('declare_variable', function (block) {
    const varType = block.getFieldValue('VAR_TYPE');  // const, let, or var
    const varName = block.getFieldValue('VAR_NAME');
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '""';
    return `${varType} ${varName} = ${value};\n`;
});

registerGenerator('assign_variable', function (block) {
    const varName = block.getFieldValue('VAR_NAME');
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '""';
    return `${varName} = ${value};\n`;
});

registerGenerator('get_variable_value', function (block) {
    const varName = block.getFieldValue('VAR_NAME');
    return [varName, Blockly.JavaScript.ORDER_ATOMIC];
});

// ============ CLIENT OPTIONS GENERATORS ============

registerGenerator('set_client_option', function (block) {
    const playerId = Blockly.JavaScript.valueToCode(block, 'PLAYER_ID', Blockly.JavaScript.ORDER_ATOMIC) || 'playerId';
    const option = block.getFieldValue('OPTION');
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    return `api.setClientOption(${playerId}, "${option}", ${value});\n`;
});

registerGenerator('get_client_option', function (block) {
    const playerId = Blockly.JavaScript.valueToCode(block, 'PLAYER_ID', Blockly.JavaScript.ORDER_ATOMIC) || 'playerId';
    const option = block.getFieldValue('OPTION');
    return [`api.getClientOption(${playerId}, "${option}")`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
});

registerGenerator('music_selector', function (block) {
    const music = block.getFieldValue('MUSIC');
    return [`"${music}"`, Blockly.JavaScript.ORDER_ATOMIC];
});

// Verification after all generators are defined
// ✅ All generators registered successfully
console.log('✅ Bloxd.io API blocks and generators loaded successfully');

// Debug: Verify on_player_join generator is registered
if (Blockly.JavaScript && Blockly.JavaScript['on_player_join']) {
    console.log('✅ on_player_join generator found in Blockly.JavaScript');
} else {
    console.error('❌ on_player_join generator NOT found in Blockly.JavaScript');
}

if (Blockly.JavaScript && Blockly.JavaScript.forBlock && Blockly.JavaScript.forBlock['on_player_join']) {
    console.log('✅ on_player_join generator found in Blockly.JavaScript.forBlock');
} else if (Blockly.JavaScript && Blockly.JavaScript.forBlock) {
    console.warn('⚠️ Blockly.JavaScript.forBlock exists but on_player_join not found');
}
