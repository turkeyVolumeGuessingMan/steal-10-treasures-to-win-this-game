
Game.rooms.griffinRoom = () => {
  header(`Griffin Room`)

  desc(`This is a foul, tight little space, as though some very unhygienic animal has made it's home in here.`)

  setExitsHeader(["left", "up"])

  cmd(
    ["right", "down"],
    [
      `walk into wall`,
      `Your nose is slightly bent following the attempt.`,
    ]
  )
  cmd('s', ['sniff air', `It smells like that griffin has kept his litter box in here.`])

  if (game.things.griffin.location === 'griffinRoom') {
    if (game.whistle) {
      cmd('w', ['blow whistle', () => {
        msg(`“What an annoying sound,” said the griffin with a sneer.`)
        msg(`Moments later an owl descends near the griffin. “What a challenging riddle!” hoots the owl. 
        “Of course, the answer depends on the hypotenuse of x.”`)
        msg(`The griffin flushes red with rage. “What do you know of riddles?”`)
        msg(`“Quite a lot, I should say,” said the owl. “Do you know my friend, the sphinx?”`)
        msg(`The two begin a heated discussion about lateral thinking and wander off into the depths of the castle.`)
        game.things.griffin.location = ''
        game.things.griffinFeather.location = 'griffinRoom'
        msg(`You can't help but notice the griffin appears to have left something behind.`)
        refresh()
      }])
    }
    if (game.pepper) {
        cmd('g', [`grind pepper`, `“ACHOO! Cut that out,” says the griffin. “Pepper makes me sneezy.”`])
    }
  }

  cmd("left", [`leave the griffin room`, () => go("entryHall")])
  cmd("up", [`enter sculpture gallery`, () => go("sculptureGallery")])
}

