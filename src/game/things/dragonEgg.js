
Game.things.dragonEgg = {
    desc: `Sparkling in the smoke is a magnificent gold dragon egg!`,
    location: 'dragonRoost',
    x: ['examine gold egg', `It must be worth its weight in gold, because it IS gold!`],
    h: ['give me a hint will you', `The egg is a treasure-you should take it.`],
    inv: ['take gold egg', () => {
        msg(`It occurs to you as you pick it up that its not precisely shaped like an egg.`)
        msg(`Taken.`)
        msg(`“Oh, thanks for cleaning my litter box,” says the dragon. “That's what I get for eating an entire Arby's for lunch.”`)
        addScore(5)
        msg(`A cheerful little teddy bear with an enormous satchel appears and grabs the gold “egg.”  “Good job!”
        he says with <s>revulsion</s> a smile. “I'll just drop this treasure into your safe deposit box for you.”`)
        game.things.dragonEgg.location = ""
        refresh()
        depositTreasure('dragonEgg')
    }]
}

