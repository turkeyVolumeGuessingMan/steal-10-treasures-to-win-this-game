
Game.rooms.gardenOfTime = () => {
  header(`Garden of Time`)

  desc(`Stepping stones form a little trail between a fierce bramble of roses. Rising above the thorns is a great bronze clock with a 
  long gleaming lever on one side.`)

  setExitsHeader(["left"])

  cmd("h",  [`hint`, `It would appear that you can manipulate time itself with the lever on that clock.`])

  cmd(
    ["up", "right", "down"],
    [
      `walk into rose bush`,
      `A few cuts from the thorns and you decide to take a different course of action.`,
    ]
  )

  cmd('s', ['sniff air', `Mmmm. Roses and night air.`])
  cmd('l', ['lick roses', `You're no aphid.`])
  cmd('f', ['feel roses', `They feel thorny.`])
  cmd('r x', ['examine clock', `In faded letters beneath the clock you can read the words: “The Garden of Time.”`])
  cmd('b', [`yell`, () => {
    msg(`AAAAAOOOOUUUIIIIEEE!!`)
    msg(`The roses pay no heed to your cries.`)
  }])

  cmd('p', ['push lever', `The lever is already in a forward position.`])

  cmd('y', ['pull lever', () => {
    msg(`You give the lever a hard pull and the clock begins to work. Time unravels around you in a dancing cacophony of light
    and dark, color and black, noise and silence...`)
    msg(`The clock stops and you find yourself centuries in the past.`)
    go('pastGarden')
  }])

  cmd("left", [`follow path`, () => go("roseGarden")])
}

