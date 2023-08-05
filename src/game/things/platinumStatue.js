
Game.things.platinumStatue = {
    desc: `Lying neglected here is a priceless platinum statue!`,
    location: 'secretGallery',
    x: ['examine platinum statue', `It's supposed to be either a rabbit or a toucan, you can't be sure which.`],
    inv: ['take platinum statue', () => {
        msg(`Taken.`)
        addScore(5)
        msg(`A cheerful little teddy bear with an enormous satchel appears and grabs the platinum statue. 
        “Good job!” he says with a smile. “I'll just drop this treasure into your safe deposit box for you.”`)
        game.things.platinumStatue.location = ""
        refresh()
        depositTreasure('platinumStatue')
    }]
}

