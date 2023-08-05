
Game.rooms.roseGarden = () => {
  header(`Rose Garden`)

  const opened = (game.dragonValve) ? 'open' : 'shut';

  desc(`A thick bramble of roses hedges up against the castle wall, which looms dark in the thin rays of the moon.
  On the wall is a valve next to a large exhaust pipe, which is ${opened}.`)

  setExitsHeader(["left", "down", "right"])

  cmd(
    ["up"],
    [
      `walk into rose bush`,
      `A few cuts from the thorns and you decide to take a different course of action.`,
    ]
  )
  
  cmd('s', ['sniff air', () => {
    if (!game.dragonValve) {
      msg(`Mmmm. Roses and night air.`)
    } else {
      msg(`The air smells vaguely of sulfur and dragon-breath.`)
    }
  }])
  cmd('l', ['lick roses (with my tongue)', `You're no aphid.`])
  cmd('f', ['feel roses', `They feel thorny.`])
  cmd('b', [`yell`, () => {
    msg(`AAAAAOOOOUUUIIIIEEE!!`)
    msg(`The roses pay no heed to your cries.`)
  }])

  cmd(['r', 'x'], ['examine exhaust pipe', `It's the kind of valve you have to turn to open.
  Under the pipe you can make out: CAUTION! EXHAUST CAN BE IN EXCESS OF 3000 DEGREES 🔥 IF DRAGON HAS INDIGESTION!`])

  cmd('t', ['turn valve', () => {
    if (!game.dragonValve) {
        msg(`The valve opens and the smell of smoke fills the air.`)
        game.dragonValve = true
    } else {
        msg(`The dragon exhaust valve is now shut.`)
        game.dragonValve = false
    }
  }])

  cmd("down", [`follow path`, () => go("mirrorsHall")])
  cmd("left", [`enter shed`, () => go("toolRoom")])
  cmd("right", [`follow path`, () => go("gardenOfTime")])
}

