

function go(roomName) {
    setExitsHeader(null)
    createCommonResponses()
    game.location = roomName
    game.rooms[roomName]()
    look()
}

