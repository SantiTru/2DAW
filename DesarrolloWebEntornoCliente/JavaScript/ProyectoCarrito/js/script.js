// script.js

// Variable para almacenar el carrito
let carrito = [];
let cursos = []; 

document.addEventListener("DOMContentLoaded", function () {
  const jsonUrl = "data/cursos.json";

  fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
      cursos = data; // Asigna los cursos a la variable global
      cargarCursos(cursos);
    })
    .catch(error => console.error("Error al cargar el JSON:", error));

  // Verifica si hay cursos en el LocalStorage al cargar la página
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    actualizarCarrito();
  }

  // Agrega el event listener para el clic en los enlaces "Agregar Al Carrito"
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("agregar-carrito")) {
      event.preventDefault(); // Evita que el formulario se envíe y recargue la página
      const cursoId = event.target.dataset.id;
      agregarAlCarrito(cursoId);
    }
  });

  // Agrega el event listener para el clic en el enlace "Vaciar Carrito"
  document.getElementById("vaciar-carrito").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página
    vaciarCarrito();
  });
});

function cargarCursos(cursos) {
  const listaCursos = document.getElementById("lista-cursos");
  const cursosPorFila = 3;

  for (let i = 0; i < cursos.length; i += cursosPorFila) {
    const filaCursos = cursos.slice(i, i + cursosPorFila);

    const filaElemento = document.createElement("div");
    filaElemento.className = "row";

    filaCursos.forEach(curso => {
      const cursoElement = document.createElement("div");
      cursoElement.className = "four columns";
      cursoElement.innerHTML = `
        <div class="card">
          <img src="${curso.src}" class="imagen-curso u-full-width" />
          <div class="info-card">
            <h4>${curso.titulo}</h4>
            <p>${curso.autor}</p>
            <img src="img/estrellas.png" />
            <p class="precio">${curso.precioAlto} <span class="u-pull-right">${curso.precioBajo}</span></p>
            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="${curso.id}">Agregar Al Carrito</a>
          </div>
        </div>
      `;

      filaElemento.appendChild(cursoElement);
    });

    listaCursos.appendChild(filaElemento);
  }
}

//function agregarAlCarrito(id) {
//  const cursoSeleccionado = cursos.find(curso => curso.id === id);
//  carrito.push(cursoSeleccionado);
//  actualizarCarrito();
//  localStorage.setItem("carrito", JSON.stringify(carrito));
//}
function agregarAlCarrito(id, nombre, precio) {
  const cursoExistente = carrito.find(curso => curso.id === id);

  if (cursoExistente) {
      // Incrementar la cantidad si el curso ya está en el carrito
      cursoExistente.cantidad++;
  } else {
      // Agregar nuevo curso al carrito si no existe
      const imagenCurso = document.querySelector(`.agregar-carrito[data-id="${id}"]`).closest('.card').querySelector('.imagen-curso');
      const imagen = imagenCurso ? imagenCurso.src : ''; // Obtener la URL de la imagen
      carrito.push({ id, nombre, precio, cantidad: 1, imagen });
  }
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
  localStorage.removeItem("carrito");
}

function actualizarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  const totalCarrito = document.getElementById("total-carrito");

  if (totalCarrito) { // Verifica que totalCarrito no sea nulo
    listaCarrito.innerHTML = ""; // Vacía el contenido del <tbody>

    carrito.forEach(curso => {
      const filaCurso = document.createElement("tr");

      const columnaImagen = document.createElement("td");
      columnaImagen.innerHTML = `
        <img src="${curso.src}" width="50" />
      `;

      const columnaTitulo = document.createElement("td");
      columnaTitulo.innerHTML = curso.titulo;

      const columnaPrecio = document.createElement("td");
      columnaPrecio.innerHTML = curso.precioBajo;

      const columnaCantidad = document.createElement("td");
      columnaCantidad.innerHTML = "1";

      const columnaEliminar = document.createElement("td");
      columnaEliminar.innerHTML = `
        <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
      `;

      filaCurso.appendChild(columnaImagen);
      filaCurso.appendChild(columnaTitulo);
      filaCurso.appendChild(columnaPrecio);
      filaCurso.appendChild(columnaCantidad);
      filaCurso.appendChild(columnaEliminar);

      // Inserta el nuevo curso al principio del <tbody>
      listaCarrito.insertBefore(filaCurso, listaCarrito.firstChild);
    });

    const total = carrito.reduce((acc, curso) => acc + parseInt(curso.precioBajo.slice(1)), 0);
    totalCarrito.textContent = `$${total}`;
  }
}

function eliminarCurso(id) {
  const curso = carrito.find(curso => curso.id === id);
  carrito.splice(carrito.indexOf(curso), 1);
  actualizarCarrito();
  localStorage.setItem("carrito", JSON.stringify(carrito));
}