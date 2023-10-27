/* Crea un programa que pida una marca de coche:
Si la marca de coche es Peugeot devolverá 15000€ y si es C4 pues devolverá 20000€.
Da igual que lo meta en mayúscula, el sistema tiene que sacar su precio.
Se ha de hacer con switch-case: */

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Agregar un event listener al botón
  document.getElementById("precio").addEventListener("click", function () {
    // Obtener el valor del input
    let marca = document.getElementById("marcaIntroducida").value.toLowerCase();

    // Inicializar una variable para almacenar el precio
    let precio = 0;

    // Utilizar un switch-case para determinar el precio
    switch (marca) {
      case "peugeot 206":
        precio = 15000;
        break;
      case "citroen c4":
        precio = 20000;
        break;
      case "ford focus":
        precio = 40000;
        break;
      case "ford escort":
        precio = 50000;
        break;
      case "ford mustang":
        precio = 60000;
        break;
      case "kia sportage":
        precio = 80000;
        break;
      case "kia optima":
        precio = 100000;
        break;
      default:
        // Manejo de error si la marca no es reconocida
        alert("Marca de coche desconocida");
    }

    // Comprobar si se ingresó una marca y mostrar el precio si es el caso
    if (precio > 0) {
      alert(`El precio del coche ${marca.toUpperCase()} es de ${precio}€.`);
    } else {
      // Manejo de error si no se ingresó una marca
      alert("No se ingresó una marca de coche.");
    }
  });
});
