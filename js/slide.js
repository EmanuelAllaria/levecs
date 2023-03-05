let circle1 = document.querySelectorAll(".slide i")[0]
let circle2 = document.querySelectorAll(".slide i")[1]

let servicioPrincipal = document.querySelector(".servicios_principales")
let servicioSecundario = document.querySelector(".servicios_secundarios")


circle1.onclick = function() {
    return servicioPrincipal.style.display = "flex",
    servicioSecundario.style.display = "none",
    circle1.classList.remove("fa-regular"),
    circle1.classList.add("fa"),
    circle2.classList.add("fa-regular"),
    circle2.classList.remove("fa")
}
circle2.onclick = function() {
    return servicioPrincipal.style.display = "none",
    servicioSecundario.style.display = "flex",
    circle1.classList.add("fa-regular"),
    circle1.classList.remove("fa"),
    circle2.classList.remove("fa-regular"),
    circle2.classList.add("fa")
}