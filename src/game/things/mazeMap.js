
Game.things.mazeMap = {
    desc: `Posted on the wall is a map to the maze. This game is almost too easy!`,
    location: 'mazeEntrance',
    rotated: false,
    'r x': ['examine maze map', () => {
        if (game.things.mazeMap.rotated) {
            msg(`Right, down, left, right... Yeah you can memorize this.`)
        } else {
            msg(`Left, up, right, left... Yeah you can memorize this.`)
        }
    }],
    inv: ['take maze map', () => {
        msg(`It's too big for you to lug around.`)
    }],
    t: ['rotate maze map', () => {
        if (game.things.mazeMap.rotated) {
            msg(`It doesn't need to be turned around any more.`)
        } else {
            game.things.mazeMap.rotated = true;
            msg(`You turn the maze map 180 degrees. It looks much better now!`)
        }
    }]
}



