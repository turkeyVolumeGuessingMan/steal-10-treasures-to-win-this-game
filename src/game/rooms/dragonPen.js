
Game.rooms.dragonCave = () => {
  header(`Dragon Cave`)

  desc(`In the shadows is a narrow opening lit by a hot orange glow. Above the opening is very ominous-looking sign in gothic lettering.`)

  setExitsHeader(["up", "down", "left"])

  cmd(
    ["right"],
    [
      `I want to walk into a cave wall`,
      `You resist the urge to smack straight into a cave wall.`,
    ]
  )

  cmd(['r', 'x'], ['read sign', `The sign reads: “Stop grinding pepper in the dragon's roost, you idiots!”`])
  cmd('s', ['smell cave', `Like fire and old limestone.`])
  cmd('l', ['lick dragon cave (with tongue)', `It tastes hot and stony.`])
  cmd('f', ['feel cave', `You're the touchy-feely type, aren't you?`])

  cmd(["down", "i"], [`enter the roost`, () => go("dragonRoost")])
  cmd("left", [`enter the shorts reverser room`, () => go("shortsReverserRoom")])
  cmd("up", [`leave the dragon pen`, () => go("clamRoom")])

}




