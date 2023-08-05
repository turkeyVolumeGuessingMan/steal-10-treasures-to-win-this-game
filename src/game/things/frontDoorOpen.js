
Game.things.frontDoorOpen = {
    location: '',
    desc: `The front door is open, leading in the castle.`,
    x: ['examine door', `The door is open, beckoning entry.`],
    i: ['enter door', () => go('entryHall')],
    up: ['enter door', () => go('entryHall')],
}
