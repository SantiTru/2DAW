/* Versión mejorada de la clase anterior, en la que vamos a meter nuestros dos coches en un
array de objetos, de tal forma que para obtener un objeto coche de ese array conoceremos
la función filter, super interesante en los arrays.*/

"use strict";

// Definir un array de objetos con la información de los coches
const coches = [
  { marca: "peugeot 206", precio: 15000 },
  { marca: "citroen c4", precio: 22000 },
  { marca: "ford focus", precio: 30000 },
  { marca: "ford escort", precio: 35000 },
  { marca: "ford mustang", precio: 50000 },
  { marca: "kia sportage", precio: 28000 },
  { marca: "kia optima", precio: 35000 },
];

document.addEventListener("DOMContentLoaded", function () {
  // Agregar un event listener al botón
  document.getElementById("precio").addEventListener("click", function () {
    // Obtener el valor del input
    let marca = document.getElementById("marcaIntroducida").value.toLowerCase();

    // Utilizar la función filter para encontrar el objeto coche
    const cocheEncontrado = coches.find(coche => coche.marca === marca);

    if (cocheEncontrado) {
      // Mostrar el precio si se encontró el coche
      alert(`El precio del coche ${marca.toUpperCase()} es de ${cocheEncontrado.precio}€.`);
    } else {
      // Manejo de error si la marca no es reconocida
      alert("Marca de coche desconocida");
    }
  });
});