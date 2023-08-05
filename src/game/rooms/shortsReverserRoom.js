
Game.rooms.shortsReverserRoom = () => {
  header(`Shorts Reverser Room`)

  desc(`This is a very important room, though it's not entirely clear what for. A large button is set into the wall with the words 
  “Shorts Reverser” on it.`)

  setExitsHeader(["right"])

  cmd(
    ["left", "up", "down"],
    [
      `walk into wall`,
      `BONK! Thanks, that was helpful.`,
    ]
  )
  cmd(['x', 'r'], ['read button', `The button says “Shorts Reverser” on it.`])
  cmd('s', ['sniff air', `It smells vaguely of shorts, only backwards.`])
  cmd('f', ['feel button', `The button feels pretty good.`])
  cmd('l', ['lick button', `They cover it in yucky stuff to keep kids from eating it.`])
  cmd('p', ['push button', `You press the button, and a Mr. Roger R. Tortoise of Cleveland, Ohio, finds the shorts he's wearing mysteriously flipped backwards.`])


  cmd("right", [`leave the shorts reverser room`, () => go("dragonCave")])
}




