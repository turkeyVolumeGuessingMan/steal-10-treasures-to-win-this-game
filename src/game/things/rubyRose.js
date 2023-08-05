

Game.things.rubyRose = {
    desc: `An exquisite rose made of solid ruby sits in the bramble.`,
    location: 'roseGarden',
    s: ['smell the exquisite ruby rose', `It smells delightfully of great value.`],
    h: [`hint`, `Some controlled fire from the dragon would be helpful here.`],
    l: ['lick the exquisite ruby rose', `Your tongue isn't long enough.`],
    inv: ['take exquisite ruby rose', () => {
        msg(`OW! You can't quite reach the rose without getting yourself impaled by thorns.`)
    }]
}



Game.things.scorchedRubyRose = {
    desc: `An exquisite rose made of solid ruby sits in a pile of ashes.`,
    location: '',
    s: ['smell the exquisite ruby rose', `It smells delightfully of great value.`],
    l: ['lick the exquisite ruby rose', `Your tongue isn't long enough.`],
    inv: ['take exquisite ruby rose', () => {
        msg(`Taken.`)
        addScore(5)
        msg(`A cheerful little teddy bear with an enormous satchel appears and grabs the exquisite ruby rose. 
        “Good job!” he says with a smile. “I'll just drop this treasure into your safe deposit box for you.”`)
        game.things.scorchedRubyRose.location = ""
        refresh()
        depositTreasure('rubyRose')
    }]
}



