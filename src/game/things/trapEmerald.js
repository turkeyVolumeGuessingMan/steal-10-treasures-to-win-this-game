
Game.things.trapEmerald = {
    desc: `Lying near your throne is a football-sized pure green emerald.`,
    location: 'endGame',
    x: ['examine emerald', `You can't recall seeing this bit of treasure before. It might not be yours.`],
    inv: ['take trap emerald', () => {
        msg(`Taken.`)
        kill(`A legion of teddy bears descend on you and bludgeon you with comfy cushions. You're only supposed to steal 10
        treasures, not 11!`, 'Green is the color of greed', 'endGame')
    }]
}
