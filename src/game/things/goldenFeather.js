
Game.things.griffinFeather = {
    desc: `Lying in the dust is a rare griffin feather.`,
    location: '',
    x: ['examine rare griffin feather', `The griffin feather looks like it would fetch a good price on Antiques Roadshow.`],
    inv: ['take rare griffin feather', () => {
        msg(`Taken.`)
        addScore(5)
        game.things.griffinFeather.location = ''
        msg(`A cheerful little teddy bear with an enormous satchel appears and grabs the rare griffin. 
        “Good job!” he says with a smile. “I'll just drop this treasure into your safe deposit box for you.”`)
        refresh()
        depositTreasure('griffinFeather')
    }]
}

