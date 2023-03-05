let bars = document.querySelector(".fa-bars")

let nav = document.querySelector(".nav")

let click = 2

bars.onclick = function() {
    click++

    if (click > 2) {
        click = 1
    }

    if (click == 1) {
        nav.style.display = "block"
    } else {
        nav.style.display = "none"
    }
}