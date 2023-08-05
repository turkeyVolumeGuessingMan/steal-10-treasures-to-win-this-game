
Game.rooms.blueprintDesk = () => {
  header(`Top of Hill`)

  desc(`At the top of this sunny little hill is a wide oak table. It looks like
  someone has been here recently.`)

  cmd('s', ['sniff air', `Smells like early morning dew.`])
  cmd('l', ['lick ground', `It tastes very much like dirt from your own time.`])
  cmd('f', ['feel ground', `You press your hands into the dirt.`])
  cmd('b', [`yell`, () => {
    msg(`AAAAAOOOOUUUIIIIEEE!!`)
    msg(`The yell carries far over the distant hills.`)
  }])

  cmd(
    ["left", "right", "up"],
    [
      `wander off`,
      `You could easily become lost in time that way.`,
    ]
  )

  if (!game.directionsReversed) {
    setExitsHeader(["down"])
    cmd("down", [`head down hill`, () => go("pastGarden")])
  } else {
    setExitsHeader(["up"])
    cmd("up", [`head down hill`, () => go("pastGarden")])
  }
}

