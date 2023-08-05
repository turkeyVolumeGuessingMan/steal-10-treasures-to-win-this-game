

Game.things.treasureMap = {
    desc: `Hanging on the wall is a priceless antique map, valuable beyond compare!`,
    location: 'pricelessMapRoom',
    x: ['examine priceless map', `It appears to be a map of New Jersey.`],
    inv: ['take priceless map', () => {
        msg(`Taken.`)
        addScore(5)
        msg(`A cheerful little teddy bear with an enormous satchel appears and grabs the priceless map of New Jersey. 
        “Good job!” he says with a smile. “I'll just drop this treasure into your safe deposit box for you.”`)
        game.things.treasureMap.location = ""
        refresh()
        depositTreasure('treasureMap')
    }]
}

