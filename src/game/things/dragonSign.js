

Game.things.dragonSign = {
    desc: `Posted above the hole is a very serious-looking sign.`,
    location: 'draftyRoom',
    r: ['read serious-looking sign', () => {
        msg(`Dragon is allergic to:`)
        msg(`peanuts`)
        msg(`lilacs`)
        msg(`hay`)
    }],
    t: ['take sign', `The sign is fixed in place.`]
}


