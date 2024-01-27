import React, { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

function App() {
  //ESTADOS-------------------------------------------------
  //Lista inicial de objetos
  const [arrLista, setArrLista] = useState([
    {
      idObjeto: 1,
      objeto: "Pasaportes",
      unidades: 2,
      checked: false,
    },
    {
      idObjeto: 2,
      objeto: "Calcetines",
      unidades: 10,
      checked: true,
    },
    {
      idObjeto: 3,
      objeto: "Cargador",
      unidades: 1,
      checked: false,
    },
  ]);

  //Valores de los inputs
  //lo bajo a Form

  //FUNCIONES--------------------------------------------------
  //Funciones de formulario
  //lo bajo a Form

  const handleAddItem = (nuevoObjeto) => {
    setArrLista((prevArrLista) => [...prevArrLista, nuevoObjeto]);
  };

  //Funciones de lista
  const cambiarEstadoChecked = (idObjeto) => {
    setArrLista((prevArrLista) =>
      prevArrLista.map((objeto) =>
        objeto.idObjeto === idObjeto
          ? { ...objeto, checked: !objeto.checked }
          : objeto
      )
    );
  };

  const borrarObjeto = (idObjeto) => {
    setArrLista((prevArrLista) =>
      prevArrLista.filter((objeto) => objeto.idObjeto !== idObjeto)
    );
  };

  //Funciones de stats
  //lo bajo

  function onDeleteList() {
    const confirmed = window.confirm(
      "Are you sure, you want to delete all items?"
    );

    if (confirmed) setArrLista([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} arrLista={arrLista} />
      <PackingList
        arrLista={arrLista}
        cambiarEstadoChecked={cambiarEstadoChecked}
        borrarObjeto={borrarObjeto}
        onDeleteList={onDeleteList}
      />
      <Stats arrLista={arrLista} />
    </div>
  );
}

export default App;
