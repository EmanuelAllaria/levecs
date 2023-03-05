let botones = document.querySelectorAll(".secciones a")

let galeria = document.querySelectorAll(".galeria img")

let img1 = document.querySelector("img.wireless")
let img2 = document.querySelector("img.rut_switch")
let img3 = document.querySelector("img.admin_trafic")
let img4 = document.querySelector("img.seguridad_datos")
let img5 = document.querySelector("img.voip")
let img6 = document.querySelector("img.byod")
let img7 = document.querySelector("img.conferencia")
let img8 = document.querySelector("img.telepresencia")
let img9 = document.querySelector("img.call_center")
let img10 = document.querySelector("img.serv_nube")
let img11 = document.querySelector("img.sol_hibrida")
let img12 = document.querySelector("img.data_center")
let img13 = document.querySelector("img.computo")
let img14 = document.querySelector("img.admin_proyectos")
let img15 = document.querySelector("img.mesa_servicio")

// galeria.forEach(e => {
//     console.log(e)
// });

let todos = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15]

let instaMante = [img1,img2,img3,img4,img5,img6]

let sopTec = [img7,img8,img9,img10,img11,img12,img13]

let consCapa = [img14,img15]

botones[0].onclick = function() {
    todos.forEach(e => {
        e.style.display = "block"
    });
}

botones[1].onclick = function() {
    todos.forEach(e => {
        e.style.display = "none"
    });
    instaMante.forEach(e => {
        e.style.display = "block"
    });
}

botones[2].onclick = function() {
    todos.forEach(e => {
        e.style.display = "none"
    });
    sopTec.forEach(e => {
        e.style.display = "block"
    });
}

botones[3].onclick = function() {
    todos.forEach(e => {
        e.style.display = "none"
    });
    consCapa.forEach(e => {
        e.style.display = "block"
    });
}