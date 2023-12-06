function iniciarjuego() {
  let btnSeleccionarMascota = document.getElementById("btn-seleccionar");
  btnSeleccionarMascota.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  let spanMascotaJugador = document.getElementById("mascota-jugador");
  let seleccion = document.getElementById("mascotas");
  let mascotaSeleccionada = seleccion.options[seleccion.selectedIndex].text;
  spanMascotaJugador.innerHTML = mascotaSeleccionada;
  seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo() {
  let ataquealeatorio = aleatorio(1,8)
  let seleccion = document.getElementById("mascotas");
  let opcionAleatoria = seleccion.options[ataquealeatorio - 1];
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
  spanMascotaEnemigo.textContent = opcionAleatoria.text;
}

// Función para generar un número aleatorio en un rango dado
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let btnReiniciar = document.getElementById("btn-volver-jugar");
let btnTerminar = document.getElementById("btn-terminar");

document.addEventListener("DOMContentLoaded", iniciarjuego);
