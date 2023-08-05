
Game.things.redDoor = {
    desc: `A large red door is here, beckoning you to come in.`,
    location: 'hallOne',
    'i up': ['enter the door', () => {
        msg(`You enter the door and climb the stairs beyond.`)
        go('owlCageRoom')
    }]
}


