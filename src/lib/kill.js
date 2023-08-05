

function taunt() {
    const list = [
        `Well, that was rich.`,
        `Don't worry, that wasn't the worst game I've ever seen. Maybe the second worst.`,
        `Thank you for playing. I've enjoyed watching you, for the most part.`,
        `Centuries from now, aliens will study your remains and find them, <i>ahem,</i> interesting.`,
        `Not bad. Not good, but, well...`,
    ]
    shuffle(list)
    return list[0]
}


function kill(text, epitaph, location) {

    game.commands = {};
    msg(text)
    msg(epitaph, 'epitaph')

    msg(taunt())
    msg(ranking())
    msg(`Would you like to try again?`)
    msg(`Press ~y to try again or ~n to quit.`, 'sub')

    cmd('help', [`help`, () => {
        msg(`Press ~y to try again or ~n to quit.`, 'sub')
    }])
    
    cmd('y', [`yes`, () => {

        msg(`Okay... I'll do my best... Here goes nothing...`)
        go(location)

    }])

    cmd('n', [`no`, () => {
        window.location.reload()
    }])
}

