//ZONA DE CARGA/LECTURA DEL DOM

document.addEventListener("DOMContentLoaded", function () {
  //ZONA DE VARIABLES

  // Array de notas asociadas a cada alumno
  var notasAlumnos = {
    nombre0: [],
    nombre1: [1, 5, 7, 8, 9, 10, 6, 5, 8, 7],
    nombre2: [6, 8, 9, 5, 7, 6, 10, 8, 10, 5],
    nombre3: [7, 5, 6, 8, 3, 7, 9, 5, 6, 8],
    nombre4: [9, 7, 8, 5, 6, 10, 7, 2, 9, 5],
    nombre5: [8, 4, 9, 3, 7, 5, 6, 2, 9, 7],
    nombre6: [],
  };

  var selectNombres = document.getElementById("nombres");
  var listaNotas = document.querySelector(".notas");
  var calcularPromedioBtn = document.getElementById("calcularPromedioBtn");
  var promedioResultado = document.getElementById("promedioResultado");
  var buscarNotaAltaBtn = document.getElementById("buscarNotaAltaBtn");
  var notaAltaResultado = document.getElementById("notaAltaResultado");
  var buscarSuspensoBtn = document.getElementById("buscarSuspensoBtn");
  var suspensoResultado = document.getElementById("suspensoResultado");
  var tituloCargaBtn = document.getElementById("tituloCargaBtn");
  var cargaNotasBtn = document.getElementById("cargaNotasBtn");
  var tituloResetBtn = document.getElementById("tituloResetBtn");
  var resetBtn = document.getElementById("resetBtn");

  //ZONA DE EVENTOS

  resetBtn.disabled = true;
  resetBtn.hidden = true;
  tituloCargaBtn.hidden = true;
  cargaNotasBtn.disabled = true;
  cargaNotasBtn.hidden = true;
  tituloResetBtn.hidden = true;

  // Agregar un evento de cambio al elemento select
  selectNombres.addEventListener("change", mostrarNotas);

  // Agregar un evento al botón calcularPromedio
  calcularPromedioBtn.addEventListener("click", calcularYMostrarPromedio);

  // Agregar un evento al botón BuscarNotaAltaBtn
  buscarNotaAltaBtn.addEventListener("click", buscarYMostrarNotaAlta);

  // Agregar un evento al botón BuscarSuspensoBtn
  buscarSuspensoBtn.addEventListener("click", buscarYMostrarSuspenso);

  //ZONA DE FUNCIONES
  //ZONA DE DECLARACIÓN DE FUNCIONES

  // Función para mostrar las notas del alumno seleccionado
  function mostrarNotas() {
    // Restablecer el contenido de los resultados al cambiar de alumno
    promedioResultado.textContent = "";
    suspensoResultado.textContent = "";
    notaAltaResultado.textContent = "";

    var nombreSeleccionado = selectNombres.value;
    var notas = notasAlumnos[nombreSeleccionado] || [];

    // Verificar si hay notas para mostrar
    if (notas.length === 0) {
      alert("No hay notas para mostrar.");
      var sinNotas = document.createElement("h2");
      sinNotas.textContent = "No hay notas para mostrar...";

      listaNotas.innerHTML = "";
      //ZONA DE ESCRITURA DEL DOM
      listaNotas.appendChild(sinNotas);
      return;
    }

    // Limpiar la lista de notas antes de mostrar nuevas notas
    listaNotas.innerHTML = "";

    //ZONA DONDE PINTAMOS EL ARRAY

    // Crear un elemento h4 para el título "Notas"
    var tituloNotas = document.createElement("h4");
    tituloNotas.textContent = "Notas";
    //ZONA DE ESCRITURA DEL DOM
    listaNotas.appendChild(tituloNotas);

    // Crear un elemento ul para la lista desordenada
    var listaDesordenada = document.createElement("ul");

    // Mostrar cada nota en la lista usando forEach
    notas.forEach(function (nota) {
      var elementoLista = document.createElement("li");
      elementoLista.textContent = nota;
      listaDesordenada.appendChild(elementoLista);
    });
    //ZONA DE ESCRITURA DEL DOM
    // Agregar la lista desordenada al DOM
    listaNotas.appendChild(listaDesordenada);
  }

  // Función para calcular y mostrar el promedio
  function calcularYMostrarPromedio() {
    var nombreSeleccionado = selectNombres.value;
    var notas = notasAlumnos[nombreSeleccionado] || [];

    if (notas.length === 0) {
      alert("No hay notas para calcular el promedio.");
      return;
    }

    // Calcular y mostrar el promedio
    var promedio = calcularPromedio(notas);
    alert("Promedio: " + promedio);
    //ZONA DE ESCRITURA DEL DOM
    promedioResultado.textContent = "Promedio: " + promedio;
  }

  function buscarYMostrarNotaAlta() {
    var nombreSeleccionado = selectNombres.value;
    var notas = notasAlumnos[nombreSeleccionado] || [];

    // Verificar si hay notas para calcular la nota más alta
    if (notas.length === 0) {
      alert("No hay notas para calcular la nota más alta.");
      return;
    }

    // Calcular la nota más alta
    var notaAlta = Math.max(...notas);

    // Mostrar la nota más alta en un mensaje y en un elemento HTML
    alert("Nota más alta del alumno: " + notaAlta);
    //ZONA DE ESCRITURA DEL DOM
    notaAltaResultado.textContent = "Nota más alta: " + notaAlta;
  }

  // Función para buscar y mostrar suspensos
  function buscarYMostrarSuspenso() {
    var nombreSeleccionado = selectNombres.value;
    var notas = notasAlumnos[nombreSeleccionado] || [];

    // Verificar si hay notas para buscar suspensos
    if (notas.length === 0) {
      alert("No hay notas para buscar suspensos.");
      return;
    }

    // Definir el umbral para suspensos (por ejemplo, 5)
    var umbralSuspensos = 5;

    // Filtrar las notas que son inferiores al umbral
    var suspensos = notas.filter(function (nota) {
      return nota < umbralSuspensos;
    });

    // Mostrar los suspensos en un mensaje y en un elemento HTML
    if (suspensos.length > 0) {
      alert("Suspensos: " + suspensos);
      //ZONA DE ESCRITURA DEL DOM
      suspensoResultado.textContent = "Suspensos: " + suspensos;
    } else {
      alert("No hay suspensos.");
      //ZONA DE ESCRITURA DEL DOM
      suspensoResultado.textContent = "No hay suspensos.";
    }
  }

  // Función para calcular el promedio de notas en el array
  function calcularPromedio(array) {
    var sum = array.reduce(function (total, nota) {
      return total + nota;
    }, 0);
    return array.length === 0 ? 0 : sum / array.length;
  }
});
