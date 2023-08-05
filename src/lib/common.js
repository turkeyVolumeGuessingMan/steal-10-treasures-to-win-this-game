

function createCommonResponses() {
    
    game.commands = {};
    game.printPlayerHelp = printPlayerHelp
    
    cmd('q', [`quit game`, () => {
        
        msg(`Are you sure you want to quit? Hit ~y or ~n.`)
        game.commands = {};
        cmd('help', [`help`, () => {
            msg(`Please hit ~y or ~n.`, 'sub')
        }])
        cmd('y', ['I am done', () => {
            clear()
            window.location.reload()
        }])
        cmd('n', ['keep playing', () => go(game.location)])
        
    }])
    
    // senses
    cmd('space', [`look around`, look])
    cmd('l', [`I want to lick something`, `You taste nothing special.`])
    cmd('s', [`sniff sniff sniff`, `You smell nothing special.`])
    cmd('r', [`do some reading`, `There's nothing here to read.`])
    cmd('x', [`examine (something)`, `There is nothing here worth examining.`])
    cmd('h', [`give me a hint will you`, `No hints in the current room.`])
    cmd('f', [`feel around`, `You feel nothing special.`])
    
    cmd('inv', [`can I take anything in here`, `There's nothing here worth taking.`])
    
    // normal movement
    cmd('up', [`move ahead`, `You can't go that way.`])
    cmd('down', [`move backwards`, `You can't go that way.`])
    cmd('right', [`move right`, `You can't go that way.`])
    cmd('left', [`move left`, `You can't go that way.`])
    
    // weird movement 
    cmd('c', [`I want to climb something`, `Climbing here gets you nowhere.`])
    cmd('i', [`enter`, `There's nothing to enter.`])
    cmd('o', [`exit`, `There's nothing to exit.`])
    
    // item manipulation
    cmd('y', [`yank something`, `There's nothing here to yank.`])
    cmd('p', [`push anything`, `There's nothing here to push.`])
    cmd('v', [`converse (with yourself)`, `You converse eagerly with yourself and find the conversation to be less intelligent than expected.`])
    cmd('b', [`yell`, `Your loud hollering accomplishes nothing.`])
    if (game.pepper) {
        cmd('g', [`grind pepper`, `Your surroundings are now more peppery.`])
    }
    if (game.whistle) {
        cmd('w', [`blow my whistle`, () => {
            msg(pick([
                `A shrill tone reverberates in the air.`,
                `The owl flies onto your shoulder, looks around, and leaves immediately.`,
                `The owl flies overhead. “No riddles here. See you!” He then flaps away.`,
                `The owl appears. “No riddles here. Why did you blow the whistle?” He than flaps away.`,
                `The owl shows up as prompted, sees nothing of interest, and flaps off.`,
                `The owl flaps overhead, with an annoyed expressions. Seeing nothing of interest, he disappears.`,
            ]))
        }])
    }
    
    cmd('a', [`attack (something)`, `There's nothing here to attack.`])
    cmd('t', [`turn (or rotate)`, `You spin around in place.`])
    
    
    // player help
    cmd('help', [`help`, () => game.printPlayerHelp()])
    cmd('score', [`score`, () => msg(ranking())])
    
    
}

