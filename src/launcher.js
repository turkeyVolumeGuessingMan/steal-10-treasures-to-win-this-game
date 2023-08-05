
var game = {};

const resetGame = () => {
  game = null
  game = {...Game}
  remCursor()
  setItems()
  intro()
  go('startRoom')
  addCursor()
}

const cleanUpKey = (key) => {
  if (key === 'inv') {
    return 'period'
  } else if (key === 'help') {
    return '?'
  } else if (key === 'score') {
    return '$'
  } else if (key === 'credits') {
    return ';'
  } else if (key === 'music') {
    return '#'
  } else {
    return key
  }
}


const performMusicToggle = () => {
  if (!game.musicToggle) {
    game.musicToggle = true
    msu()
    msg(`Music on.`)
  } else {
    game.musicToggle = false
    if (game.music) {
      game.music.pause()
      game.music = null
    }
    msg(`Music off.`)
  }
}


window.addEventListener("load", () => {
  fullCommand = null
  response = null
  cmdKey = null
  resetGame()
  window.addEventListener('keydown', ev => {
    ev.preventDefault()
  })
  window.addEventListener('keyup', ev => {
    let key = ev.key.toLowerCase()
    if (key === ' ') {
      key = 'space'
    } else if (key === '#') {
      key = 'music'
    } else if (key === '?') {
      key = 'help'
    } else if (key === '$') {
      key = 'score'
    } else if (key === ';') {
      key = 'credits'
    } else if (key === 'backspace' || key === 'delete') {
      if (cmdKey) {
        key = ''
        fullCommand = null
        response = null
        cmdKey = null
        remCursor()
        addCursor()
      }
    } else if (key === '.') {
      key = 'inv'
    } else if (key === 'arrowleft') {
      key = 'left'
    } else if (key === 'arrowright') {
      key = 'right'
    } else if (key === 'arrowup') {
      key = 'up'
    } else if (key === 'arrowdown') {
      key = 'down'
    } 
    if (key) {
      if (key !== 'enter') {
        if (key in game.commands) {
          [fullCommand, response] = game.commands[key]
          repCursor(fullCommand)
          cmdKey = key
        }
      }
      if (response && key === 'enter') {
        remCursor()
        msg(`<div>> ${fullCommand}</div><div>(${cleanUpKey(cmdKey)} key)</div>`, "res spaced")
        if (typeof response === "string") {
          msg(response)
        } else {
          response()
        }
        game.turns += 1
        addCursor()
        updateHeaderBar()
        fullCommand = null
        response = null
        cmdKey = null
      }
    }
    if (key === 'credits') {
      fullCommand = 'display credits'
      response = printCredits
      cmdKey = ';'
      repCursor(fullCommand)
      cmdKey = key
    } else if (key === 'music') {
      fullCommand = 'toggle music'
      response = performMusicToggle
      cmdKey = '%'
      repCursor(fullCommand)
      cmdKey = key
    }
  })
})
