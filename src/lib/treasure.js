

function depositTreasure(treasure) {
    if (!game.treasure[treasure]) {
        game.treasure[treasure] = true
    }
    if (Object.keys(game.treasure).length === 10) {
        msg(`“Well done!” cries another little teddy bear with a disproportionately huge mallet behind his back. “That's the last treasure!
        I've got your prize right here!”`)
        msg(`CRACK! The teddy bear whacks you over the head, and you awaken elsewhere...`)
        go('endGame')
    }
}

