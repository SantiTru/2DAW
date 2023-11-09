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
    }
  });
  // Definimos una función llamada obtenerResultado que toma una palabra como argumento y devuelve su resultado basado en una estructura switch-case.
  function obtenerResultado(palabra) {
    let frase;
    let imagen;
    if (palabra === "") {
      // En caso de campo vacío, mostrar la imagen de error
      frase = "Me dejas sin palabras...";
      imagen = "./Img/PonArgo.jpg";
    } else {
      // Utilizamos una estructura switch-case para determinar el resultado basado en la palabra consultada.
      switch (palabra) {
        case "achuchaera":
          frase =
            "Expresión utilizada para referirse a una amistad entre dos personas.";
          imagen = "./Img/Achuchaera.jpg";
          break;
        case "alargar":
          frase = "Llevar a alguien a algún sitio.";
          imagen = "./Img/Alargar.jpg";
          break;
        case "aliquindoi":
          frase =
            "Expresión malagueña que significa 'Estar atento a algo para aprender cómo se hace'. Viene de la expresión inglesa 'Look and do it.'";
          imagen = "./Img/Aliquindoi.jpg";
          break;
        case "alobao":
          frase = "Persona despistada o en las nubes.";
          imagen = "./Img/Alobao.jpg";
          break;
        case "chorraera":
          frase = "Tobogán. Mobiliario típico de parques infantiles.";
          imagen = "./Img/Chorraera.jpg";
          break;
        case "eonoe":
          frase =
            "Expresión que se usa para confirmar un argumento. ¿Es, o no es así?";
          imagen = "./Img/EONo.jpg";
          break;
        case "encalomao":
          frase = "Acoplarse a algún plan.";
          imagen = "./Img/Encalomao.jpg";
          break;
        case "encogio":
          frase = "Alguien que no es muy generoso.";
          imagen = "./Img/Encogio.jpg";
          break;
        case "escopetao":
          frase =
            "Expresión utilizada para referirse a alguien que va con mucha prisa.";
          imagen = "./Img/Escopetao.jpg";
          break;
        case "farola":
          frase =
            "Mandar a alguien a la Farola es el equivalente Malagueño a mandarlo a paseo.";
          imagen = "./Img/farola.jpg";
          break;
        case "fite":
          frase = "Fíjate.";
          imagen = "./Img/Fite.jpg";
          break;
        case "guarnio":
          frase = "Estar extremadamente cansado.";
          imagen = "./Img/guarnio.jpg";
          break;
        case "guarrito":
          frase =
            "Taladro. Viene de la primera marca que se hizo con el mercado Malagueño de esta herramienta. La marca Warrington.";
          imagen = "./Img/Guarrito.jpg";
          break;
        case "jaba":
          frase =
            "Pie. Da lugar a la expresión 'Pedaso de jaba', dicha cuando alguien tiene un pie muy grande.";
          imagen = "./Img/Jaba.jpg";
          break;
        case "merdellon":
          frase =
            "Persona con poca educación. Viene de la expresión en francés 'merde de gens'.";
          imagen = "./Img/Merdellon.jpg";
          break;
        case "pecha":
          frase = "Cantidad grande de alguna cosa.";
          imagen = "./Img/Pecha.jpg";
          break;
        case "perita":
          frase =
            "Expresión que se utiliza para decir que algo está guay, divertido o es de buena calidad.";
          imagen = "./Img/Perita.jpg";
          break;
        case "piarda":
          frase = "Faltar a clase.";
          imagen = "./Img/Piarda.jpg";
          break;
        case "pila de ente":
          frase = "Muchas personas.";
          imagen = "./Img/piladeEnte.jpg";
          break;
        case "torroles":
          frase = "La forma popular de conocer al pueblo de Torremolinos.";
          imagen = "./Img/ATorroles.jpg";
          break;
        default:
          // Si la palabra no coincide con ningún caso, mostrar la imagen de error
          frase = "Palabra no encontrada en el diccionario";
          imagen = "./Img/PonArgo.jpg";
          // Si la palabra no coincide con ningún caso, retornamos null para indicar que no hay un resultado.
          console.log("Palabra no encontrada en el diccionario:", palabra);
      }
    }
    // Devolvemos un objeto con la frase y la imagen correspondientes a la palabra consultada.
    return { frase, imagen };
  }
});
