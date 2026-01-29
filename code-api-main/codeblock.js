api.playSound(myId, "exp_collect", 1, 1)

function getNameWithDevice(id) {
    let device = api.isMobile(id) ? " [Mobile]" : " [PC]"
    return api.getEntityName(id) + device
}

const arenaSpawns = [
    { A: [-3.53, -751, 419], B: [-3.53, -751, 401] },
    { A: [-3.50, -751, 474], B: [-3.41, -751, 456.45] },
    { A: [39, -751, 474], B: [39, -751, 456.45] },
]


function playerInArena(index) {
    const arena = arenaSpawns[index]
    if (!arena) return true
    const buffer = 3
    const min = [
        Math.min(arena.A[0], arena.B[0]) - buffer,
        Math.min(arena.A[1], arena.B[1]) - buffer,
        Math.min(arena.A[2], arena.B[2]) - buffer
    ]
    const max = [
        Math.max(arena.A[0], arena.B[0]) + buffer,
        Math.max(arena.A[1], arena.B[1]) + buffer,
        Math.max(arena.A[2], arena.B[2]) + buffer
    ]
    const entities = api.getEntitiesInRect(min, max)
    return entities.some(id => api.getEntityType(id) === "Player")
}

if (typeof waitingPlayer === "undefined") waitingPlayer = null

if (waitingPlayer && waitingPlayer !== myId) {
    const playerA = waitingPlayer
    const playerB = myId
    waitingPlayer = null

    let arenaIndex = 0
    while (playerInArena(arenaIndex)) arenaIndex++
    const arena = arenaSpawns[arenaIndex]

    if (!arena) {
        api.sendMessage(playerA, "Don't have other arena", { color: "red" })
        api.sendMessage(playerB, "Don't have other arena", { color: "red" })
        throw new Error("Don't have other arena")
    }

    api.clearInventory(playerA)
    api.clearInventory(playerB)
    api.applyEffect(playerA, "Frozen", 3000, {})
    api.applyEffect(playerB, "Frozen", 3000, {})
    api.setHealth(playerA, 100)
    api.setHealth(playerB, 100)
    api.setVelocity(playerA, 0, 0, 0)
    api.setVelocity(playerB, 0, 0, 0)
    api.setCameraDirection(playerA, [0, 0, -1])
    api.setCameraDirection(playerB, [0, 0, 1])

    api.setPosition(playerA, arena.A)
    api.setPosition(playerB, arena.B)

    const name1 = getNameWithDevice(playerA)
    const name2 = getNameWithDevice(playerB)
    const msg = [
        { str: "START: ", style: { color: "yellow", fontWeight: "bold" } },
        { str: name1, style: { color: "lime", fontWeight: "bold" } },
        { str: " VS ", style: { color: "aqua", fontWeight: "bold" } },
        { str: name2, style: { color: "red", fontWeight: "bold" } }
    ]
    api.sendMessage(playerA, msg)
    api.sendMessage(playerB, msg)

    const equip = (id) => {
        api.setItemSlot(id, 0, "Diamond Sword", 1, {})
        api.setItemSlot(id, 46, "Diamond Helmet", 1, {})
        api.setItemSlot(id, 47, "Diamond Chestplate", 1, {})
        api.setItemSlot(id, 48, "Diamond Gauntlets", 1, {})
        api.setItemSlot(id, 49, "Diamond Leggings", 1, {})
        api.setItemSlot(id, 50, "Diamond Boots", 1, {})
        api.playSound(id, "exp_collect", 1, 1)
    }
    equip(playerA)
    equip(playerB)

} else {
    waitingPlayer = myId
    api.sendMessage(myId, [
        { str: "Queued. Waiting for another player [Classic 1v1 1/2]", style: { color: "cyan", fontWeight: "bold" } }
    ])
    api.playSound(myId, "exp_collect", 1, 1)
}