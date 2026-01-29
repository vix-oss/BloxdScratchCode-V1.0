/**
 * Bloxd.io 積木代碼編輯器 - 工具箱配置
 * 定義積木類別和結構
 */

// 世界代碼工具箱
function getWorldCodeToolbox() {
    return `
    <xml id="toolbox">
        <category name="全部積木" colour="#777777">
            <block type="on_player_join"></block>
            <block type="on_player_leave"></block>
            <block type="on_player_chat"></block>
            <block type="on_player_killed"></block>
            <block type="on_tick"></block>

            <block type="broadcast_message"></block>
            <block type="set_health"></block>
            <block type="get_health"></block>
            <block type="apply_damage"></block>
            <block type="send_message"></block>

            <block type="db_set"></block>
            <block type="db_get"></block>
            <block type="db_delete"></block>

            <block type="if_condition"></block>
            <block type="while_loop"></block>
            <block type="for_loop"></block>
            <block type="compare_equal"></block>
            <block type="compare_greater"></block>
            <block type="compare_less"></block>
            <block type="logic_and"></block>
            <block type="logic_or"></block>
            <block type="logic_not"></block>

            <block type="get_block_at"></block>
            <block type="set_block_at"></block>
            <block type="set_block_rect"></block>

            <block type="number_value"></block>
            <block type="math_add"></block>
            <block type="random_number"></block>

            <block type="declare_variable"></block>
            <block type="assign_variable"></block>
            <block type="get_variable_value"></block>

            <block type="apply_impulse"></block>
            <block type="set_position"></block>
            <block type="get_position"></block>
            <block type="wait_seconds"></block>
            <block type="kill_entity"></block>

            <block type="get_shield"></block>
            <block type="set_shield"></block>

            <block type="text_value"></block>
            <block type="text_join"></block>
            <block type="text_array"></block>
            <block type="text_array_item"></block>
            <block type="get_my_id"></block>
            <block type="get_this_pos"></block>
        </category>
        <category name="事件" colour="#ff6b6b">
            <block type="on_player_join"></block>
            <block type="on_player_leave"></block>
            <block type="on_player_chat"></block>
            <block type="on_player_killed"></block>
            <block type="on_tick"></block>
        </category>

        <category name="玩家動作" colour="#4ecdc4">
            <block type="broadcast_message"></block>
            <block type="set_health"></block>
            <block type="get_health"></block>
            <block type="apply_damage"></block>
            <block type="send_message"></block>
        </category>

        <category name="資料庫" colour="#a29bfe">
            <block type="db_set"></block>
            <block type="db_get"></block>
            <block type="db_delete"></block>
        </category>

        <category name="邏輯" colour="#fdcb6e">
            <block type="if_condition"></block>
            <block type="while_loop"></block>
            <block type="for_loop"></block>
            <block type="compare_equal"></block>
            <block type="compare_greater"></block>
            <block type="compare_less"></block>
            <block type="logic_and"></block>
            <block type="logic_or"></block>
            <block type="logic_not"></block>
        </category>

        <category name="方塊" colour="#74b9ff">
            <block type="get_block_at"></block>
            <block type="set_block_at"></block>
            <block type="set_block_rect"></block>
        </category>

        <category name="數學" colour="#95a5a6">
            <block type="number_value"></block>
            <block type="math_add"></block>
            <block type="random_number"></block>
        </category>

        <category name="變數" colour="#9b59b6">
            <block type="declare_variable">
                <field name="VAR_TYPE">const</field>
                <field name="VAR_NAME">myVar</field>
            </block>
            <block type="assign_variable">
                <field name="VAR_NAME">myVar</field>
            </block>
            <block type="get_variable_value">
                <field name="VAR_NAME">myVar</field>
            </block>
        </category>

        <category name="玩家客戶端" colour="#e67e22">
            <block type="set_client_option"></block>
            <block type="get_client_option"></block>
            <block type="music_selector"></block>
        </category>

        <category name="函數" colour="#e74c3c" custom="PROCEDURE"></category>
    </xml>`;
}

// 代碼塊工具箱（不包含事件，使用 myId 和 thisPos）
function getCodeBlockToolbox() {
    return `
    <xml id="toolbox">
        <category name="全部積木" colour="#777777">
            <block type="apply_impulse"></block>
            <block type="set_position"></block>
            <block type="get_position"></block>
            <block type="broadcast_message"></block>
            <block type="wait_seconds"></block>

            <block type="get_health"></block>
            <block type="set_health"></block>
            <block type="apply_damage"></block>
            <block type="kill_entity"></block>

            <block type="get_shield"></block>
            <block type="set_shield"></block>

            <block type="if_condition"></block>
            <block type="while_loop"></block>
            <block type="for_loop"></block>
            <block type="compare_equal"></block>
            <block type="compare_greater"></block>
            <block type="compare_less"></block>
            <block type="logic_and"></block>
            <block type="logic_or"></block>
            <block type="logic_not"></block>

            <block type="get_block_at"></block>
            <block type="set_block_at"></block>

            <block type="number_value"></block>
            <block type="math_add"></block>
            <block type="random_number"></block>

            <block type="text_value"></block>
            <block type="text_join"></block>
            <block type="text_array"></block>
            <block type="text_array_item"></block>
            <block type="get_my_id"></block>
            <block type="get_this_pos"></block>

            <block type="declare_variable"></block>
            <block type="assign_variable"></block>
            <block type="get_variable_value"></block>
        </category>
        <category name="動作" colour="#4ecdc4">
            <block type="apply_impulse"></block>
            <block type="set_position"></block>
            <block type="get_position"></block>
            <block type="broadcast_message"></block>
            <block type="wait_seconds"></block>
        </category>

        <category name="生命值" colour="#ff6348">
            <block type="get_health"></block>
            <block type="set_health"></block>
            <block type="apply_damage"></block>
            <block type="kill_entity"></block>
        </category>

        <category name="盾牌" colour="#6c5ce7">
            <block type="get_shield"></block>
            <block type="set_shield"></block>
        </category>

        <category name="邏輯" colour="#fdcb6e">
            <block type="if_condition"></block>
            <block type="while_loop"></block>
            <block type="for_loop"></block>
            <block type="compare_equal"></block>
            <block type="compare_greater"></block>
            <block type="compare_less"></block>
            <block type="logic_and"></block>
            <block type="logic_or"></block>
            <block type="logic_not"></block>
        </category>

        <category name="方塊" colour="#74b9ff">
            <block type="get_block_at"></block>
            <block type="set_block_at"></block>
        </category>

        <category name="數學" colour="#95a5a6">
            <block type="number_value"></block>
            <block type="math_add"></block>
            <block type="random_number"></block>
        </category>

        <category name="文字" colour="#a29bfe">
            <block type="text_value"></block>
            <block type="text_join"></block>
            <block type="text_array">
                <statement name="ITEMS">
                    <block type="text_array_item">
                        <field name="COLOR">yellow</field>
                        <field name="BOLD">bold</field>
                        <field name="SIZE">16px</field>
                        <field name="BG">none</field>
                        <value name="VALUE">
                            <block type="text_value">
                                <field name="TEXT">START: </field>
                            </block>
                        </value>
                        <next>
                            <block type="text_array_item">
                                <field name="COLOR">lime</field>
                                <field name="BOLD">bold</field>
                                <field name="SIZE">16px</field>
                                <field name="BG">none</field>
                                <value name="VALUE">
                                    <block type="text_value">
                                        <field name="TEXT">Player 1</field>
                                    </block>
                                </value>
                                <next>
                                    <block type="text_array_item">
                                        <field name="COLOR">aqua</field>
                                        <field name="BOLD">bold</field>
                                        <field name="SIZE">16px</field>
                                        <field name="BG">none</field>
                                        <value name="VALUE">
                                            <block type="text_value">
                                                <field name="TEXT"> VS </field>
                                            </block>
                                        </value>
                                        <next>
                                            <block type="text_array_item">
                                                <field name="COLOR">red</field>
                                                <field name="BOLD">bold</field>
                                                <field name="SIZE">16px</field>
                                                <field name="BG">none</field>
                                                <value name="VALUE">
                                                    <block type="text_value">
                                                        <field name="TEXT">Player 2</field>
                                                    </block>
                                                </value>
                                            </block>
                                        </next>
                                    </block>
                                </next>
                            </block>
                        </next>
                    </block>
                </statement>
            </block>
            <block type="get_my_id"></block>
            <block type="get_this_pos"></block>
        </category>

        <category name="變數" colour="#9b59b6">
            <block type="declare_variable">
                <field name="VAR_TYPE">const</field>
                <field name="VAR_NAME">myVar</field>
            </block>
            <block type="assign_variable">
                <field name="VAR_NAME">myVar</field>
            </block>
            <block type="get_variable_value">
                <field name="VAR_NAME">myVar</field>
            </block>
        </category>

        <category name="玩家客戶端" colour="#e67e22">
            <block type="set_client_option"></block>
            <block type="get_client_option"></block>
            <block type="music_selector"></block>
        </category>
    </xml>`;
}

// 更新工具箱
function updateToolbox(mode) {
    if (!workspace) return;

    const toolbox = mode === 'world' ? getWorldCodeToolbox() : getCodeBlockToolbox();
    const toolboxElement = Blockly.parseToolboxTree(toolbox);
    workspace.updateToolbox(toolboxElement);
}
