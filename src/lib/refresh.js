

function refresh() {
    createCommonResponses()
    game.rooms[game.location]()
    handleThingsCommands(game.things)
    handleItemsCommands()
    updateHeaderBar()
}
