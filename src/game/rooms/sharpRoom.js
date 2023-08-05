
Game.rooms.sharpRoom = () => {
  header(`Room of 10,000 Spikes`)

  desc(`Save for a treacherous walkway, this room is a maze of deadly needle-sharp spikes. Simply tripping in this room could kill you.`)

  setExitsHeader(["up", "down"])

  cmd(
    ["left", "right"],
    [
      `walk into spiky wall`,
      `No acupuncture today, thanks.`,
    ]
  )

  cmd('s', [`Smell spikes`, `It smells like the kind of place where an archaeologist in a movie would die.`])
  cmd('l', ['lick spikes', `You don't need a tongue piercing.`])
  cmd('f', ['feel wall', `Ouch! That's sharp!`])
  cmd("up", [`navigate maze of deadly spikes`, () => go("mirrorsHall")])
  cmd("down", [`navigate maze of deadly spikes`, () => go("entryHall")])


}


