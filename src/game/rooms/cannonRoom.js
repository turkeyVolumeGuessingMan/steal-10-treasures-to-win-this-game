

Game.rooms.cannonRoom = () => {
  header(`Cannon Room`)

  desc(`The walls at the top of this lonely tower are blasted and blackened with gunpowder. A narrow stair descends back down to the hallway.`)
  cmd('s', ['smell cannon', `Smells like gunpowder.`])
  cmd('l', ['lick cannon', `The cannon would appreciate it if you wouldn't.`])
  cmd('f', ['feel cannon', `It's cold and metal.`])

  setExitsHeader(["down"])

  cmd(
    ["left", "right", "up"],
    [
      `walk into wall`,
      `You resist the urge to smack straight into the castle wall.`,
    ]
  )

  
  cmd("down", [`descend stairs`, () => {
    go(game.things.greenDoor.location)
  }])

}
