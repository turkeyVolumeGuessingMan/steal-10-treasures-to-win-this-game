
function cmd(command, response) {

    if (game.directionsReversed) {
        if (command === 'left') {
            command = 'right'
        } else if (command === 'right') {
            command = 'left'
        } else if (command === 'up') {
            command = 'down'
        } else if (command === 'down') {
            command = 'up'
        }
    }

    if (Array.isArray(command)) {
        command.map(c => cmd(c, response))
    } else {
        game.commands[command.toLowerCase()] = response
    }

}
