function PackingList({ arrLista, cambiarEstadoChecked, borrarObjeto}) {

    return (
        <div className="list">
            <ul>
                {arrLista.length > 0 ? (
                    arrLista.map((objeto) => (
                    <li key={objeto.idObjeto}>
                        <input
                            type="checkbox"
                            onChange={() => cambiarEstadoChecked(objeto.idObjeto)}
                            checked={objeto.checked}
                        />
                        <p className={(objeto.checked ? 'empaquetado' : '')}>{objeto.unidades} {objeto.objeto}</p>
                        
                        <p className="cruzRoja"  onClick={() => borrarObjeto(objeto.idObjeto)}>x</p>
                    </li>
                ))
                ) : (
                    <p className="pListaVacia">Aún no se ha añadido nada a la lista</p>
                )
            }
                
            </ul>
        </div>
    );
}

export default PackingList;
