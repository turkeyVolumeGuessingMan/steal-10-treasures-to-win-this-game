
Game.things.ferociousClam = {
    location: 'clamRoom',
    desc: 'You are being attacked by a FEROCIOUS CLAM!',
    x: ['examine clam', `The clam is the most dangerous monster you've ever seen!`],
    l: ['lick clam', `It tastes yummy AND fierce!`],
    f: ['feel clam', `Feels like shell.`],
    b: ['yell at clam', `That accomplishes less than you'd expect.`],
    v: ['converse with deadly clam of overwhelming size', `You have a very cheerful conversation with the clam. It may be terrifying, but it knows how to chat.`],
    a: ['attack clam', () => kill(`The clam strikes back, and you are DEAD!`, `You have been chowdered by a clam`, 'clamRoom')],
    h: ['give me a hint will you', `This clam would be dead if there was a big enough chowder to put it in.`],
    s: ['smell clam please', `It smells like terror!`],
}

