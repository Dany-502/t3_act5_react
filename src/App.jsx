import React, { useState } from "react";
import "./App.css";
import "./components/contenedorTareas.css";
import Encabezado from "./components/encabezado";
import IngresarTarea from "./components/ingresarTarea";
import TareaItem from "./components/tareaItem";

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (indexAEliminar) => {
    setTareas(tareas.filter((_, index) => index !== indexAEliminar));
  };

  return (
    <section className="Enc">
      <Encabezado />
      <section className="contenedorTareas">
        <p>Ingrese sus tareas:</p>
        <IngresarTarea tareaIngresada={agregarTarea} />
        <div className="lista-contenedor">
          {tareas.map((tarea, index) => (
            <TareaItem
              key={index}
              contextoTarea={tarea}
              alEliminar={() => eliminarTarea(index)}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default App;
