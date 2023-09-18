function saludo(){
  let nombre = prompt("Cual es tu nombre?");
  document.querySelector('.contenido').innerHTML = `Buenos días ${nombre}!!`;
}
