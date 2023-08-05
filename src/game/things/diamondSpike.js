

Game.things.diamondSpike = {
    desc: `Near the path is a large spike of pure diamond. It looks so sharp you might kill yourself just picking it up.`,
    location: 'sharpRoom',
    x: ['examine diamond spike', `It's the most valuable pointy thing you've ever seen, except maybe for that one time with 
    the Faberge pencil.`],
    h: ['give me a hint will you', `Maybe you should just take the spike and see what happens.`],
    inv: ['carefully take diamond spike', () => {
        msg(`You very carefully remove the diamond spike.`)
        msg(`Taken.`)
        addScore(5)
        msg(`A cheerful little teddy bear with an enormous satchel appears and grabs the diamond spike. 
        “Good job!” he says with a smile. “I'll just drop this treasure into your safe deposit box for you.”`)
        game.things.diamondSpike.location = ""
        refresh()
        depositTreasure('diamondSpike')
    }]
}

