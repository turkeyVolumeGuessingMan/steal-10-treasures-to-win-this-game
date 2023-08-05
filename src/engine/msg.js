
function msg(txt, classList) {

    const checkForBoxChars = (inp) => {
        lst = inp.split('~')
        const first = lst.shift()
        const rest = lst.map(l => {
            const chr = l.slice(0, 1)
            return [`<span class="key">${chr}</span>`, l.slice(1)].join('')
        })
        return [first, ...rest].join('')
    }
    
    const con = document.getElementById('con')
    if (con) {
        const e = document.createElement('div')
        if (classList) {
            e.classList = classList
        } else {
            e.className = "sep"
        }
        txt = checkForBoxChars(txt)
        e.innerHTML = txt
        con.append(e)
        window.scrollTo(0, con.scrollHeight)
    }

}


function spacer() {

    msg('', 'spacer')

}


function bigSpacer() {

    msg('', 'big-spacer')

}


function clear() {

    const con = document.getElementById('con')
    if (con) {
        con.innerHTML = ''
    }

}
