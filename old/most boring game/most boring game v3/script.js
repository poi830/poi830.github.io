var n, b, s, m = 0, mn

var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === 'complete') {
        begin()
        clearInterval(readyStateCheckInterval)
    }
}, 10);

function begin() {
    n = document.getElementById('n')
    b = document.getElementById('b')
    mn = document.getElementById('m')
    s = 2
    b.onclick = function() {
        s++
        switch (s) {
            case 1:
                not('You killed the creature! (+1 money)')
                btn('Yay!')
                m++
                mn.innerHTML = m + ' money'
                break;
            case 2:
                not('You look around more.')
                btn('Ok')
                break;
            case 3:
                not('You see a creature!')
                btn('Attack')
                s = 0
        }
    }
}

function not(x) {
    n.innerHTML = x
}

function btn(x) {
    b.innerHTML = x
}