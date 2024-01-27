function Stats({arrLista, numObjetosEnMaleta, calcularPorcentaje}) {
    return (
        <div className="stats">
            <p>Hay 
                {' ' + arrLista.length + ' '}
                objetos en tu lista, y ya has metido 
                {' ' + numObjetosEnMaleta() + ' '}
                en la maleta (
                {calcularPorcentaje()}
                %).
            </p>
            <br/>
            <p>Cristina Delgado Muñoz</p>
        </div>
    );
}

export default Stats;