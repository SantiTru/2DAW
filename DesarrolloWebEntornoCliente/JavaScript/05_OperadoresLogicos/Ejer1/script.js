"use strict";

function fiesta() {
  const edad = parseInt(document.getElementById("edad").value);

  if (isNaN(edad) || edad <= 0) {
    alert("Hazme el favor de poner una edad lógica en el formulario, criatura");
    reset();
  } else {
    // Evaluar si puede beber alcohol (mayores de 18 años)
    const puedeBeber = edad >= 18;
    document.getElementById("respuestaEdad").innerText = puedeBeber
      ? "Legalmente puedes beber, otra cosa es que sea bueno para ti."
      : "No puedes beber, espera a tener 18 años.";

    // Evaluar si puede ingresar a la fiesta (entre 18 y 99 años)
    const puedeIngresarFiesta = edad >= 18 && edad <= 99;
    document.getElementById("respuestaEntrada").innerText = puedeIngresarFiesta
      ? "Puedes entrar a la fiesta, ¡disfruta!"
      : "Niñe, ¿Donde están tus padres?";

    // Evaluar si tiene entrada gratis (entre 37 y 99 años)

    const entradaGratis = edad >= 37 && edad <= 99;
    if (edad <= 17) {
      document.getElementById("respuestaGratis").innerText = entradaGratis
        ? "Niñe, que no puedes pasar..."
        : "Niñe, que no puedes pasar...";
    } else {
      document.getElementById("respuestaGratis").innerText = entradaGratis
        ? "¡Entras gratis! A tu edad, cada día es un regalo."
        : "No tienes entrada gratis... paga, primer aviso.";
    }
  }
}
function reset(){
  document.getElementById("respuestaEdad").innerHTML="";
  document.getElementById("respuestaEntrada").innerHTML="";
  document.getElementById("respuestaGratis").innerHTML="";
}
