
Game.things.barbershopQuartet = {
    desc: `A scary-looking sign is affixed to the wall.`,
    location: 'mirrorsHall',
    s: [`sniff sniff sniff`, `You detect the scent of aftershave.`],
    x: [`examine murderous barbershop quartet`, `They're invisible. Didn't you read the sign?`],
    f: [`feel murderous barbershop quartet`, `“Cut that out!” they cry in unison.`],
    l: [`lick murderous barbershop quartet (with my tongue)`, `As curious as you are about the taste of a murderous invisible barbershop quartet, that may be inadvisable.`],
    v: [`converse with the murderous invisible barbershop quartet`, `“Our invisibility has made us vicious!” says the quartet in perfect harmony and from thin air. “People are always bumping into us!”`],
    a: [`attack murderous invisible barbershop quartet`, () => {
        kill(`You attempt a direct assault on the murderous invisible barbershop quartet.`, `You have been shaving-creamed`, 'mirrorsHall')
    }],
    h: [`give me a hint will you`, `Consider doing some vocal exercises.`],
    b: [`yell`, () => {
        msg(`WAAAAAAAAAA!`)
        msg(`As you yell, the murderous barbershop quartet harmonizes with you! The mirrors, made of glass, ripple dangerously...`)
        msg(`SMASH! Shattered glass explodes from the walls and the invisible barbershop quartet flees for their lives!`)
        game.things.barbershopQuartet.location = ''
        refresh()
    }],
    r: ['read the scary-looking sign', () => {
        msg(`The scary-looking sign reads:`)
        msg(`Beware, adventurers! This room is the lair of a murderous invisible barbershop quartet.
        Leave before they permanently coiffure you from existence!`)
    }]
}

