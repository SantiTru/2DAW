'use strict'
let numero = 11;
let string1 = "hola mundo";
let string2 = "HOLA QUE TAL?";

//CONVERSIONES

console.log(numero.toString());
console.log(typeof(numero));
console.log(typeof(numero.toString()));

//CONVERSION A MAYUSCULAS

console.log(string1.toUpperCase());
console.log(string2.toLowerCase());

//CALCULAR LONGUITUD

console.log(string1.length);

//CONCATENAR

console.log(string1 + " " + string2);
console.log(string1.concat("Aqui estoy ", string2));

//METODOS DE BUSQUEDA IndexOf and Search

console.log(string1.indexOf("mundo"));
console.log(string1.indexOf("kk"));
console.log(string1.search("und"));
console.log(string1.search("kk"));
console.log(string1.lastIndexOf("mundo"));

//METODOS DE BUSQUEDA QUE DEVUELVE UN ARRAY CON LAS COINCIDENCIAS

console.log(string1.match(/mundo/));

//METODOS DE BSUQUESDA SUBSTRING

let string3 ="que tal va por alli"; 
console.log("que tal va por alli" + string3.substring(5,10));
console.log(string3.charAt(1));

//METODO INCLUDE

console.log(string3.includes("tal"));
console.log(string3.includes("kk"));
console.log(string3.includes("ho"));
console.log(string3.startsWith("que"));
console.log(string3.endsWith("por"));

//METODOS DE REEMPLAZO

console.log(string3.replace("Hola","Adios"));

//METODO PARA QUITAR ESPACIOS

let correo = "  strunav@g.eduaand.es"
console.log(correo.length);
console.log(correo.trim().length);

//METODO DE CONVERSIÓN A ARRAY CUANDO HAY UN DELIMITADOR COMUN

let var1 = "hola,mundo,como,estas";
let var2 = "15-45-56-67-78-89";
console.log(var1.split(","));
console.log(var2.split("-"));
let array_numeros =var2.split("-");
console.log(array_numeros[2]);


