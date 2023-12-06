let ataquejugador = function iniciarjuego() {
  let btnSeleccionarMascota = document.getElementById("btn-seleccionar");
  btnSeleccionarMascota.addEventListener("click", seleccionarMascotaJugador);
  let btnFuego = document.getElementById("btn-fuego");
  btnFuego.addEventListener("click", ataqueFuego);
  let btnAgua = document.getElementById("btn-agua");
  btnAgua.addEventListener("click", ataqueAgua);
  let btnTierra = document.getElementById("btn-tierra");
  btnTierra.addEventListener("click", atagueTierra);
};

function seleccionarMascotaJugador() {
  let spanMascotaJugador = document.getElementById("mascota-jugador");
  let seleccion = document.getElementById("mascotas");
  let mascotaSeleccionada = seleccion.options[seleccion.selectedIndex].text;
  spanMascotaJugador.innerHTML = mascotaSeleccionada;
  seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo() {
  let ataquealeatorio = aleatorio(1, 8);
  let seleccion = document.getElementById("mascotas");
  let opcionAleatoria = seleccion.options[ataquealeatorio - 1];
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
  spanMascotaEnemigo.textContent = opcionAleatoria.text;
}
function ataqueFuego() {
  ataquejugador = "Fuego";
}
function ataqueAgua() {
  ataquejugador = "Agua";
}
function ataqueTierra() {
  ataquejugador = "Tierra";
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let btnReiniciar = document.getElementById("btn-volver-jugar");
let btnTerminar = document.getElementById("btn-terminar");

document.addEventListener("DOMContentLoaded", iniciarjuego);
