
Game.rooms.mazeEnd = () => {
  header(`Maze End`)

  desc(`You stand at the end of the maze of twisty passages. Be proud of yourself—not many have seen this room.`)

  cmd('s', ['sniff air', `It smells like victory.`])
  cmd('l', ['lick maze', `You've already defeated the maze.`])
  cmd('f', ['feel wall', `You're the touchy-feely type, aren't you?`])
  setExitsHeader(["down"])
  cmd('b', [`yell`, () => {
    msg(`AAAAAOOOOUUUIIIIEEE!!`)
    msg(`The maze doesn't care about your screaming.`)
  }])

  cmd(
    ["down", "right", "up"],
    [
      `walk into wall`,
      `You attempt to re-enter the maze by walking into a wall, but nothing is gained.`,
    ]
  )

  cmd("down", [`enter fiendish maze`, () => go('mazeEntrance')])

}


