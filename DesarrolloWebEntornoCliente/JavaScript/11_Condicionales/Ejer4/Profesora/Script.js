//ZONA DE DECLARACIÓN DE VARIABLES Y CARGA DEL DOM

const btnPrecio = document.querySelector("#btnPrecio");
const inputMarca = document.querySelector("#marca");
const salidaPrecio = document.querySelector("#precio");

//ZONA DE EVENTOS

btnPrecio.addEventListener("click", () => {
  calcularPrecio();
});

//MAIN

//FUNCIONES

function calcularPrecio() {
  let salida = "";
  if (todo_ok()) {
    let entradaDatos = String(inputMarca.value);
    entradaDatos = entradaDatos.trim().toUpperCase();
    switch (entradaDatos) {
      case "FORD FIESTA":
        salida = "El precio es 10000";
        break;
      case "FORD FOCUS":
        salida = "El precio es 15000";
        break;
      case "FORD FOCUS PLUS":
        salida = "El precio es 20000";
        break;
      case "FORD FOCUS STANDARD":
        salida = "El precio es 40000";
        break;
      case "AUDI A4":
        salida = "El precio es 10000";
        break;
      case "AUDI A6":
        salida = "El precio es 15000";
        break;
      case "AUDI A8":
        salida = "El precio es 20000";
        break;
      case "AUDI Q7":
        salida = "El precio es 40000";
        break;
      case "PEUGEOT 206":
        salida = "El precio es 10000";
        break;
      case "PEUGEOT 306":
        salida = "El precio es 15000";
        break;
      case "CITROEN C4":
        salida = "El precio es 20000";
        break;

      case "KIA SPORTAGE":
        salida = "El precio es 40000";
        break;

      default:
        salida = "Marca no registrada";
    }
  } else {
    console.log("No ha pasado el control de errores");
    salida = "cadena vacía";
  }
  escribirDom(salidaPrecio, salida);
}

function escribirDom(componente, msg) {
  componente.textContent = msg;
}

function todo_ok() {
  let valor = inputMarca.value;
  if (String(valor).trim()) {
    return true;
  } else {
    return false;
  }
}
