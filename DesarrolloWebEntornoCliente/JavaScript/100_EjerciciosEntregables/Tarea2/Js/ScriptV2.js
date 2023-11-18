document.addEventListener("DOMContentLoaded", function () {
  //ZONA DE VARIABLES
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
  var cargaNotasBtn = document.getElementById("cargaNotasBtn");
  var resetBtn = document.getElementById("resetBtn");

  //ZONA DE EVENTOS
  selectNombres.addEventListener("change", actualizarEstadoBotones);
  calcularPromedioBtn.addEventListener("click", calcularYMostrarPromedio);
  buscarNotaAltaBtn.addEventListener("click", buscarYMostrarNotaAlta);
  buscarSuspensoBtn.addEventListener("click", buscarYMostrarSuspenso);
  resetBtn.addEventListener("click", resetearBotones);

  resetBtn.disabled = true;
  calcularPromedioBtn.disabled = true;
  buscarNotaAltaBtn.disabled = true;
  buscarSuspensoBtn.disabled = true;

  cargaNotasBtn.addEventListener("click", function () {
    var nombreSeleccionado = selectNombres.value;
    // Verificar si hay notas para el alumno seleccionado
    if (
      notasAlumnos[nombreSeleccionado] &&
      notasAlumnos[nombreSeleccionado].length > 0
    ) {
      // Mostrar las notas
      mostrarNotas();
      // Actualizar el estado de los botones
      actualizarEstadoBotones();
    } else {
      alert("No hay notas cargadas para este alumno.");
      mostrarNotas();
    }
  });

  // Evento de cambio en el elemento selectNombres
  selectNombres.addEventListener("change", function () {
    // Habilitar el botón cargaNotasBtn cuando se selecciona un nombre y borrar resultados
    cargaNotasBtn.disabled = false;
    promedioResultado.textContent = "";
    notaAltaResultado.textContent = "";
    suspensoResultado.textContent = "";
    resetBtn.disabled = true;
    calcularPromedioBtn.disabled = true;
    buscarNotaAltaBtn.disabled = true;
    buscarSuspensoBtn.disabled = true;

    listaNotas.innerHTML = "";
    var sinNotas = document.getElement("h2");
    sinNotas.textContent = "";
  });

  // Función para mostrar las notas del alumno seleccionado
  function mostrarNotas() {

    var nombreSeleccionado = selectNombres.value;
    var notas = notasAlumnos[nombreSeleccionado] || [];

    // Verificar si hay notas para mostrar
    if (notas.length === 0) {
      var sinNotas = document.createElement("h2");
      sinNotas.textContent =
        "No hay notas para mostrar. Selecciona otro alumno";

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

    // Calcular y mostrar el promedio
    var promedio = calcularPromedio(notas);
    alert("Promedio: " + promedio);
    //ZONA DE ESCRITURA DEL DOM
    promedioResultado.textContent = "Promedio: " + promedio;
  }

  // Función para buscar y mostrar la nota más alta
  function buscarYMostrarNotaAlta() {
    var nombreSeleccionado = selectNombres.value;
    var notas = notasAlumnos[nombreSeleccionado] || [];

    // Calcular la nota más alta
    var notaAlta = Math.max(...notas);

    // Mostrar la nota más alta en un mensaje y en un elemento HTML
    alert("Nota más alta del alumno: " + notaAlta);
    //ZONA DE ESCRITURA DEL DOM
    notaAltaResultado.textContent = "Nota más alta: " + notaAlta;
  }

  // Función para buscar y mostrar los suspensos
  function buscarYMostrarSuspenso() {
    var nombreSeleccionado = selectNombres.value;
    var notas = notasAlumnos[nombreSeleccionado] || [];

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

  // Función para resetear los botones y resultados
  function resetearBotones() {
    // Limpiar la lista de notas
    listaNotas.innerHTML = "";

    // Resetear los resultados
    promedioResultado.textContent = "";
    notaAltaResultado.textContent = "";
    suspensoResultado.textContent = "";

    // Habilitar el botón cargarNotas
    cargaNotasBtn.disabled = false;
    resetBtn.disabled = true;
    calcularPromedioBtn.disabled = true;
    buscarNotaAltaBtn.disabled = true;
    buscarSuspensoBtn.disabled = true;
  }

  // Función para actualizar el estado de los botones
  function actualizarEstadoBotones() {
    // Habilitar o deshabilitar botones según si hay notas cargadas o no
    var nombreSeleccionado = selectNombres.value;
    cargaNotasBtn.disabled =
      notasAlumnos[nombreSeleccionado] &&
      notasAlumnos[nombreSeleccionado].length > 0;
    resetBtn.disabled = !cargaNotasBtn.disabled;

    // Habilitar o deshabilitar resultados según si hay notas mostradas o no
    calcularPromedioBtn.disabled = listaNotas.innerHTML === "";
    buscarNotaAltaBtn.disabled = listaNotas.innerHTML === "";
    buscarSuspensoBtn.disabled = listaNotas.innerHTML === "";
  }

  // Función para calcular el promedio de notas en el array
  function calcularPromedio(array) {
    var sum = array.reduce(function (total, nota) {
      return total + nota;
    }, 0);
    return array.length === 0 ? 0 : sum / array.length;
  }
});
