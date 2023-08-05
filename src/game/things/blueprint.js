
Game.things.blueprint = {
    desc: `On the table is a blueprint of the very castle you've been exploring.`,
    location: 'blueprintDesk',
    'r x': ['read blueprints', () => {
        if (game.things.blueprint.turned) {
            msg(`It looks like the castle you've been exploring, but turned around.`)
        } else {
            msg(`It looks pretty much like the castle you've been exploring. You 
            can't help but wonder if the whole thing would look better turned 
            around.`)
        }
    }],
    h: ['give me a hint will you', `Turning the blueprint appears to affect the future construction of the castle.`],
    t: ['turn blueprints', () => {
        msg(`You rotate the blueprints 180 degrees.`)
        if (!game.things.blueprint.turned) {
            game.things.blueprint.turned = true
            msg(`Somehow, you can't shake the feeling that you've massively
            affected future events.`)
        } else {
            game.things.blueprint.turned = false
            msg(`Somehow, you get the feeling that the castle will be 
            back exactly to normal.`)
        }
    }],
    inv: ['foolishly take blueprint, utterly disregarding the rules of time travel', () => {
        msg(`Taken.`)
        kill(`FOOM! As you steal the blueprints for the castle, you create a big swirling
        time paradox that sucks you in. Whoops!`, `You have been erased from existence`, 'blueprintDesk')
    }]
}

