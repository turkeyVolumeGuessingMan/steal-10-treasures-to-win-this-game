
Game.rooms.scullery = () => {
  header(`Scullery`)

  desc(`You're in a filthy old scullery. It all but sickens your stomach to think of food prepared in here. A narrow stair leads downwards to the dining hall.`)

  setExitsHeader(["right", "down"])

  cmd('l', [`taste scullery`, `If you wanna catch an infection, here's your chance.`])

  cmd('s', [`smell scullery`, `It smells like something was cooked in here recently.`])
  cmd('f', ['feel wall', `You're the touchy-feely type, aren't you?`])

  cmd(
    ["left", "up"],
    [
      `plant nose firmly into wall`,
      `The filthy scullery wall leaves a greasy smudge on your nose.`,
    ]
  )

  cmd("right", [`go through the narrow door`, () => go("draftyRoom")])
  cmd("down", [`descend stairs`, () => go("diningHall")])
}

