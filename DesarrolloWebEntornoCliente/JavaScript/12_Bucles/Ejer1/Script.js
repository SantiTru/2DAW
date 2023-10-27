const carrito = [
  { nombre: "TV", precio: 500 },
  { nombre: "Libro", precio: 10 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Lavadora", precio: 300 },
  { nombre: "Teclado", precio: 40 },
  { nombre: "Movil", precio: 700 },
];

console.table(carrito);

mostrarcarrito_for();
mostrarcarrito_while();
mostrarcarrito_dowhile();

// for

function mostrarcarrito_for() {
  console.log("Bucle For");
  for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
  }
}

// while

function mostrarcarrito_while() {
  let pos = 0;
  console.log("Bucle While");
  while (pos < carrito.length) {
    console.log(carrito[pos].nombre);
    pos++;
  }
}

//Do-while

function mostrarcarrito_dowhile() {
  let pos = 0;
  console.log("Bucle Do-While");
  do {
    console.log(carrito[pos].nombre);
    pos++;
  } while (pos < carrito.length);
}
