import { useState } from "react";

function Form({ handleAddItem, arrLista }) {
  //Valores de los inputs
  const [nombreNuevoObjeto, setNombreNuevoObjeto] = useState("");
  const [cantNuevoObjeto, setCantNuevoObjeto] = useState(1);

  const controlarCambiosEnInput = (e) => {
    const input = e.target;
    setNombreNuevoObjeto(input.value);
  };

  const controlarCambiosEnSelect = (e) => {
    const select = e.target;
    setCantNuevoObjeto(select.value);
  };

  const crearNuevoObjeto = () => {
    //Encontrar el id más alto hasta ahora
    const idMax = Math.max(...arrLista.map((objeto) => objeto.idObjeto), 0);
    const nuevoObjeto = {
      idObjeto: idMax + 1,
      objeto: nombreNuevoObjeto,
      unidades: cantNuevoObjeto,
      checked: false,
    };

    handleAddItem(nuevoObjeto);
  };

  return (
    <div className="add-form">
      <p>¡Planifica tu equipaje!</p>

      <select value={cantNuevoObjeto} onChange={controlarCambiosEnSelect}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <input
        type="text"
        value={nombreNuevoObjeto}
        onChange={controlarCambiosEnInput}
      ></input>

      <button
        onClick={() => (nombreNuevoObjeto !== "" ? crearNuevoObjeto() : null)}
      >
        Añadir
      </button>
    </div>
  );
}

export default Form;
