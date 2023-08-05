
Game.rooms.mazeEntrance = () => {
  header(`Maze Entrance`)

  desc(`Just ahead is the entrance to a maze of twisty little passages, all alike.`)

  setExitsHeader(["down", "up", "left", "right"])

  cmd(
    ["right"],
    [
      `walk into wall`,
      `You attempt to solve the maze by walking into a wall, but nothing is gained.`,
    ]
  )

  cmd('s', ['sniff air', `It smells better than that other maze in that last castle.`])
  cmd('l', ['lick maze (with my tongue)', `You'll lick this maze yet!`])
  cmd('f', ['feel wall', `You're the touchy-feely type, aren't you?`])
  if (!game.things.mazeMap.rotated) {
    cmd("h",  [`hint`, `Turning the map will help you solve the maze.`])
  } else {
    cmd("h",  [`hint`, `Nothing more to do here.`])
  }

  cmd('b', [`yell`, () => {
    msg(`AAAAAOOOOUUUIIIIEEE!!`)
    msg(`“Nice lungs,” says the dragon.`)
  }])

  cmd("up", [`enter fiendish maze`, () => {

    if (game.things.mazeMap.rotated) {
        go('mazeEnd')
    } else {
        msg(`You enter the maze but get all turned around. It's almost like that map was backwards.`)
        msg(`Soon you find yourself elsewhere in the castle...`)
        const nextRoom = pick([
          'diningHall',
          'crocodileDentistOffice',
          'clamRoom',
          'sharpRoom',
          'artGallery',
        ])
        go(nextRoom)
    }
  }])

  cmd("down", [`return to sculpture gallery`, () => go("sculptureGallery")])
  cmd("left", [`enter the drafty room`, () => go("draftyRoom")])
  cmd("right", [`enter the crocodile dentist office`, () => go("crocodileDentistOffice")])
}


