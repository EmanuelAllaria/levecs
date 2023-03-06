const slider = document.getElementById("slider");
const images = document.querySelectorAll(".slider div");

// Muestra la imagen seleccionada por el slider
slider.oninput = function() {
  // Oculta todas las imágenes
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }
  // Muestra la imagen seleccionada por el slider
  images[this.value - 1].classList.add("active");
}
