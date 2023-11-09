// Este código se ejecuta cuando el documento HTML ha sido completamente cargado y está listo para interactuar con JavaScript.
document.addEventListener("DOMContentLoaded", () => {
  // Obtenemos una referencia al elemento con el ID "Consulta" (presumiblemente un botón) y lo almacenamos en la variable consultaButton.
  const consultaButton = document.getElementById("Consulta");

  // Obtenemos una referencia al elemento con el ID "PalabraConsultada" (presumiblemente un campo de entrada de texto) y lo almacenamos en la variable palabraInput.
  const palabraInput = document.getElementById("PalabraConsultada");

  // Obtenemos una referencia al elemento con el ID "resultado" (presumiblemente un contenedor para mostrar el resultado) y lo almacenamos en la variable resultadoDiv.
  const resultadoDiv = document.getElementById("resultado");

  // Obtenemos una referencia al elemento con el ID "resultadoContainer" (presumiblemente un contenedor para mostrar el resultado de la consulta) y lo almacenamos en la variable resultadoContainer.
  const resultadoContainer = document.getElementById("resultadoContainer");

  // Agregamos un evento click al botón "Consulta".
  consultaButton.addEventListener("click", () => {
    // Obtenemos el valor del campo de entrada de texto, eliminamos espacios en blanco al principio y al final, y lo convertimos a minúsculas.
    const palabraConsultada = palabraInput.value.trim().toLowerCase();

    // Llamamos a la función obtenerSignificado y le pasamos la palabra consultada como argumento. El resultado se almacena en la variable significado.
    let significado = obtenerSignificado(palabraConsultada);

    // Comprobamos si hay un significado para la palabra.
    if (significado) {
      // Si hay un significado, mostramos el contenedor resultado al cambiar su propiedad de estilo display a "block" (visible).
      resultadoContainer.style.display = "block"; // Mostramos el contenedor
      // Llenamos el contenido del div resultadoDiv con el significado obtenido y la palabra consultada.
      resultadoDiv.innerHTML = `<strong>Significado de "${palabraConsultada}":</strong> ${significado}`;
    } else {
      // Si no hay un significado, ocultamos el contenedor resultado al cambiar su propiedad de estilo display a "none" (oculto).
      resultadoContainer.style.display = "none"; // Ocultamos el contenedor
    }
  });

  // Definimos una función llamada obtenerSignificado que toma una palabra como argumento y devuelve su significado basado en una estructura switch-case.
  function obtenerSignificado(palabra) {
    switch (palabra) {
      case "achuchaera":
        return "Expresión utilizada para referirse a un lugar estrecho o apretado.";
      case "alargar":
        return "Llevar a alguien a algún sitio.";
      case "aliquindoi":
        return "Expresión malagueña que significa 'Estar atento a algo para aprender como se hace'. Viene de la expresión inglesa 'Look and do it.'";
      case "alobao":
        return "Persona despistada o en las nubes.";
      case "chorraera":
        return "Tobogan. Mobiliario tipico de parques infantiles.";
      case "eonoe":
        return "Expresión que se usa para confirmar un argumento. ¿Es, o no es así?";
      case "encalomao":
        return "Acoplarse a algún plan.";
      case "encogio":
        return "Alguien que no es muy generoso.";
      case "escopetao":
        return "Expresión utilizada para referirse a alguien que va con mucha prisa.";
      case "farola":
        return "Mandar a alguien a la Farola es el equivalente Malagueño a mandarlo a paseo.";
      case "fite":
        return "Fijate.";
      case "guarnio":
        return "Estar extremadamente cansado.";
      case "guarrito":
        return "Taladro. Viene de la primera marca que se hizo con el mercado Malagueño de esta herramienta. La marca Warrington.";
      case "jaba":
        return "Pie. Da lugar a la expresión Pedaso de jaba, dicha cuando alguien tiene un pie muy grande.";
      case "merdellon":
        return "Persona con poca educación. Viene de la expresión en francés 'merde de gens'";
      case "pecha":
        return "Cantidad grande de alguna cosa.";
      case "perita":
        return "Expresión que se utiliza para decir que algo esta guay.";
      case "piarda":
        return "Faltar a clase.";
      case "pila de ente":
        return "Muchas personas.";
      case "torroles":
        return "La forma popular de conocer al pueblo de Torremolinos.";
      default:
        return "La palabra no se encuentra en el diccionario Malagueño lamentablemente.";
    }
  }
});
