

function desc(roomDesc) {
  game.desc = roomDesc
}


function look() {
  refresh()
  msg(game.header, 'room')
  msg(game.desc)
  handleThingsDesc(game.things)
  handleItemsDesc()
  if (game.item) {
    const item = game.items[game.item]
    msg(`You're carrying a ${item.shortDesc}.`)
  }
}


function setExitsHeader(exits) {
  if (exits) {
    if (game.directionsReversed) {
      exits = exits.map(command => {
        if (command === 'left') {
          return 'right'
        } else if (command === 'right') {
          return 'left'
        } else if (command === 'up') {
          return 'down'
        } else if (command === 'down') {
          return 'up'
        }
      })
    }
    game.headerExits = exits
    .sort()
    .map((e) => {
      switch (e) {
        case "up":
        return "↑"
        case "left":
        return "←"
        case "right":
        return "→"
        default:
        return "↓"
      }
    })
    .join(' ')
  } else {
    game.headerExits = undefined
  }
}


