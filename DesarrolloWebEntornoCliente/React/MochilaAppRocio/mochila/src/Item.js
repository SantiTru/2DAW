export function Item({ objeto, cambiarEstadoChecked, borrarObjeto }) {
  return (
    <li key={objeto.idObjeto}>
      <input
        type="checkbox"
        onChange={() => cambiarEstadoChecked(objeto.idObjeto)}
        checked={objeto.checked}
      />
      <p className={objeto.checked ? "empaquetado" : ""}>
        {objeto.unidades} {objeto.objeto}
      </p>

      <p className="cruzRoja" onClick={() => borrarObjeto(objeto.idObjeto)}>
        x
      </p>
    </li>
  );
}
