

Game.rooms.endGame = () => {
    
    header(`You've Won!`)
    
    desc(`You are on a tropical island on a beautiful sunny day. The air is filled with the scent the of fresh baked cookies.
    Presently, you sit on top of a throne, which in turn is atop of a giant pile of gold, big enough to swim in like a cartoon duck.
    Stealing that treasure from the castle and investing prudently has returned generous dividends.
    <p>
    On your throne is a scroll machine with a small red button.
    </p>
    <p>
    A tome of timeless wisdom lies here, begging to be read.
    </p>`)
    
    cmd('s', ['sniff air', `I told you, it smells like cookies.`])
    cmd('l', ['lick massive pile of gold', `Gold isn't known for being delicious.`])
    cmd('p', ['push button on scroll dispenser', () => {
        msg(`The scroll machine whirrs to life, and prints a scroll. The scroll reads:`)
        msg(pick([
            `Did you try feeling the murderous barbershop quartet?`,
            `Did you try licking the crocodile dentist?`,
            `Did you talk to the dragon?`,
            `Did you lick the sculptures in the gallery?`,
            `Did you converse with the griffin?`,
            `Did you push the button in the shorts-reverser room?`,
            `Did you grind pepper in front of the griffin or the fearsome clam?`,
            `Did you stop and smell the roses in the rose garden?`,
            `Did you try taking the blueprints in the past?`,
        ]))
        msg(`The scroll then vanishes into nothingness.`)
    }])
    cmd('c', ['converse with someone', `Sadly, being fabulously rich has alienated you from most of your friends.`])
    cmd('f', ['feel pile of gold', `You run your fingers through the gold and laugh maniacally.`])
    cmd('r', ['read tome of wisdom', () => {
        msg(`Congratulations! You've completed Steal 10 Treasures to Win This Game!`)
        msg(ranking())
        msg(`You did this in only ${game.turns} moves.`)
        msg(`If you would like to play again, press the ~y key.`, 'sub')
    }])
    
    cmd('help', ['help', () => {
        msg(`If you would like to play again, press the ~y key, or you could press ~p to activate the scroll machine or ~. to attempt taking one more treasure.`, 'sub')
    }])
    cmd('y', [`restart`, () => {
        clear()
        window.location.reload()
    }])
    
}

