
Game.rooms.toolRoom = () => {
  header(`Tool Shed`)

  desc(`You are in a dank, musty tool shed.`)

  setExitsHeader(["right"])

  cmd('l', [`taste wall`, `The tool room does not taste special.`])

  cmd('s', [`smell tool room`, `It smells like stale gasoline.`])
  cmd('f', ['feel wall', `You're the touchy-feely type, aren't you?`])

  cmd(
    ["left", "down", "up"],
    [
      `plant nose firmly into wall`,
      `Your face smarts for a moment after walking straight into the stone wall.`,
    ]
  )

  cmd("right", [`exit shed`, () => go("roseGarden")])
}
