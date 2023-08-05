
Game.items.screwdriver = {
    shortDesc: `Phillips head screwdriver`,
    initialLocation: 'toolRoom',
    desc: `A Phillips head screwdriver lies here at your feet.`,
    h: ['give me a hint will you', `Persistence pays off. Keep trying to take the screwdriver.`],
    inv: (item) => [`take ${item.shortDesc}`, () => {
        if (!game.screwdriver) {
            if (!game.rooms.toolRoom.attempt) {
                game.rooms.toolRoom.attempt = 1;
                kill(`You grab the Phillips head screwdriver, and while doing so, you slip and STAB yourself with it! As 
                the darkness closes in, you notice the writing on the sign seems to have changed.`,
                `You have picked up a semi-sharp object and died`, 'toolRoom')
            } else if (game.rooms.toolRoom.attempt === 1) {
                game.rooms.toolRoom.attempt = 2;
                kill(`You grab the Phillips head screwdriver, and while doing so, you slip and STAB yourself with it! As 
                the darkness closes in, you notice the writing on the sign seems to have changed.`,
                `You have picked up a semi-sharp object and died`, 'toolRoom')
            } else if (game.rooms.toolRoom.attempt === 2) {
                game.rooms.toolRoom.attempt = 3;
                kill(`You grab the Phillips head screwdriver, and while doing so, you slip and STAB yourself with it! As 
                the darkness closes in, you notice the writing on the sign seems to have changed.`,
                `You have picked up a semi-sharp object and died`, 'toolRoom')
            } else {
                game.rooms.toolRoom.attempt = 4
                game.screwdriver = true
                game.rooms.toolRoom.item = ''
                msg(`You take the Phillips head screwdriver.`)
                addScore(3)
                refresh()
            }
        }
    }],
    
}


