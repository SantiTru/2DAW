let numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12];
let totalSuma = 0;
let totalSumaPares = 0;


/* quiero recorrer el array y sumar solo los numeros pares*/
numeros.forEach(pares => {
  if (pares % 2 == 0) {
    console.log(pares);
  }
});


numeros.forEach(suma => {
  
    totalSuma += suma;
  
});
console.log("El total sumado de todos los números es: " + totalSuma);

numeros.forEach(sumaPares => {
  if (sumaPares % 2 == 0) {
    totalSumaPares += sumaPares;
  }
});
console.log("El total de los números pares es: " + totalSumaPares);