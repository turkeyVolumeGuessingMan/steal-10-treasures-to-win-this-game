
Game.rooms.smellyRoom = () => {
  header(`Smelly Room`)
  
  desc(`It's unclear as to why, but this room smells AWFUL. A dark stair descends into the dungeon.`)
  
  setExitsHeader(["down", "left", "right"])
  
  cmd('h', [`hint`, `This room could use a sign.`])
  
  cmd(
    ["up"],
    [
      `walk into wall`,
      `The wall resists your efforts to move through it.`,
    ]
    )
    
    cmd('s', [`Smell smelly room`, `You're already holding your nose as it is!`])
    cmd('l', ['lick smelly room', `Just... WHY??`])
    cmd('f', ['feel wall', `You're the touchy-feely type, aren't you?`])
    cmd(["down", "c"], [`descend dark stairs`, () => go("clamRoom")])
    cmd("left", [`enter the art gallery`, () => go("artGallery")])
    if (!game.pirateDefeated) {
      cmd("right", [`enter long hallway`, () => {
        msg(`A wicked pirate confronts you as you enter! “You overcame the poison ice cream earlier tonight,”
        he chortles. “Can you resist the poison popsicle?`)
        
        game.commands = {}
        
        msg(`Press ~y to accept the poisonous popsicle, and ~n to refuse.`, 'sub')
        cmd('help', ['help', () => {
          msg(`Press ~y to accept the poisonous popsicle, and ~n to refuse.`, 'sub')
        }])
        cmd('y', ['say yes to the poisonous popsicle', () => kill(`Hey, what could go wrong?`, `You have absolutely no willpower`, 'smellyRoom')])
        cmd('n', ['no to the poisonous popsicle', () => {
          msg(`“No?” says the pirate, shocked. “As in, NO, you can't resist? Well, here it is!”`)
          msg(`He whips out a used popsicle stick and bellows with laughter. “Why, I'm an old sea calf!” he cries. “I already ate the blasted thing!”`)
          msg(`He then wanders off into the castle.`)
          game.pirateDefeated = true
          go('hallOne')
        }])
      }])
    } else {
      cmd("right", [`enter long hallway`, () => {
        go('hallOne')
      }])
    }
    
  }
  