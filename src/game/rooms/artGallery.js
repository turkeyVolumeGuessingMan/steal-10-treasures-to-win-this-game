
Game.rooms.artGallery = () => {
  header(`Art Gallery`)

  desc(`Before being picked over by vandals, this was a beautiful art gallery. Sadly,
  there is no chance for you to be a vandal; all the paintings have been stolen.`)

  setExitsHeader(["right", "down"])

  cmd('l', [`taste art gallery`, `You seem to misunderstand what people are saying when they declare the art is “tastefully done.”`])
  cmd('f', ['feel wall', `You're the touchy-feely type, aren't you?`])

  cmd('s', [`smell art gallery`, `It smells of very old paint.`])

  cmd(
    ["left", "up"],
    [
      `plant nose firmly into wall`,
      `Your face smarts for a moment after walking straight into the stone wall.`,
    ]
  )

  cmd("down", [`exit art gallery`, () => go("throneRoom")])
  cmd("right", [`exit art gallery`, () => go("smellyRoom")])
}
