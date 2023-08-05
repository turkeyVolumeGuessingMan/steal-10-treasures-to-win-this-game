
Game.rooms.entryHall = () => {
  header(`Entry Hall`)

  desc(`A formerly grand entry hall stands before you, lined by 
  cracked marble pillars and with passageways in all directions.`)

  setExitsHeader(["up", "down", "left", "right"])

  /*
  cmd(
    ["left", "right"],
    [
      `plant nose firmly into wall`,
      `Your face smarts for a moment after walking straight into the stone wall.`,
    ]
  )
  */

  cmd('s', ['sniff air', `The entry hall smells important somehow.`])
  cmd('l', ['lick entry room', `It tastes exactly as you imagine it does.`])
  cmd('f', ['feel wall', `You're the touchy-feely type, aren't you?`])
  cmd(["down", "o"], [`leave castle`, () => go("frontDoor")])
  cmd("up", [`enter maze of deadly spikes`, () => go("sharpRoom")])
  cmd("left", [`enter throne room`, () => go("throneRoom")])
  cmd("right", [`enter the griffin room`, () => go("griffinRoom")])

}

