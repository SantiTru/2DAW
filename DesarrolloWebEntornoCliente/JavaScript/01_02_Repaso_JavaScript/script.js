//PRUEBA DE PROMPT Y MOSTRAR POR CONSOLA

alert("Hola mundo");
let entrada_datos = prompt("Ingrese su nombre");
console.log("te llamas: " + entrada_datos);
console.log(`te llamas: ${entrada_datos}`);

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

let docente = "Rocío López";
let curso = "DAW";
let docente_curso = docente + " profesora de " + curso;
console.log(docente_curso);

let docente_curso2 = `${docente} profesora de ${curso}`;
console.log(docente_curso2);

//SELECCIONAR ELEMENTOS DEL DOM

let cursoDAW = document.getElementById("cursoDAW");
cursoDAW.innerHTML = `
<h2>Estamos modificando este div</h2>
<h3>profesora: ${docente}</h3>
`;

let cursoDAW2 = document.querySelector("#cursoDAW2");
cursoDAW2.innerHTML = `
<h2>Estamos modificando este div también</h2>
<h3>curso: ${curso}</h3>
`;

//IF ELSE

let cicloDAW = document.querySelector("#cicloDAW");
let existe_cicloDAW = true;

if (existe_cicloDAW) {
  cicloDAW.innerHTML = "<h3>tenemos plazas</h3>";
} else {
  cicloDAW.innerHTML = "<h3>no tenemos plazas</h3>";
}

//ACUMULANDO VALORES

let informacion = document.querySelector("#informacion");
informacion.innerHTML = "<h2>información Campanillas</h2>";
informacion.innerHTML += `
<h4>Entre los profesores, uno de ellos es: ${docente}</h4>
<h4>El curso es: ${curso} </h4>
`;
let saludo = "<h3>Hola estudiante</h3>";
imprimirHTML(informacion, saludo);
imprimirHTML2();

//FUNCIONES

function imprimirHTML(contenedor, mensaje) {
  contenedor.innerHTML += mensaje;
}

function imprimirHTML2() {
  informacion.innerHTML += `
   <h3>Hola que tal?, soy ${docente}</h3>
   `;
}
