function Stats({ arrLista }) {
  const numObjetosEnMaleta = () => {
    const listaEnMaleta = arrLista.filter((objeto) => objeto.checked);

    return listaEnMaleta.length;
  };

  const calcularPorcentaje = () => {
    const numObjetosTotales = arrLista.length;
    const numObjetosMaleta = numObjetosEnMaleta();

    let numADevolver = ((numObjetosMaleta / numObjetosTotales) * 100).toFixed(
      0
    );

    return numADevolver;
  };
  return (
    <div className="stats">
      <p>
        Hay
        {" " + arrLista.length + " "}
        objetos en tu lista, y ya has metido
        {" " + numObjetosEnMaleta() + " "}
        en la maleta ({calcularPorcentaje()}
        %).
      </p>
      <br />
      <p>Cristina Delgado Muñoz</p>
    </div>
  );
}

export default Stats;
