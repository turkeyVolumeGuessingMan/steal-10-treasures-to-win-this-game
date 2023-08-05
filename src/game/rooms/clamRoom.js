
Game.rooms.clamRoom = () => {
  header(`Dungeon`)
  
  desc(`The hewn dungeon walls round off as they deepen into a bleak, damp cave. The 
  air is thick and wet.`)
  
  setExitsHeader(["up", "down"])
  cmd('s', ['smell air', `It smells like an enormous clam has lived in here for years-so, pretty much like Skippers.`])
  

  if (game.things.ferociousClam.location === 'clamRoom') {
    if (game.whistle) {
      cmd('w', ['blow whistle', () => {
        msg(`The owl appears, sees the fearsome clam, and flaps away terrified!`)
      }])
    }
    if (game.pepper) {
        cmd('g', [`grind pepper`, `The clam is now better seasoned but no less ferocious.`])
    }
  }

  cmd(
    ["left", "right"],
    [
      `walk into cave wall`,
      `You resist the urge to smack straight into a cave wall.`,
    ]
    )
    
    
    cmd(["up", "c"], [`ascend stairs`, () => {
      if (game.things.ferociousClam.location === 'clamRoom') {
        msg(`You dodge the attack of the fearsome clam and run up the stairs, narrowly escaping with your life!`)
      }
      go("smellyRoom")
    }])

    cmd('down', [`descend deeper into the dungeon`, () => {
      if (game.things.ferociousClam.location === 'clamRoom') {
        msg(`You dodge the attack of the fearsome clam and run down the stairs, narrowly escaping with your life!`)
      }
      go('dragonCave')
    }])
    
  }
  
  