

Game.rooms.pricelessMapRoom = () => {
  header(`Priceless Map Room`)

  desc(`You are at the top of a tall tower. A lonely stair descends back down to the hallway.`)

  setExitsHeader(["down"])

  cmd(
    ["left", "right", "up"],
    [
      `walk into wall`,
      `You resist the urge to smack straight into the castle wall.`,
    ]
  )
  cmd('s', ['sniff air', `Smells like old maps and treasure.`])
  cmd('l', ['lick map room', `Mmm. It tastes better than Frobs McNally OR Flathead Guide.`])
  cmd('f', ['feel wall', `You're the touchy-feely type, aren't you?`])
  cmd('b', [`yell`, () => {
    msg(`AAAAAOOOOUUUIIIIEEE!!`)
    msg(`Nothing happens.`)
  }])

  
  cmd("down", [`descend stairs`, () => {
    go(game.things.blueDoor.location)
  }])

}

