
Game.rooms.startRoom = () => {

    header(`In the Forest`)

    desc(`At the edge of the woods under bright moonlight stands a vast crumbling castle. A winding path
    meanders ahead to the front door. Near the path is a large friendly sign.`)


    setExitsHeader(['up'])

    cmd('c', ['climb tree', `You climb a tree to find a fabulous jeweled egg with—ha! Just kidding. There's nothing up the trees.`])
    cmd('s', ['sniff air', `The air smells of leaves after a fresh rain.`])
    cmd('l', ['lick trees', `Mmm, barky.`])
    cmd('f', ['feel trees', `Feels like trees.`])
    cmd('j', ['jump', `You jump just hard enough to shake a few lower branches.`])
    cmd(['down', 'left', 'right'], ['traverse forest', `What? When there's a castle full of treasure just waiting ahead?`])
    cmd('up', [`follow path`, () => go('frontDoor')])

}
