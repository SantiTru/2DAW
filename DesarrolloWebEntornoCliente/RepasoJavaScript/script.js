/*
PRUEBA DE PROMPT Y MOSTRAR POR CONSOLA
alert("Hola mundo");
let entrada_datos = prompt("Ingrese su nombre");
console.log("te llamas: " + entrada_datos);
console.log(`te llamas: ${entrada_datos}`);
*/
//Variables

let saludar = "Hola";
if (true) {
  saludar = "Adios mundo cruel";
  console.log(saludar);
}
console.log(saludar);

const numeroPi = 3.14;
console.log(numeroPi);

/*
NO ES POSIBLE ASIGNAR VARIABLES A CONSTANTES
numeroPi = 3.15;
console.log(numeroPi);
*/

let docente = "Rocio Lopez";
let curso = "DAW";
let docente_curso = docente + " profesora de " + curso;
console.log(docente_curso);

let docente_curso2 = `${docente} profesora de ${curso}`;
console.log(docente_curso2);

