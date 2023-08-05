
function handleItemsCommands() {
    
    const commands = [
        'inv',
    ]
    
    
    const r = game.location
    const room = game.rooms[r]
    if (room.item) {
        const itemName = room.item
        const item = game.items[itemName]
        commands.map(c => {
            if (item[c]) {
                cmd(c, item[c](item))
            }
        })
    }
    if (game.item) {
        const itemName = game.item
        const item = game.items[itemName]
        commands.map(c => {
            if (c !== 't' && item[c]) {
                cmd(c, item[c](item))
            }
        })
    }
    
}


function handleItemsDesc() {
    
    const r = game.location
    const room = game.rooms[r]
    if (room.item) {
        const itemName = room.item
        const item = game.items[itemName]
        msg(item.desc)
    }
    
}


function setItems() {
    
    const items = Object.keys(game.items)
    for (const itemName of items) {
        const item = game.items[itemName]
        if (item.initialLocation) {
            const roomName = item.initialLocation
            if (!game.rooms[roomName].item) {
                game.rooms[roomName].item = itemName
            }
        }
    }
    
}


function takeItem(itemName, takeMsg) {
    
    const r = game.location
    const room = game.rooms[r]
    if (!takeMsg) {
        takeMsg = 'Taken.'
    }
    if (room.item === itemName) {
        if (!game.item) {
            game.item = room.item
            room.item = null
            msg(takeMsg)
            refresh()
        } else {
            msg(`My hands are full.`)
        }
    }
    
}


function dropItem(itemName, dropMsg) {
    
    const r = game.location
    const room = game.rooms[r]
    if (!dropMsg) {
        dropMsg = 'Dropped.'
    }
    if (!room.item) {
        if (game.item) {
            room.item = game.item
            game.item = null
            refresh()
            msg(dropMsg)
        } else {
            msg(`You can't drop the ${game.items[itemName].shortDesc} with
            the ${game.items[room.item].shortDesc} here.`)
        }
    }
    
}
