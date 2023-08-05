
Game.rooms.secretGallery = () => {
  header(`Secret Gallery`)

  desc(`Hidden away in this tiny dusty hole is a secret art gallery.`)

  setExitsHeader(["left"])

  cmd('s', [`Smell secret gallery`, `Mmm. Hot and enclosed small spaces.`])
  cmd('l', ['lick secret gallery', `This isn't an important room, so there's not a lot in here, ok?`])
  cmd('f', ['feel wall', `You're the touchy-feely type, aren't you?`])
  cmd(["down", "right", "up"], [
      `plant nose firmly into wall`,
      `Your face smarts for a moment after walking straight into the stone wall.`,
    ])

  cmd("left", [`exit gallery`, () => go("sculptureGallery")])
}
