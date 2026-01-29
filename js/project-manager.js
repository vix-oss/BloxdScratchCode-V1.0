/**
 * Bloxd.io 積木代碼編輯器 - 專案管理系統
 */

class ProjectManager {
    constructor() {
        this.projects = this.loadProjects();
        this.currentProject = null;
    }

    loadProjects() {
        const saved = localStorage.getItem('bloxd_projects');
        return saved ? JSON.parse(saved) : [];
    }

    saveProjects() {
        localStorage.setItem('bloxd_projects', JSON.stringify(this.projects));
    }

    createProject(name, type, description) {
        const project = {
            id: Date.now().toString(),
            name,
            type, // 'world' 或 'block'
            description,
            code: '',
            workspace: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        this.projects.push(project);
        this.saveProjects();
        this.currentProject = project;
        return project;
    }

    getProject(id) {
        return this.projects.find(p => p.id === id);
    }

    updateProject(id, updates) {
        const project = this.getProject(id);
        if (project) {
            Object.assign(project, updates, { updatedAt: new Date().toISOString() });
            this.saveProjects();
            return project;
        }
        return null;
    }

    deleteProject(id) {
        this.projects = this.projects.filter(p => p.id !== id);
        this.saveProjects();
        if (this.currentProject?.id === id) {
            this.currentProject = null;
        }
    }

    getAllProjects() {
        return this.projects;
    }
}

// 全域實例
let projectManager = new ProjectManager();

// UI 函數
function showProjectModal() {
    document.getElementById('projectModal').classList.add('show');
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.remove('show');
    document.getElementById('projectName').value = '';
    document.getElementById('projectType').value = 'world';
    document.getElementById('projectDesc').value = '';
}

function createProject() {
    const name = document.getElementById('projectName').value.trim();
    const type = document.getElementById('projectType').value;
    const description = document.getElementById('projectDesc').value.trim();

    if (!name) {
        alert('❌ 請輸入專案名稱');
        return;
    }

    projectManager.createProject(name, type, description);
    closeProjectModal();
    updateProjectList();
    selectProject(projectManager.currentProject.id);

    // 重置工作區並設置適當的模式
    workspace.clear();
    document.getElementById('mode').value = type;

    // 只有世界代碼才能訪問事件
    updateToolbox(type);

    alert(`✅ 專案 "${name}" 已建立！`);
}

function updateProjectList() {
    const select = document.getElementById('projectSelect');
    select.innerHTML = '<option value="">-- 選擇專案 --</option>';

    projectManager.getAllProjects().forEach(project => {
        const option = document.createElement('option');
        option.value = project.id;
        option.textContent = `${project.name} (${project.type === 'world' ? '世界代碼' : '代碼塊'})`;
        select.appendChild(option);
    });
}

function selectProject(projectId) {
    const select = document.getElementById('projectSelect');
    select.value = projectId;
    loadProject();
}

function loadProject() {
    const projectId = document.getElementById('projectSelect').value;
    if (!projectId) {
        workspace.clear();
        projectManager.currentProject = null;
        return;
    }

    const project = projectManager.getProject(projectId);
    if (project) {
        projectManager.currentProject = project;
        document.getElementById('mode').value = project.type;

        // 只有世界代碼才能訪問事件
        updateToolbox(project.type);

        // 恢復工作區
        if (project.workspace) {
            workspace.clear();
            try {
                Blockly.serialization.workspaces.load(project.workspace, workspace);
            } catch (e) {
                console.error('Error loading workspace:', e);
            }
        }

        generateCode();
    }
}

function updateToolbox(type) {
    // 根據類型更新工具箱
    const toolboxXml = type === 'world' ? getWorldCodeToolbox() : getCodeBlockToolbox();
    const toolboxElement = Blockly.parseToolboxTree(toolboxXml);
    workspace.updateToolbox(toolboxElement);
}

function saveCurrentProject() {
    if (!projectManager.currentProject) return;

    const code = document.getElementById('output').textContent;
    const workspace_data = Blockly.serialization.workspaces.save(workspace);

    projectManager.updateProject(projectManager.currentProject.id, {
        code,
        workspace: workspace_data
    });
}

function exportProject() {
    if (!projectManager.currentProject) {
        alert('❌ 請先選擇或建立一個專案');
        return;
    }

    saveCurrentProject();
    const project = projectManager.currentProject;

    if (project.type === 'world') {
        exportWorldCodeTemplate();
    } else {
        exportCodeBlock();
    }
}

function exportWorldCodeTemplate() {
    const template = `try { db } catch { db = {} }
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
        { str: "歡迎來到伺服器", style: { color: "aqua", fontWeight: "bold" } },
        { icon: "zap", style: { color: "gold" } },
        { str: "\\n目前人數：", style: { color: "white" } },
        { str: count + " 人", style: { color: "aqua" } },
    ];

    for (const id of api.getPlayerIds()) {
        api.setClientOption(id, "RightInfoText", text);
    }
}

/* =====================================================
   事件處理
===================================================== */

function onPlayerChat(playerId, msg) {
    // 玩家聊天事件
    return true;
}

function onPlayerJoin(playerId) {
    // 玩家加入事件
}

function onPlayerKilledOtherPlayer(killerId, victimId) {
    // 玩家擊殺事件
    return false;
}

function onPlayerLeave(playerId) {
    // 玩家離開事件
}

tick = (dt) => {
    // tick 事件 - 定期執行
};
`;

    const code = document.getElementById('output').textContent;
    const fullCode = template + '\n\n// ===== 您的自定義代碼 =====\n' + code;

    downloadToFile(fullCode, 'world-code-template.js');
}

function exportCodeBlock() {
    const code = document.getElementById('output').textContent;

    const template = `/**
 * 代碼塊模板
 */

// 在這裡編寫您的代碼塊邏輯
${code}
`;

    downloadToFile(template, 'code-block.js');
}

function downloadToFile(content, filename) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    alert(`✅ 文件已下載: ${filename}`);
}

// 關閉模態框的通用方法
window.addEventListener('click', (event) => {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
});

// 初始化專案列表
window.addEventListener('load', () => {
    updateProjectList();
});
