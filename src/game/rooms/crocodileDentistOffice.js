
Game.rooms.crocodileDentistOffice = () => {
  header(`Crocodile Dentist Office`)
  
  desc(`Soft jazz plays from a quiet speaker overhead, inoffensive as the white fluorescent lights and 
  the stack of ancient magazines on the table.`)
  
  setExitsHeader(["right", "left"])
  
  cmd('l', [`taste office`, `Umm, no.`])
  cmd('f', ['feel wall', `You're the touchy-feely type, aren't you?`])
  
  cmd('s', [`smell office`, `It smells of novocaine.`])
  cmd('r', [`read very old magazines`, `Nah, you did that word jumble back in 1983.`])
  
  
  if (game.whistle) {
    cmd('w', ['blow whistle', () => {
      msg(`The owl appears, sees the crocodile dentist, and flaps away terrified!`)
    }])
  }
  if (game.pepper) {
    cmd('g', [`grind pepper`, `“Mmmm,” says the crocodile dentist, licking his considerable chops. “My lunch has seasoned itself!”`])
  }
  
  cmd(
    ["down", "up"],
    [
      `find wall with my nose`,
      `You found it! You can't go that way.`,
    ]
    )
    
    cmd("left", [`exit crocodile dentist office`, () => go("mazeEntrance")])
    cmd("right", [`exit crocodile dentist office`, () => kill(`The crocodile dentist devours you as you attempt to pass! As he eats you, you decide he could definitely improve his flossing technique.`, `Never smile at a crocodile`, 'crocodileDentistOffice')])
  }
  
  