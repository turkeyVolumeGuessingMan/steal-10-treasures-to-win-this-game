

function handleThingsCommands(thingCollection) {
  const omit = ["desc", "active", "location"]

  const things = Object.keys(thingCollection)

  things.map((thingName) => {
    const thing = thingCollection[thingName]
    if (thing.location === game.location) {
      const commands = Object.keys(thing).filter((t) => omit.indexOf(t) === -1)

      commands.map(c => {
        if (c.indexOf(' ') > -1) {
          const commandArray = c.split(' ')
          cmd(commandArray, thing[c])
        } else {
          cmd(c, thing[c])
        }
      })
    }
  })
}


function handleThingsDesc(thingCollection) {

    const things = Object.keys(thingCollection)

    things.map(thingName => {

        const thing = thingCollection[thingName]
        if (thing.location === game.location) {

            if (thing.desc) {
                msg(thing.desc, 'con')
            }

        }

    })

}


