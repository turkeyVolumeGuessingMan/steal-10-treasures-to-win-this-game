

Game.things.greenDoor = {
    desc: `A large green door is here, beckoning you to come in.`,
    location: 'hallThree',
    'i up': ['enter the door', () => {
        msg(`You enter the door and climb the stairs beyond.`)
        go('cannonRoom')
    }]
}
