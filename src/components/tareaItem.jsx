import React from "react";
import "./tareaItem.css";
function TareaItem({ contextoTarea, alEliminar }) {
    return (
        <div className="tareaItem">
            <p>{contextoTarea}</p>
            <button className="boton-eliminar" onClick={alEliminar}>
                Eliminar
            </button>
        </div>
    );
}
export default TareaItem;