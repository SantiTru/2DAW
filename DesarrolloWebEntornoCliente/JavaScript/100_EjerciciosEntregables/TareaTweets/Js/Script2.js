//Carga del DOM
//Declaracion de variables

const array_tweets = [];
let lista = document.querySelector('#listaDinamica');
let error = document.querySelector('#mensajeError');
let btn = document.querySelector('#boton');

// Funciones
btn.addEventListener("click", () => {
    agregarTweet();
    
});

function agregarTweet() {
  let caja = document.querySelector('#caja');
  let mensajes = caja.value.trim();
  
  if (mensajes !== "") {
      // Creamos el nuevo tweet
      let tweetNuevo = {
          texto: mensajes,
          fecha: new Date().toLocaleString()
      };
      // Lo agregamos al array
      array_tweets.push(tweetNuevo);

      // Llamamos a la función para mostrar todos los tweets
      mostrarTweets();  

      //mostramos mensaje enviado
      mensajeGood();

      //reseteamos la caja
      caja.value = "";
      
      
  } else {
      mensajeError();
  }
}

function mostrarTweets() {
  // Limpiamos la lista antes de mostrar los tweets actualizados
  lista.innerHTML = "";

  // Recorremos el array de tweets y agregamos cada uno a la lista
  for (let i = 0; i < array_tweets.length; i++) {
    let tweet = array_tweets[i];

    // Agregamos el botón de borrado
    let botonBorrar = document.createElement("button");
    botonBorrar.textContent = " Borrar ";
    botonBorrar.addEventListener("click", () => {
      // Eliminamos el tweet del array
      array_tweets.splice(array_tweets.indexOf(tweet), 1);

      // Llamamos a la función para actualizar la lista
      mostrarTweets();
    });

    let li = document.createElement("li");
    li.textContent = `${tweet.texto}`;
    li.setAttribute("data-tweet-id", tweet.id);
    li.appendChild(botonBorrar);

    lista.appendChild(li);
  }
}

function mensajeError() {
    let caja = document.querySelector('#caja');
    let mensajes = caja.value.trim();

    if (mensajes === "") {
        error.innerHTML = "Tweet vacío. Ingrese texto para continuar";
        error.className = "mensajeError";
    }

    // Establecer un temporizador para borrar el mensaje después de 3 segundos
    setTimeout(function () {
        error.innerHTML = "";
        // Restablecer la clase a su valor predeterminado después de borrar el mensaje
        error.className = "";
    }, 3000);
}

function mensajeGood(){
    let caja = document.querySelector('#caja');
    let mensajes = caja.value.trim();

    if (mensajes !== "") {
        error.innerHTML = "Tweet enviado.";
        error.className = "mensajeGood";
    }

    // Establecer un temporizador para borrar el mensaje después de 3 segundos
    setTimeout(function () {
        error.innerHTML = "";
        // Restablecer la clase a su valor predeterminado después de borrar el mensaje
        error.className = "";
    }, 3000);

}






