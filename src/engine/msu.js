

function msu() {
    if (!game.music && game.musicToggle) {
        const trackList = [
            'Pretty Little Lies',
            'First Snow',
            'Dreams',
            'Plants',
            'Ramen',
            'Endless Grind',
            'City Lights',
            'Winter Blues',
            'Day Trips',
        ]
        game.track = 0
        game.music = new Audio(`HoliznaCC0 - ${trackList[game.track]}.mp3`)
        const playNextTrack = () => {
            game.track += 1
            if (game.track === trackList.length) {
                game.track = 0
            }
            game.music.src = `HoliznaCC0 - ${trackList[game.track]}.mp3`
            game.music.load()
            setTimeout(() => {
                game.music.play()
            }, 2000)
        }
        setTimeout(() => {
            game.music.play()
            game.music.addEventListener('ended', () => {
                playNextTrack()
            }, false)
        }, 3000)
    }
}

