// Este bloque de código se ejecuta cuando el documento HTML ha sido completamente cargado y está listo para interactuar con JavaScript.
document.addEventListener("DOMContentLoaded", function () {
  // Obtenemos una referencia al botón con el ID "Consulta" y lo almacenamos en la variable consultaButton.
  const consultaButton = document.getElementById("Consulta");
  // Obtenemos una referencia al campo de entrada de texto con el ID "PalabraConsultada" y lo almacenamos en la variable palabraInput.
  const palabraInput = document.getElementById("PalabraConsultada");
  // Obtenemos una referencia al elemento con el ID "resultadoTexto" y lo almacenamos en la variable resultadoTexto.
  const resultadoTexto = document.getElementById("resultadoTexto");
  // Obtenemos una referencia al elemento con el ID "imagenResultado" y lo almacenamos en la variable imagenResultado.
  const imagenResultado = document.getElementById("imagenResultado");
  // Obtenemos una referencia al elemento con el ID "resultadoContainer" y lo almacenamos en la variable resultadoContainer.
  const resultadoContainer = document.getElementById("resultadoContainer");
  // Obtenemos una referencia al elemento con el ID "errorImagen" y lo almacenamos en la variable errorImagen. Esto es para mostrar una imagen de error.
  const errorImagen = document.getElementById("errorImagen");
  // Agregamos un evento de clic al botón "Consulta".
  consultaButton.addEventListener("click", function () {
    // Obtenemos el valor del campo de entrada de texto, eliminamos espacios en blanco al principio y al final, y lo convertimos a minúsculas.
    const palabraConsultada = palabraInput.value.trim().toLowerCase();
    // Llamamos a la función obtenerResultado y le pasamos la palabra consultada como argumento. El resultado se almacena en la variable resultado.
    const resultado = obtenerResultado(palabraConsultada);
    if (resultado) {
      // Si hay un resultado para la palabra:
      // Mostramos el contenedor de resultados al cambiar su propiedad de estilo display a "block" (visible).
      resultadoContainer.style.display = "block";
      // Llenamos el contenido del elemento resultadoTexto con el texto del resultado obtenido.
      resultadoTexto.innerHTML = resultado.frase;
      // Configuramos la fuente de la imagen para que muestre la imagen correspondiente al resultado.
      imagenResultado.src = resultado.imagen;
      // Ocultamos la imagen de error si se muestra.
      errorImagen.style.display = "none";
    } else {
      // Si no hay un resultado para la palabra:
      // Ocultamos el contenedor de resultados.
      resultadoContainer.style.display = "none";
      // Mostramos la imagen de error.
      errorImagen.style.display = "block";
    }
  });
  // Definimos una función llamada obtenerResultado que toma una palabra como argumento y devuelve su resultado basado en una base de datos.
  function obtenerResultado(palabra) {
    // Creamos una base de datos que contiene objetos con palabras, frases e imágenes correspondientes.
    const baseDeDatos = [
      {
        palabra: "achuchaera",
        frase:
          "Expresión utilizada para referirse a una amistad entre dos personas.",
        imagen: "./Img/Achuchaera.jpg",
      },
      {
        palabra: "alargar",
        frase: "Llevar a alguien a algún sitio.",
        imagen: "./Img/Alargar.jpg",
      },
      {
        palabra: "aliquindoi",
        frase:
          "Expresión malagueña que significa 'Estar atento a algo para aprender cómo se hace'. Viene de la expresión inglesa 'Look and do it.'",
        imagen: "./Img/Aliquindoi.jpg",
      },
      {
        palabra: "alobao",
        frase: "Persona despistada o en las nubes.",
        imagen: "./Img/Alobao.jpg",
      },
      {
        palabra: "chorraera",
        frase: "Tobogán. Mobiliario típico de parques infantiles.",
        imagen: "./Img/Chorraera.jpg",
      },
      {
        palabra: "eonoe",
        frase:
          "Expresión que se usa para confirmar un argumento. ¿Es, o no es así?",
        imagen: "./Img/EONo.jpg",
      },
      {
        palabra: "encalomao",
        frase: "Acoplarse a algún plan.",
        imagen: "./Img/Encalomao.jpg",
      },
      {
        palabra: "encogio",
        frase: "Alguien que no es muy generoso.",
        imagen: "./Img/Encogio.jpg",
      },
      {
        palabra: "escopetao",
        frase:
          "Expresión utilizada para referirse a alguien que va con mucha prisa.",
        imagen: "./Img/Escopetao.jpg",
      },
      {
        palabra: "farola",
        frase:
          "Mandar a alguien a la Farola es el equivalente Malagueño a mandarlo a paseo.",
        imagen: "./Img/farola.jpg",
      },
      {
        palabra: "fite",
        frase: "Fíjate.",
        imagen: "./Img/Fite.jpg",
      },
      {
        palabra: "guarnio",
        frase: "Estar extremadamente cansado.",
        imagen: "./Img/guarnio.jpg",
      },
      {
        palabra: "guarrito",
        frase:
          "Taladro. Viene de la primera marca que se hizo con el mercado Malagueño de esta herramienta. La marca Warrington.",
        imagen: "./Img/Guarrito.jpg",
      },
      {
        palabra: "jaba",
        frase:
          "Pie. Da lugar a la expresión 'Pedaso de jaba', dicha cuando alguien tiene un pie muy grande.",
        imagen: "./Img/Jaba.jpg",
      },
      {
        palabra: "merdellon",
        frase:
          "Persona con poca educación. Viene de la expresión en francés 'merde de gens'.",
        imagen: "./Img/Merdellon.jpg",
      },
      {
        palabra: "pecha",
        frase: "Cantidad grande de alguna cosa.",
        imagen: "./Img/Pecha.jpg",
      },
      {
        palabra: "perita",
        frase:
          "Expresión que se utiliza para decir que algo está guay, divertido o es de buena calidad.",
        imagen: "./Img/Perita.jpg",
      },
      {
        palabra: "piarda",
        frase: "Faltar a clase.",
        imagen: "./Img/Piarda.jpg",
      },
      {
        palabra: "pila de ente",
        frase: "Muchas personas.",
        imagen: "./Img/piladeEnte.jpg",
      },
      {
        palabra: "torroles",
        frase: "La forma popular de conocer al pueblo de Torremolinos.",
        imagen: "./Img/ATorroles.jpg",
      },
    ];
    // Utilizamos el método `find` para buscar en la base de datos un objeto cuya propiedad "palabra" coincida con la palabra consultada.
    const resultadoObj = baseDeDatos.find(function (obj) {
      return obj.palabra === palabra;
    });
    if (resultadoObj) {
      // Si se encuentra un objeto que coincide con la palabra consultada, lo devolvemos como resultado.
      return resultadoObj;
    } else {
      // Si no se encuentra un resultado, devolvemos null para indicar que no hay un resultado.
      return null;
    }
  }
});
