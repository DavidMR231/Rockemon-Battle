let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego() {
  let btnSeleccionarMascota = document.getElementById("btn-seleccionar");
  btnSeleccionarMascota.addEventListener("click", seleccionarMascotaJugador);
  let btnFuego = document.getElementById("btn-fuego");
  btnFuego.addEventListener("click", ataqueFuego);
  let btnAgua = document.getElementById("btn-agua");
  btnAgua.addEventListener("click", ataqueAgua);
  let btnTierra = document.getElementById("btn-tierra");
  btnTierra.addEventListener("click", ataqueTierra);
  let btnReiniciar = document.getElementById("btn-volver-jugar");
  let btnTerminar = document.getElementById("btn-terminar");

  btnReiniciar.addEventListener("click", reiniciarJuego);
  btnTerminar.addEventListener("click", terminarJuego);
}

function seleccionarMascotaJugador() {
  let spanMascotaJugador = document.getElementById("mascota-jugador");
  let seleccion = document.getElementById("mascotas");
  let mascotaSeleccionada = seleccion.options[seleccion.selectedIndex].text;
  spanMascotaJugador.innerHTML = mascotaSeleccionada;
  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 8);
  let seleccion = document.getElementById("mascotas");
  let opcionAleatoria = seleccion.options[mascotaAleatoria - 1];
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
  spanMascotaEnemigo.textContent = opcionAleatoria.text;
}

function ataqueFuego() {
  ataqueJugador = "Fuego 🔥";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "Agua 💧";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "Tierra 🌱";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let AtaqueAleatorio = aleatorio(1, 3);
  if (AtaqueAleatorio == 1) {
    ataqueEnemigo = "Fuego 🔥";
  } else if (AtaqueAleatorio == 2) {
    ataqueEnemigo = "Agua 💧";
  } else {
    ataqueEnemigo = "Tierra 🌱";
  }
  combate();
  crearMensaje();
}
function combate() {
  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("Empate");
  } else if (
    (ataqueJugador == "Fuego 🔥" && ataqueEnemigo == "Tierra 🌱") ||
    (ataqueJugador == "Agua 💧" && ataqueEnemigo == "Fuego 🔥") ||
    (ataqueJugador == "Tierra 🌱" && ataqueEnemigo == "Agua 💧")
  ) {
    crearMensaje("GANASTE🏆");
  } else {
    crearMensaje("Perdiste");
  }
  crearMensaje(resultado)
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensaje");

  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Tu mascota atacó con " +
    ataqueJugador +
    ", la mascota del enemigo atacó con " +
    ataqueEnemigo +
    ". " +
    resultado;

  sectionMensajes.appendChild(parrafo);
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function reiniciarJuego() {
  // Lógica para reiniciar el juego
}

function terminarJuego() {
  // Lógica para terminar el juego
}

document.addEventListener("DOMContentLoaded", iniciarJuego);
