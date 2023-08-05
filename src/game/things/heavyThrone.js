
Game.things.heavyThrone = {
    desc: `An incredibly valuable golden throne is here! It isn't nailed down so it must be yours for the taking!`,
    location: 'throneRoom',
    x: ['examine throne', `It must weigh a ton.`],
    f: ['feel throne', `It feels valuable.`],
    h: ['give me a hint will you', `It's time for you to take the throne-literally.`],
    inv: ['take throne', () => {
        msg(`Your lumbar complains about you stealing the ridiculously heavy throne!`)
        msg(`Taken.`)
        addScore(5)
        msg(`A cheerful little teddy bear with an enormous satchel appears and grabs the throne with considerable effort. 
        “Good job!” he says with a smile. “I'll just drop this treasure into your safe deposit box for you.”`)
        game.things.heavyThrone.location = ""
        refresh()
        depositTreasure('heavyThrone')
    }]
}

