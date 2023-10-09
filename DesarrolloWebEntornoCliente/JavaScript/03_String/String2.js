//Vale, vamos ahora a ver la propiedad lenght

let producto4 = "Monitor 20 pulgadas";
let producto5 = String("Monitor 24 pulgadas");
let producto6 = new String("Monitor 27 pulgadas");

console.log(producto4.length)

//Metodo INCLUDE

console.log(producto4.includes("Monitor"));
console.log(producto4.includes("monitor"));
console.log(producto4.includes("mono"));

//Metodo IndexOf

console.log(producto5.indexOf("p"));
console.log(producto4.indexOf("m"));
console.log(producto4.indexOf("2"));
console.log(producto4.indexOf("z"));

