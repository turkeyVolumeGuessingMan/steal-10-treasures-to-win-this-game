
Game.rooms.draftyRoom = () => {
  header(`Drafty Room`)
  
  desc(`The air blows swiftly here to a wide opening in the floor. A long chain descends into the hole to a dark smoky chamber
  below. A narrow window overlooks a charming rose garden far below the castle wall.`)
  
  setExitsHeader(["left", "right"])
  cmd('h', [`hint`, `This room could use some pepper.`])
  
  cmd(
    ["up", "down"],
    [
      `walk into wall`,
      `Your nose is slightly bent following the attempt.`,
    ]
    )
    
    cmd('s', ['smell drafty room', `It smells windy.`])
    cmd('l', ['lick drafty room', `You can't lick the wind.`])
    cmd('f', ['feel air', `The air is blowing rapidly down into the opening in the floor.`])
    cmd('c', [`climb down chain`, () => go('dragonRoost')])
    
    if (game.pepper) {
      cmd('g', [`grind pepper`, () => {
        msg(`Great clouds of pepper drift on the air currents down into the opening in the floor.`)
        msg(`ACHOOO!`)
        msg(`A firey blast escapes the chamber below! Someone down there can't handle a little pepper in the air!`)
        if (game.things.rubyRose.location === 'roseGarden' && game.dragonValve) {
          msg(`Through the window, you can make out a bit of flame dancing in the rose garden. It would 
          appear that your actions have managed to scorch a few bushes.`)
          game.things.rubyRose.location = ''
          game.things.scorchedRubyRose.location = 'roseGarden'
          addScore(3)
          refresh()
        }
      }])
    }
    
    cmd("right", [`enter the maze entrance`, () => go("mazeEntrance")])
    cmd("left", [`enter scullery`, () => go("scullery")])
  }
  
  
  