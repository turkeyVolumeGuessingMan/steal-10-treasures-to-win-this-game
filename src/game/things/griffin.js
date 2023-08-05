Game.things.griffin = {
    desc: `An enormous griffin rests here, with an annoying smirk on his face. He regards you with a nod and says: “Adventurer, 
    answer my riddle. If a tree falls in the forest, what time will the 3 o' clock train to Chattanooga arrive?”`,
    location: 'griffinRoom',
    h: ['give me a hint will you', `If you make a friend in the castle with a gift for riddles, they might be helpful here.`],
    'x': ['examine griffin', () => {
        msg(`"Studying me to find some weakness in my riddle?" asks the griffin. "Well, it won't work."`)
    }],
    l: ['lick griffin (with my tongue)', `“Would you cut that out please?” says the griffin, thoroughly grossed out.`],
    f: ['feel griffin', `You give the griffin a few friendly pets and he purrs contentedly.`],
    v: ['converse with the griffin', `“Want a hint for my impossible riddle?” he sneers. “Guess! Is it 1 o' clock? 2 o' clock? Or some other hour?”`],
    a: ['attack griffin', () => kill(`SLASH! The griffin ENDS you with one swipe of his claws!`, `You didn't make the cut`, 'griffinRoom')],
    '1': [`Answer 1 o' clock `, () => {
        kill(`“Wrong!” cries the griffin. He shoots lasers from his eyes and you are fried to a crisp!`, `You are now charcoal briquettes`, 'griffinRoom')
    }],
    '2': [`Answer 2 o' clock `, () => {
        kill(`“Wrong!” cries the griffin. He shoots lasers from his eyes and you are fried to a crisp!`, `You are now charcoal briquettes`, 'griffinRoom')
    }],
    '3': [`Answer 3 o' clock `, () => {
        kill(`“Wrong!” cries the griffin. He shoots lasers from his eyes and you are fried to a crisp!`, `You are now charcoal briquettes`, 'griffinRoom')
    }],
    '4': [`Answer 4 o' clock `, () => {
        kill(`“Wrong!” cries the griffin. He shoots lasers from his eyes and you are fried to a crisp!`, `You are now charcoal briquettes`, 'griffinRoom')
    }],
    '5': [`Answer 5 o' clock `, () => {
        kill(`“Wrong!” cries the griffin. He shoots lasers from his eyes and you are fried to a crisp!`, `You are now charcoal briquettes`, 'griffinRoom')
    }],
    '6': [`Answer 6 o' clock `, () => {
        kill(`“Wrong!” cries the griffin. He shoots lasers from his eyes and you are fried to a crisp!`, `You are now charcoal briquettes`, 'griffinRoom')
    }],
    '7': [`Answer 7 o' clock `, () => {
        kill(`“Wrong!” cries the griffin. He shoots lasers from his eyes and you are fried to a crisp!`, `You are now charcoal briquettes`, 'griffinRoom')
    }],
    '8': [`Answer 8 o' clock `, () => {
        kill(`“Wrong!” cries the griffin. He shoots lasers from his eyes and you are fried to a crisp!`, `You are now charcoal briquettes`, 'griffinRoom')
    }],
    '9': [`Answer 9 o' clock `, () => {
        kill(`“Wrong!” cries the griffin. He shoots lasers from his eyes and you are fried to a crisp!`, `You are now charcoal briquettes`, 'griffinRoom')
    }],
    'b': ['scream in frustration', `"Ha!" laughs griffin. "My riddle is causing you no small distress, I see."`]
}

