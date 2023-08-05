
Game.things.toolSign = {
    location: 'toolRoom',
    'r x': ['read sign', () => {
        if (!game.rooms.toolRoom.attempt) {
            msg(`The sign reads: “Go ahead and take the screwdriver.”`)
        } else if (game.rooms.toolRoom.attempt === 1) {
            msg(`The sign reads: “You should try taking the screwdriver again.”`)
        } else if (game.rooms.toolRoom.attempt === 2) {
            msg(`The sign reads: “Try that again. Don't worry, it won't kill you this time.”`)
        } else if (game.rooms.toolRoom.attempt === 3) {
            msg(`The sign reads: “Try it one more time, I PROMISE it won't kill you.”`)
        } else if (game.rooms.toolRoom.attempt > 3) {
            msg(`The sign reads: “See? I told you it wouldn't kill you.”`)
        }
    }],
    t: ['turn sign', `The sign needs no rotation.`],
    p: ['push sign', `The sign is too heavy to move.`],
    y: ['pull sign', `The sign is too heavy to move.`],
}


