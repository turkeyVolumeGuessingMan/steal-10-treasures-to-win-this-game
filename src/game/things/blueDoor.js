

Game.things.blueDoor = {
    desc: `A large blue door is here, beckoning you to come in.`,
    location: 'hallTwo',
    'i up': ['enter the door', () => {
        msg(`You enter the door and climb the stairs beyond.`)
        go('pricelessMapRoom')
    }]
}


