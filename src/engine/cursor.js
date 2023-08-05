
function addCursor() {
    const container = document.createElement('div')
    const cursor = document.createElement('div')
    container.id = 'parser'
    container.classList = 'parser res'
    cursor.className = 'cursor'
    cursor.innerHTML = '▌'
    container.append("> ")
    container.append(cursor)
    const con = document.getElementById('con')
    con.append(container)
    window.scrollTo(0, con.scrollHeight)
}

function repCursor(text) {
    const container = document.getElementById('parser')
    const cursor = document.createElement('div')
    cursor.className = 'cursor'
    cursor.append('▌')
    container.innerHTML = ''
    container.append("> ")
    container.append(text)
    container.append(cursor)
    const con = document.getElementById('con')
    window.scrollTo(0, con.scrollHeight)
}


function remCursor() {
    const containers = [...document.getElementsByClassName('parser')]
    for (const c of containers) {
        c.remove()
    } 
}
