
Game.rooms.diningHall = () => {
  header(`Dining Hall`)

  desc(`A vast dining hall, the kind they use in movies for fancy parties, stretches off into darkness. 
  You could probably fit an army in here.
  A set of stairs heads up to the scullery.`)

  cmd('s', ['smell dining hall', `The air is thick with old fried food and pretentiousness.`])
  cmd('l', ['lick dining hall', `Your supposed to eat IN this room, not eat the room.`])
  cmd('f', ['feel wall', `You're the touchy-feely type, aren't you?`])
  setExitsHeader(["up"])

  cmd(
    ["left", "down", "right"],
    [
      `walk into wall`,
      `Bumping into the wall will not help you in this story.`,
    ]
  )

  cmd("up", [`ascend stairs`, () => go("scullery")])
}

