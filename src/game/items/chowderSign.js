

Game.items.chowderSign = {
    shortDesc: `festive sign`,
    initialLocation: 'scullery',
    desc: `A festive sign is posted here. It reads: “Castle Chowder Festival — Down Stairs.” It appears to be a bit loose on the wall.`,
    h: ['give me a hint will you', `This sign isn't nailed down.`],
    inv: (item) => {
        if (game.item !== 'chowderSign') {
            return [`remove the festive sign from the wall and take it`, () => {
                if (game.location === 'smellyRoom') {
                    msg(`The sign is stuck where it is.`)
                } else {
                    takeItem("chowderSign")
                    if (game.things.chowderFestival.location === 'diningHall') {
                        msg(`It sounds like they're packing up that festival downstairs to go somewhere else.`)
                        game.things.chowderFestival.location = ''
                    }
                    refresh()
                }
            }
        ]} else {
            return [`post the ${item.shortDesc}`, () => {
                if (game.location === 'toolRoom') {
                    msg(`There's no place on the wall to post the sign.`)
                } else {
                    dropItem('chowderSign')
                    if (game.location === 'smellyRoom') {
                        msg(`A great and terrible roar echoes from down the stairs, as if a huge and murderous beast had been 
                        slaughtered by the participants of a chowder festival.`)
                        game.items.chowderSign.desc = `A festive sign is posted here. It reads: “Castle Chowder Festival — Down Stairs.” It appears to be very stuck to the wall.`
                        game.things.chowderFestival.location = 'clamRoom'
                        game.things.ferociousClam.location = ''
                        game.things.clamPearl.location = 'clamRoom'
                    }
                    refresh()
                }
            }]
            
        }
    }
}   