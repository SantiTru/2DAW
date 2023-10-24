const prompt = require("prompt-sync")();

let edad1 = Number.parseInt(prompt("dame tu edad: "));
let edad2 = Number.parseInt(prompt("dame tu edad: "));

comprobando_edad(edad1, edad2);

function comprobando_edad(par1, par2) {
  if (par1 > par2) {
    console.log("La primera personita es mayor");
  } else if (par2 > par1) {
    console.log("La segunda personita es mayor");
  } else {
    console.log("Teneis la misma edad");
  }
}
