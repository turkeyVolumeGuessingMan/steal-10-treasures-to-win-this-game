

function printPlayerHelp() {
    let pepperMsg = ''
    let whistleMsg = ''
    if (game.pepper) {
        pepperMsg = `<td>~g To Grind some pepper</td>`
    }
    if (game.whistle) {
        whistleMsg = `<td>~w To blow the whistle</td>`
    }
    msg(`
        Steal 10 Treasures to Win This Game is a one-letter parser game. Each command is
        accomplished by pressing a single key on the keyboard, then pressing the Enter key.
        <table class="help">
        <tr>
        <td>
        Arrow ~↑, ~↓, ~← or ~→ to navigate
        </td>
        <td>
        Space bar to show room description
        </td>
        </tr>
        <tr>
        <td>
        ~x Examine ~r Read
        </td>
        <td>
        ~p Push ~y Pull
        </td>
        </tr>
        <tr>
        <td>
        ~s Smell ~l Lick ~f Feel 
        </td>
        <td>
        ~t Turn ~b Yell ~a Attack
        </td>
        </tr>
        <tr>
        <td>
        ~. To take an item, or drop an item if you're holding it
        </td>
        <td>
        ~c to Climb, ~v to Converse
        </td>
        </tr>
        <tr>
        ${pepperMsg}
        ${whistleMsg}
        </tr>
        <tr>
        <td>
        Obvious room exits are displayed next to the 🧭
        </td>
        <td>
        Your score is displayed next to the 🏆
        </td>
        </tr>
        <tr>
        <td>
        ~h For a hint about the current room
        </td>
        <td>
        ~# Toggle music
        </td>
        </tr>
        <tr>
        <td>
        ~; Credits ~$ Score
        </td>
        <td>
        ~q Quit the game
        </td>
        </tr>
    </table>
    There may also be some secret commands, if you can find them.
    `)
}


/*
function printPlayerHelp() {

    msg(`This is a one-letter parser game. Each command is accomplished by pressing a single key on the keyboard!`)

    msg(`Navigation`, 'help')
    msg(`Arrow Up, Down, Left and Right`, 'help')
    msg(`~c - Climb`)
    
    msg(`Your senses`, 'help')
    msg(`Space Bar - Show room description`, 'help')
    msg(`~x - Examine`, 'help')
    msg(`~r - Read`, 'help')
    msg(`~s - Smell`, 'help')
    msg(`~l - Lick`, 'help')
    msg(`~f - Feel`)

    msg(`Messing with the world around you`, 'help')
    if (game.pepper) {
        msg(`g - Grind pepper`, 'help')
    }
    if (game.whistle) {
        msg(`w - Blow whistle`, 'help')
    }
    msg(`p - Push`, 'help')
    msg(`y - Pull (or yank)`, 'help')
    msg(`e - Eat (or drink)`, 'help')
    msg(`t - Turn (to rotate something)`, 'help')
    msg(`b - Yell (or bellow)`, 'help')
    msg(`a - Attack monster`)

    msg(`Inventory`, 'help')
    msg(`. - To take an item, or drop an item if you're holding it`)

    msg(`# - Toggle transcript on/off`)
    msg(`h - For a hint about the current room`)

    msg(`And press q to quit when you've had enough!`)

}
*/
