function iniciarjuego() {
  let btnSeleccionarMascota = document.getElementById("btn-seleccionar");
  btnSeleccionarMascota.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  let spanMascotaJugador = document.getElementById("mascota-jugador");
  let seleccion = document.getElementById("mascotas");
  let mascotaSeleccionada = seleccion.options[seleccion.selectedIndex].text;
  spanMascotaJugador.innerHTML = mascotaSeleccionada;
}

let btnReiniciar = document.getElementById("btn-volver-jugar");
let btnTerminar = document.getElementById("btn-terminar");

document.addEventListener("DOMContentLoaded", iniciarjuego);
