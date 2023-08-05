
Game.things.cannon = {
    desc: `Fixed in place next to an open window is a large imposing cannon with a draw-string.`,
    location: 'cannonRoom',
    t: ['move cannon', `The cannon is too heavy to move.`],
    x: ['examine cannon', () => {
        msg(`It appears to be ready to fire.`)
        msg(`A helpful-looking crab scuttles up to your keyboard and says: “Hey! you can fire the cannon by giving the 
        draw-string a good yank!”`)
        msg(`The helpful crab scuttles away.`)
        const hall = ['hallOne', 'hallTwo', 'hallThree']
        const location = game.things.greenDoor.location;
        const index = hall.indexOf(location)
        const owl = hall.indexOf(game.things.redDoor.location)
        if (owl === index - 1 || owl === index + 1) {
            msg(`The cannon is aimed out the window, pointing at the next tower over.`)
        } else {
            msg(`The cannon is aimed out the window, pointing at nothing.`)
        }
    }],
    a: ['attack cannon', () => kill(`You attack the cannon and get your face blown off!`, `You have been canonized`, 'cannonRoom')],
    h: ['give me a hint will you', `It would seem a good idea to use this cannon to free the owl from his cage in the other tower.`],
    y: ['pull draw-string', () => {
        msg(`BOOM! 💥 The cannon thunders and a HUGE cannonball fires into the air!`)
        const hall = ['hallOne', 'hallTwo', 'hallThree']
        const location = game.things.greenDoor.location;
        const index = hall.indexOf(location)
        const owl = hall.indexOf(game.things.redDoor.location)
        if (owl === index - 1 || owl === index + 1) {
            if (!game.towerWindowOpen) {
                msg(`The cannonball lands harmlessly on the closed window of the next tower over.`)
            } else {
                if (game.things.owlCage.location !== 'owlCageRoom') {
                    msg(`The cannonball sails through the window of the next tower over.`)
                } else {
                    msg(`The cannonball sails through the window of the next tower over, followed by a loud thundering CRASH!`)
                    msg(`Moments later an overjoyed owl flaps into the room. “Thank you, kind adventurer!” hoots the owl. 
                    “Because of you, I am free of that loathsome cage.” He drops a whistle into your open palm.
                    “In this castle are many diabolical traps and puzzles. Should you encounter a riddle beyond your comprehension,
                    blow this whistle and I will come assist. Farewell!”`)
                    msg(`He flaps off into the night.`)
                    game.things.owlCage.location = ''
                    game.whistle = true
                    msg(`You can now press ~w to blow the whistle.`, 'sub')
                    addScore(3)
                    refresh()
                }
            }
        } else {
            msg(`The cannonball sails harmlessly into the night. You hope it doesn't crush a passing seagull.`)
        }
    }],
}


