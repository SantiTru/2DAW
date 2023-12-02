const divBotones = document.querySelector('#divBotones');
const divResultado = document.querySelector('#divResultado');

divBotones.addEventListener('click', e => {
    let elemento = e.target;
    let idElemento = elemento.id;

    let link;

    switch (idElemento) {
      case 'boton1':
        obtenerDesdeTxt();
        break;
      case 'boton2':
        link = './apis/empleado.json';
        cargarJson(link);
        break;
      case 'boton3':
        link = './apis/empleados.json';
        cargarJson(link);
        break;
      case 'boton4':
        link = 'https://picsum.photos/list';
        cargarJson(link);
        break;
    }
})

function obtenerDesdeTxt() {
  const linkTxt = './apis/datos.txt';
  
  fetch(linkTxt)
    .then(res => res.text())
    .then(data => {
      divResultado.innerHTML = '';

      const nuevoP = document.createElement('p');
      nuevoP.innerHTML = data;
      divResultado.appendChild(nuevoP);
         
    })
    .catch(console.log('No se ha encontrado el archivo de txt.'))
}

function cargarJson(link) {
    fetch(link)
    .then(res => res.json())
    .then(data => {
      divResultado.innerHTML = '';
      if(Array.isArray(data)){
        //impArray
      }else{
        impObjeto(data)
      }
    })
}

function impArray(data) {
  data.forEach(objeto => {
    impObjeto(objeto);
  });
}

function impObjeto(data) {

  let divObjeto = document.createElement('div');
  divResultado.appendChild(divObjeto);
  Object.entries(data).forEach(([key, value])=>{
  let nuevoElemento;
  let mensaje;
  if(key === 'author_url'){
    nuevoElemento = document.createElement('a');
    mensaje = 'Ver imagen';
    nuevoElemento.href = value;
    nuevoElemento.target = '_blank';
  }else{
    nuevoElemento = document.createElement('p');
    mensaje = key + ': ' + value;
  }
  nuevoElemento.innerHTML = mensaje;
  divObjeto.appendChild(nuevoElemento);  

})
}