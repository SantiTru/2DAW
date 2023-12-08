var pi = Math.PI;

console.log(pi);

console.log(Math.min(2,3,4,5,6,7,8,9,-10)); //te dice el minimo
console.log(Math.max(2,3,4,5,6,7,8,9,-10)); //te dice el maximo
console.log(Math.round(4.4)); //redondea
console.log(Math.ceil(4.2)); //redondea hacia arriba
console.log(Math.floor(4.9)); //redondea hacia abajo
console.log(Math.pow(2,2)); //potencia
console.log(Math.sqrt(4)); //raiz

var aleatorio = Math.random(); //genera un numero aleatorio
console.log(aleatorio);

function generarNumero(nummeroMaximo) {
  return Math.round(Math.random() * nummeroMaximo); //lo metemos dentro de Math.round para redondear el numero aleatorio
}

console.log(generarNumero(10)); 