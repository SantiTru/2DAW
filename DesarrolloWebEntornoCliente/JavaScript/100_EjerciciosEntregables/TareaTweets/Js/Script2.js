const ARRAY_TWEETS = [];
const LISTA = document.querySelector('#listaDinamica');
const ERROR = document.querySelector('#mensajeError');
const BTN = document.querySelector('#boton');
const CAJA = document.querySelector('#caja');
const RESET_BTN = document.querySelector('#resetBtn'); 

// Carga tweets desde localStorage al cargar la página
cargarTweetsDesdeLocalStorage();

BTN.addEventListener("click", () => {
    agregarTweet();
});

RESET_BTN.addEventListener("click", () => { 
    resetearTweets();
});

function agregarTweet() {
    let mensajes = CAJA.value.trim();

    if (mensajes !== "") {
        // Creamos el nuevo tweet
        let tweetNuevo = {
            texto: mensajes,
            fecha: new Date().toLocaleString()
        };

        // Lo agregamos al array
        ARRAY_TWEETS.push(tweetNuevo);

        // Guardamos el array en localStorage antes de mostrar los tweets
        guardarTweetsEnLocalStorage();

        // Llamamos a la función para mostrar todos los tweets después de guardar en localStorage
        mostrarTweets();

        // Mostramos mensaje enviado
        mensajeGood();

        // Reseteamos la caja
        CAJA.value = "";
    } else {
        mensajeError();
    }
}

function mostrarTweets() {
    // Crear un string HTML en lugar de manipular el DOM directamente
    let listaHTML = "";

    for (let i = 0; i < ARRAY_TWEETS.length; i++) {
        let tweet = ARRAY_TWEETS[i];

        // Construir el fragmento HTML para el tweet
        listaHTML += `<li>${tweet.texto}&nbsp;<img src="./Img/papelera.png" alt="Borrar" style="cursor: pointer; width: 7%;" onclick="eliminarTweet(${i})"></li>`;
    }

    // Establecer el contenido de la lista una vez al final del bucle
    LISTA.innerHTML = listaHTML;
}

function mensajeError() {
    if (CAJA.value.trim() === "") {
        mostrarMensaje("Tweet vacío. Ingrese texto para continuar", "mensajeError");
    }
}

function mensajeGood() {
    if (CAJA.value.trim() !== "") {
        mostrarMensaje("Tweet enviado.", "mensajeGood");
    }
}

function mostrarMensaje(mensaje, className) {
    ERROR.innerHTML = mensaje;
    ERROR.className = className;

    // Establecer un temporizador para borrar el mensaje después de 3 segundos
    setTimeout(function () {
        ERROR.innerHTML = "";
        // Restablecer la clase a su valor predeterminado después de borrar el mensaje
        ERROR.className = "";
    }, 3000);
}

function guardarTweetsEnLocalStorage() {
    // Convierte el array de tweets a una cadena JSON y lo guarda en localStorage
    localStorage.setItem('ARRAY_TWEETS', JSON.stringify(ARRAY_TWEETS));
}

function cargarTweetsDesdeLocalStorage() {
    // Obtiene la cadena JSON del localStorage y la convierte de nuevo a un array
    const storedTweets = localStorage.getItem('ARRAY_TWEETS');
    if (storedTweets) {
        ARRAY_TWEETS.push(...JSON.parse(storedTweets));
        // Muestra los tweets almacenados al cargar la página
        mostrarTweets();
    }
}

function eliminarTweet(index) {
    // Eliminar el tweet del array
    ARRAY_TWEETS.splice(index, 1);

    // Actualizar la vista
    mostrarTweets();

    // Guardar en localStorage
    guardarTweetsEnLocalStorage();
}

function resetearTweets() {
    // Vaciar el array de tweets
    ARRAY_TWEETS.length = 0;

    // Actualizar la vista
    mostrarTweets();

    // Guardar en localStorage
    guardarTweetsEnLocalStorage();
}
