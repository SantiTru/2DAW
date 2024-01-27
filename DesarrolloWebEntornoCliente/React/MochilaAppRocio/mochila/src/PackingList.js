import { Item } from "./Item";
import { useState } from "react";

function PackingList({
  arrLista,
  cambiarEstadoChecked,
  borrarObjeto,
  onDeleteList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = arrLista;
  if (sortBy === "description")
    sortedItems = arrLista
      .slice()
      .sort((a, b) => a.objeto.localeCompare(b.objeto));
  if (sortBy === "packed")
    sortedItems = arrLista
      .slice()
      .sort((a, b) => Number(a.checked) - Number(b.checked));

  return (
    <div className="list">
      <ul>
        {sortedItems.length > 0 ? (
          sortedItems.map((objeto) => (
            <Item
              objeto={objeto}
              cambiarEstadoChecked={cambiarEstadoChecked}
              borrarObjeto={borrarObjeto}
            />
          ))
        ) : (
          <p className="pListaVacia">Aún no se ha añadido nada a la lista</p>
        )}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
      <button onClick={onDeleteList}>Clear list</button>
    </div>
  );
}

export default PackingList;
