
Game.rooms.hallOne = () => {
  header(`Long Hallway (narrow end)`)

  desc(`You're in a long corridor, which narrows to an exit on the left.`)

  setExitsHeader(["left", "right", "up"])
  cmd('s', [`Smell hallway`, `Ah, the fine aroma of castle corridors.`])
  cmd('l', ['lick hallway', `It doesn't taste all that special.`])
  cmd('f', ['feel wall', `You're the touchy-feely type, aren't you?`])

  cmd(
    ["down"],
    [
      `walk into wall`,
      `Your nose is slightly bent following the attempt.`,
    ]
  )

  cmd("right", [`walk hallway`, () => go("hallTwo")])
  cmd("left", [`walk hallway`, () => go("smellyRoom")])
}


Game.rooms.hallTwo = () => {
  header(`Long Hallway (middle part)`)

  desc(`You're in a long corridor, in the middle part.`)

  setExitsHeader(["left", "right", "up"])
  cmd('s', [`Smell hallway`, `Ah, the fine aroma of castle corridors.`])
  cmd('l', ['lick hallway', `It doesn't taste all that special.`])
  cmd('f', ['feel wall', `You're the touchy-feely type, aren't you?`])

  cmd(
    ["down"],
    [
      `walk into wall`,
      `Your nose is slightly bent following the attempt.`,
    ]
  )

  cmd("right", [`walk hallway`, () => go("hallThree")])
  cmd("left", [`walk hallway`, () => go("hallOne")])
}


Game.rooms.hallThree = () => {
  header(`Long Hallway (far end)`)

  desc(`You're in a long corridor, on the far end. On the wall is a large impressive button.`)

  setExitsHeader(["left", "up"])
  cmd('s', [`Smell hallway`, `Ah, the fine aroma of castle corridors.`])
  cmd('l', ['lick hallway', `It doesn't taste all that special.`])
  cmd('f', ['feel large button', `It feels like it does something quite important.`])

  const flipDoorsRoutine = () => {
    const doors = [
      game.things.blueDoor,
      game.things.redDoor,
      game.things.greenDoor,
    ]
    for (const d of doors) {
      if (d.location === 'hallOne') {
        d.location = 'hallThree'
      } else if (d.location === 'hallTwo') {
        d.location = 'hallOne'
      } else if (d.location === 'hallThree') {
        d.location = 'hallTwo'
      }
    }
  }

  cmd(
    ["down", "right"],
    [
      `walk into wall`,
      `Your nose is slightly bent following the attempt.`,
    ]
  )

  cmd('h', ['give me a hint will you', `It would appear that this button literally moves the towers around in this hallway.`])

  cmd('p', ['go ahead and press the large impressive button', () => {
    msg(`The doors on the hallway behind you flip in the air like cherries on a slot machine. In a few seconds, they 
    land flat on the wall, now in a shuffled order.`)
    flipDoorsRoutine()
    refresh()
  }])

  cmd("left", [`walk hallway`, () => go("hallTwo")])
}

