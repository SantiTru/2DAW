import React, { useState } from 'react';
import Logo from './Logo.js';
import Form from './Form.js';
import PackingList from './PackingList.js';
import Stats from './Stats.js';

function App() {
  //ESTADOS-------------------------------------------------
  //Lista inicial de objetos
  const [arrLista, setArrLista] = useState([
    {
      idObjeto: 1,
      objeto: 'Pasaportes',
      unidades: 2,
      checked: false
    },
    {
      idObjeto: 2,
      objeto: 'Calcetines',
      unidades: 10,
      checked: true
    },
    {
      idObjeto: 3,
      objeto: 'Cargador',
      unidades: 1,
      checked: false
    }
  ]);

  //Valores de los inputs
  const [nombreNuevoObjeto, setNombreNuevoObjeto] = useState('');
  const [cantNuevoObjeto, setCantNuevoObjeto] = useState(1);

  //FUNCIONES--------------------------------------------------
  //Funciones de formulario
  const controlarCambiosEnInput = (e) => {
    const input = e.target;
    setNombreNuevoObjeto(input.value);
  }

  const controlarCambiosEnSelect = (e) => {
    const select = e.target;
    setCantNuevoObjeto(select.value);
  }

  const crearNuevoObjeto = () => {
    //Encontrar el id más alto hasta ahora
    const idMax = Math.max(...arrLista.map((objeto) => objeto.idObjeto), 0);
    const nuevoObjeto = {
      idObjeto: idMax + 1,
      objeto: nombreNuevoObjeto,
      unidades: cantNuevoObjeto,
      checked: false
    }

    setArrLista((prevArrLista) => [...prevArrLista, nuevoObjeto]);
  }

  //Funciones de lista
  const cambiarEstadoChecked = (idObjeto) => {
    setArrLista((prevArrLista) =>
      prevArrLista.map((objeto) =>
        objeto.idObjeto === idObjeto ? { ...objeto, checked: !objeto.checked } : objeto
      )
    );
  };

  const borrarObjeto = (idObjeto) => {
    setArrLista((prevArrLista) =>
      prevArrLista.filter((objeto) => objeto.idObjeto !== idObjeto)
    );
  }

  //Funciones de stats
  const numObjetosEnMaleta = () => {
    const listaEnMaleta = arrLista.filter(objeto => objeto.checked);

    return listaEnMaleta.length;
  }

  const calcularPorcentaje = () => {
    const numObjetosTotales = arrLista.length;
    const numObjetosMaleta = numObjetosEnMaleta();

    let numADevolver = ((numObjetosMaleta / numObjetosTotales) * 100).toFixed(0);

    return numADevolver;
  }

  return (
    <div className="app">
      <Logo />
      <Form controlarCambiosEnInput={controlarCambiosEnInput} controlarCambiosEnSelect={controlarCambiosEnSelect} crearNuevoObjeto={crearNuevoObjeto} nombreNuevoObjeto={nombreNuevoObjeto}/>
      <PackingList arrLista={arrLista} cambiarEstadoChecked={cambiarEstadoChecked} borrarObjeto={borrarObjeto}/>
      <Stats arrLista={arrLista} numObjetosEnMaleta={numObjetosEnMaleta} calcularPorcentaje={calcularPorcentaje} />
    </div>
  );
}

export default App;