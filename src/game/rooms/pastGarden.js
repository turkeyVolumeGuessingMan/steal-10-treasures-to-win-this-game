
Game.rooms.pastGarden = () => {
  header(`Open Field`)

  desc(`The morning sun bathes this open field in early light. There is little here, save for a great bronze clock with a lever on the side.`)


  cmd(
    ["left", "down", "right"],
    [
      `wander around`,
      `You could very easily become lost in the past.`,
    ]
  )

  cmd('x', ['examine clock', `In faded letters beneath the clock you can read the words: “The Garden of Time.”`])

  cmd('y', ['pull lever', `The lever is already pulled back.`])
  cmd('s', ['sniff air', `Smells like early morning dew.`])
  cmd('l', ['lick ground', `It tastes very much like dirt from your own time.`])
  cmd('f', ['feel ground', `You press your hands into the dirt.`])
  cmd('b', [`yell`, () => {
    msg(`AAAAAOOOOUUUIIIIEEE!!`)
    msg(`The yell carries far over the distant hills.`)
  }])

  cmd('p', ['push lever', () => {
    msg(`You give the lever a hard push and the clock begins to work. Time unravels around you in a dancing cacophony of light
    and dark, color and black, noise and silence...`)
    msg(`The clock stops and you find yourself returned to your own time.`)
    if (game.things.blueprint.turned) {
      game.directionsReversed = true
    } else {
      game.directionsReversed = false
    }
    go('gardenOfTime')
  }])

  if (!game.directionsReversed) {
    setExitsHeader(["up"])
    cmd("up", [`walk up hill`, () => go("blueprintDesk")])
  } else {
    setExitsHeader(["down"])
    cmd("down", [`walk up hill`, () => go("blueprintDesk")])
  }
}

