// Este código se ejecuta cuando el documento HTML ha sido completamente cargado y está listo para interactuar con JavaScript.
document.addEventListener("DOMContentLoaded", () => {
  // Obtenemos una referencia al elemento con el ID "Consulta" y lo almacenamos en la variable consultaButton.
  const consultaButton = document.getElementById("Consulta");

  // Obtenemos una referencia al elemento con el ID "PalabraConsultada" y lo almacenamos en la variable palabraInput.
  const palabraInput = document.getElementById("PalabraConsultada");

  // Obtenemos una referencia al elemento con el ID "resultadoTexto" y lo almacenamos en la variable resultadoTexto.
  const resultadoTexto = document.getElementById("resultadoTexto");

  // Obtenemos una referencia al elemento con el ID "imagenResultado" y lo almacenamos en la variable imagenResultado.
  const imagenResultado = document.getElementById("imagenResultado");

  // Obtenemos una referencia al elemento con el ID "resultadoContainer" y lo almacenamos en la variable resultadoContainer.
  const resultadoContainer = document.getElementById("resultadoContainer");

  // Agregamos un evento click al botón "Consulta".
  consultaButton.addEventListener("click", () => {
    // Obtenemos el valor del campo de entrada de texto, eliminamos espacios en blanco al principio y al final, y lo convertimos a minúsculas.
    const palabraConsultada = palabraInput.value.trim().toLowerCase();

    // Llamamos a la función obtenerResultado y le pasamos la palabra consultada como argumento. El resultado se almacena en la variable resultado.
    const resultado = obtenerResultado(palabraConsultada);

    // Comprobamos si hay un resultado para la palabra.
    if (resultado) {
      // Si hay un resultado, mostramos el contenedor resultado al cambiar su propiedad de estilo display a "block" (visible).
      resultadoContainer.style.display = "block"; // Muestra el contenedor

      // Llenamos el contenido del elemento resultadoTexto con el texto del resultado obtenido.
      resultadoTexto.innerHTML = resultado.frase; // Muestra la frase

      // Configuramos la fuente de la imagen para que muestre la imagen correspondiente al resultado.
      imagenResultado.src = resultado.imagen; // Muestra la imagen
    } else {
      // Si no hay un resultado, ocultamos el contenedor resultado al cambiar su propiedad de estilo display a "none" (oculto).
      resultadoContainer.style.display = "none"; // Oculta el contenedor
    }
  });

  // Definimos una función llamada obtenerResultado que toma una palabra como argumento y devuelve su resultado basado en una estructura de datos (objeto).
  function obtenerResultado(palabra) {
    // Define las frases y las imágenes correspondientes para cada palabra en un objeto llamado resultados.
    const resultados = {
      achuchaera: {
        frase:
          "Expresión utilizada para referirse una amistad entre dos personas.",
        imagen: "./Img/Achuchaera.jpg",
      },
      alargar: {
        frase: "Llevar a alguien a algún sitio.",
        imagen: "./Img/Alargar.jpg",
      },
      aliquindoi: {
        frase:
          "Expresión malagueña que significa 'Estar atento a algo para aprender como se hace'. Viene de la expresión inglesa 'Look and do it.'",
        imagen: "./Img/Aliquindoi.jpg",
      },
      alobao: {
        frase: "Persona despistada o en las nubes.",
        imagen: "./Img/Alobao.jpg",
      },
      chorraera: {
        frase: "Tobogán. Mobiliario típico de parques infantiles.",
        imagen: "./Img/Chorraera.jpg",
      },
      eonoe: {
        frase:
          "Expresión que se usa para confirmar un argumento. ¿Es, o no es así?",
        imagen: "./Img/EONo.jpg",
      },
      encalomao: {
        frase: "Acoplarse a algún plan.",
        imagen: "./Img/Encalomao.jpg",
      },
      encogio: {
        frase: "Alguien que no es muy generoso.",
        imagen: "./Img/Encogio.jpg",
      },
      escopetao: {
        frase:
          "Expresión utilizada para referirse a alguien que va con mucha prisa.",
        imagen: "./Img/Escopetao.jpg",
      },
      farola: {
        frase:
          "Mandar a alguien a la Farola es el equivalente Malagueño a mandarlo a paseo.",
        imagen: "./Img/farola.jpg",
      },
      fite: {
        frase: "Fíjate.",
        imagen: "./Img/Fite.jpg",
      },
      guarnio: {
        frase: "Estar extremadamente cansado.",
        imagen: "./Img/guarnio.jpg",
      },
      guarrito: {
        frase:
          "Taladro. Viene de la primera marca que se hizo con el mercado Malagueño de esta herramienta. La marca Warrington.",
        imagen: "./Img/Guarrito.jpg",
      },
      jaba: {
        frase:
          "Pie. Da lugar a la expresión 'Pedaso de jaba', dicha cuando alguien tiene un pie muy grande.",
        imagen: "./Img/Jaba.jpg",
      },
      merdellon: {
        frase:
          "Persona con poca educación. Viene de la expresión en francés 'merde de gens'.",
        imagen: "./Img/Merdellon.jpg",
      },
      pecha: {
        frase: "Cantidad grande de alguna cosa.",
        imagen: "./Img/Pecha.jpg",
      },
      perita: {
        frase:
          "Expresión que se utiliza para decir que algo está guay, divertido o es de buena calidad.",
        imagen: "./Img/Perita.jpg",
      },
      piarda: {
        frase: "Faltar a clase.",
        imagen: "./Img/Piarda.jpg",
      },
      "pila de ente": {
        frase: "Muchas personas.",
        imagen: "./Img/piladeEnte.jpg",
      },
      torroles: {
        frase: "La forma popular de conocer al pueblo de Torremolinos.",
        imagen: "./Img/ATorroles.jpg",
      },
    };

    // Verificamos si la palabra consultada está en el objeto resultados utilizando el método hasOwnProperty.
    if (resultados.hasOwnProperty(palabra)) {
      // Si la palabra existe en el objeto resultados, retornamos el resultado correspondiente.
      return resultados[palabra];
    } else {
      // Si la palabra no se encuentra en el objeto resultados, retornamos null para indicar que no hay un resultado.
      return null;
    }
  }
});
