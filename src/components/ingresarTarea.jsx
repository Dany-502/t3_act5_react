import React, { useState } from "react";
import "./ingresarTarea.css";

function IngresarTarea({ tareaIngresada }) {
    const [textoEntrada, setTextoEntrada] = useState("");

    const manejarAgregar = () => {
        if (textoEntrada.trim() !== "") {
            tareaIngresada(textoEntrada);
            setTextoEntrada("");
        }
    };

    return (
        <div className="ingresarTarea">
            <input
                type="text"
                className="input"
                placeholder="Ingresa tu tarea"
                value={textoEntrada}
                onChange={(evento) => setTextoEntrada(evento.target.value)}
            />
            <button onClick={manejarAgregar}>Agregar</button>
        </div>
    );
}

export default IngresarTarea;