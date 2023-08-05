

Game.rooms.owlCageRoom = () => {
  header(`Owl Cage Room`)

  desc(`You are at the top of a tall tower. On the wall is a long lever, controlling a heavy shutter mechanism over a window.
  The window is ${(game.towerWindowOpen) ? 'open' : 'shut'}.
  A lonely stair descends back down to the hallway.`)

  setExitsHeader(["down"])

  cmd(
    ["left", "right", "up"],
    [
      `walk into wall`,
      `You resist the urge to smack straight into the castle wall.`,
    ]
  )

  cmd('y', ['pull the window lever', () => {
    if (game.towerWindowOpen) {
        msg(`The window shutter is already open.`)
    } else {
        game.towerWindowOpen = true
        msg(`CRANK! The window shutter opens permitting a cool gentle breeze.`)
    }
  }])

  cmd('s', ['smell owl cage room', `It smells of sadness, like a trapped animal yearning for freedom.`])
  cmd('l', ['lick owl cage room', `It tastes of tears and old owl feathers.`])
  cmd('f', ['feel wall', `You're the touchy-feely type, aren't you?`])

  cmd('p', ['push the window lever', () => {
    if (!game.towerWindowOpen) {
        msg(`The window shutter is already closed.`)
    } else {
        game.towerWindowOpen = false
        msg(`CRANK! The window shutter closes. I'm not sure why you did that, but I'm sure you have a good reason.`)
    }
  }])

  
  cmd("down", [`descend stairs`, () => {
    go(game.things.redDoor.location)
  }])

}


