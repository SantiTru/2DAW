//3 formas de declarar un String

let producto1 = "Monitor 20 pulgadas";
let producto2 = String("Monitor 24 pulgadas");
let producto3 = new String("Monitor 27 pulgadas");

console.log(producto1);
console.log(producto2);
console.log(producto3);

//Ahora vamos a ver una de las utilidades de usar comillas simples

producto1 = 'Monitor de 20 "';
console.log(producto1);

//Ahora vamos a ver la forma de usar dobles comillas dentro de otras dobles comillas con el escape

producto1 = "Monitor de 20\" ";
console.log(producto1);

