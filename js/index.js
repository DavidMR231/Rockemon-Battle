let ataqueJugador;
let ataqueEnemigo;
let vidasEnemigo = 3;
let vidasJugador = 3;

function iniciarJuego() {
  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "none";
  let sectionReiniciar = document.getElementById("btn-reiniciar");
  sectionReiniciar.style.display = "none";
  let sectionVidasEnemigo =  document.getElementById("vidas-jugador");
  sectionVidasEnemigo.style.display = "none";
  let sectionVidasJugador =  document.getElementById("vidas-enemigo");
  sectionVidasJugador.style.display = "none";
  let sectionNombreJugador =  document.getElementById("nombre-jugador");
  sectionNombreJugador.style.display = "none";
  let sectionNombreEnemigo =  document.getElementById("nombre-enemigo");
  sectionNombreEnemigo.style.display = "none";
  let btnSeleccionarMascota = document.getElementById("btn-seleccionar");
  btnSeleccionarMascota.addEventListener("click", seleccionarMascotaJugador);
  let btnFuego = document.getElementById("btn-fuego");
  btnFuego.addEventListener("click", ataqueFuego);
  let btnAgua = document.getElementById("btn-agua");
  btnAgua.addEventListener("click", ataqueAgua);
  let btnTierra = document.getElementById("btn-tierra");
  btnTierra.addEventListener("click", ataqueTierra);
  let btnReiniciar = document.getElementById("btn-reiniciar");
  btnReiniciar.addEventListener("click", reiniciarJuego);
  let btnTerminar = document.getElementById("btn-terminar");
  btnTerminar.addEventListener("click", terminarJuego);
}

function seleccionarMascotaJugador() {
  let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
  sectionSeleccionarMascota.style.display = "none";
  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "block"
  let sectionVidasEnemigo =  document.getElementById("vidas-jugador");
  sectionVidasEnemigo.style.display = "block";
  let sectionVidasJugador =  document.getElementById("vidas-enemigo");
  sectionVidasJugador.style.display = "block";
  let sectionNombreJugador =  document.getElementById("nombre-jugador");
  sectionNombreJugador.style.display = "block";
  let sectionNombreEnemigo =  document.getElementById("nombre-enemigo");
  sectionNombreEnemigo.style.display = "block";
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
  ataqueJugador = "FUEGO 🔥";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA 💧";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA 🌱";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let AtaqueAleatorio = aleatorio(1, 3);
  if (AtaqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO 🔥";
  } else if (AtaqueAleatorio == 2) {
    ataqueEnemigo = "AGUA 💧";
  } else {
    ataqueEnemigo = "TIERRA 🌱";
  }
  combate();
  crearMensaje();
}

function combate() {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");

  if (vidasEnemigo > 0 && vidasJugador > 0) {
    if (ataqueEnemigo == ataqueJugador) {
      resultado = "Empate";
    } else if (
      (ataqueJugador == "FUEGO 🔥" && ataqueEnemigo == "TIERRA 🌱") ||
      (ataqueJugador == "AGUA 💧" && ataqueEnemigo == "FUEGO 🔥") ||
      (ataqueJugador == "TIERRA 🌱" && ataqueEnemigo == "AGUA 💧")
    ) {
      resultado = "Ganaste";
      vidasEnemigo = vidasEnemigo - 1;
      spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
      resultado = "Perdiste";
      vidasJugador = vidasJugador - 1;
      spanVidasJugador.innerHTML = vidasJugador;
    }
    revisarVidas();
    crearMensaje(resultado);
  }
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("Felicidades ganaste");
  } else if (vidasJugador == 0) {
    crearMensajeFinal("Lo siento. Perdiste");
  }
}
function crearMensaje() {
  let sectionMensajes = document.getElementById("resultado");
  let ataquesJugador = document.getElementById("ataques-jugador");
  let ataquesEnemigo = document.getElementById("ataques-enemigo");

  // Limpiar el contenido existente
  sectionMensajes.innerHTML = "";
  ataquesJugador.innerHTML = "";
  ataquesEnemigo.innerHTML = "";

  sectionMensajes.innerHTML = resultado;
  ataquesJugador.innerHTML = ataqueJugador;
  ataquesEnemigo.innerHTML = ataqueEnemigo;

}

function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("resultados");

  let parrafo = document.createElement("h2");
  parrafo.innerHTML = resultadoFinal;

  sectionMensajes.appendChild(parrafo);

  let btnFuego = document.getElementById("btn-fuego");
  btnFuego.disabled = true;
  let btnAgua = document.getElementById("btn-agua");
  btnAgua.disabled = true;
  let btnTierra = document.getElementById("btn-tierra");
  btnTierra.disabled = true;
  let sectionReiniciar = document.getElementById("btn-reiniciar");
  sectionReiniciar.style.display = "block";
}
function reiniciarJuego() {
  location.reload();
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.addEventListener("DOMContentLoaded", iniciarJuego);
