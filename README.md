# t3_act5: Lista de tareas

* **Institución:** Instituto Tecnológico de Oaxaca
* **Carrera:** Ingeniería en Sistemas Computacionales
* **Materia:** Programación Web
* **Estudiante:** Rodriguez Juarez Jose Daniel
* **No.Control:** 22161222
* **Grupo:** 7SC
* **GitHub Pages:** 


## Descripción 
Consiste en una pagina web en la cual el usuario puede ingresar tareas y eliminar las que desee de forma dinámica sin necesidad de recargar la página. 

La aplicación captura la tarea ingresada por el usuario, lo agrega en un objeto de tipo estado donde se almacena la tarea y el estado de la misma, donde posteriormente se renderiza un componente por cada tarea y un boton que permite eliminarla sin afectar las demás

---

## Componentes utilizados

### Encabezado.jsx / .css (Componente funcional simple)
Componente encargado de renderizar el encabezado de la página. Se le asigna estilos por medio de un archivo css externo.

```jsx
function Encabezado() {
    return (
        <div className="encabezado">
            <h1>Creador de tareas</h1>
            <h2>Por Rodriguez Juarez Jose Daniel</h2>
        </div>
    );
}
```

### IngresarTarea.jsx / .css (Componente que usa estado / realiza cambios)
Componente encargado de renderizar el campo de entrada de texto donde el usuario va a ingresar su tarea. Una vez que agrega algo dentro del campo, se presiona el boton "Agregar", lo que provoca que el texto se almacene en el estado del componente padre, que es App.jsx.

```jsx
function IngresarTarea({ tareaIngresada }) {
    const [textoEntrada, setTextoEntrada] = useState("");

    const manejarAgregar = () => {
        if (textoEntrada.trim() !== "") {
            tareaIngresada(textoEntrada);
            setTextoEntrada(""); // Limpia el input
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
```

### TareaItem.jsx / .css (Componente que recibe y muestra props)
Componente encargado de renderizar la tarea ingresada por el usuario y un boton que permite eliminarla sin afectar las demás. Al presionar el boton se llama a la función eliminarTarea del componente padre, que es App.jsx, que se encarga de eliminar la tarea del estado.

```jsx
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
```

### Lista renderizada dinámicamente a partir de un arreglo (usando .map()).
Lista que se encarga de almacenar las tareas ingresadas por el usuario y renderiza 
las tareas en la página. Se encarga de mostrar la tarea y un boton que permite eliminarla sin afectar las demás. 

```jsx
<div className="lista-contenedor">
  {tareas.map((tarea, index) => (
    <TareaItem
      key={index}
      contextoTarea={tarea}
      alEliminar={() => eliminarTarea(index)}
    />
  ))}
</div>
```

---
# Vista de la interfaz

Interfaz donde se puede apreciar el funcionamiento de la aplicación.

![Interfaz](capturas/VistaInterfaz.png)

# Sección de preguntas

### a) ¿Qué diferencia hay entre props y state en React?
R: Un prop es un parametro o argumento no modificable que un componente puede recibir del componente padre, mientras que el state es un valor interno del componente que puede cambiar con el tiempo.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
R: Las keys permiten a react a identificar de forma unica cada elemento de una lista de manera interna. Cuando un elmento de la lista cambia, react utiliza la key para identificar que elemento cambio y actualizar solo ese elemento, en lugar de actualizar toda la lista.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
R: useState es una función que permite a los componentes funcionales agregarles un estado. Al invocarlo, hay que indicarle el valor inicial del estado, donde posteriormente nos retorna un arreglo con dos valores: el valor actual del estado y una función que permite actualizar el estado. 

Por ejemplo en mi aplicación, en la función IngresarTarea del componente IngresarTarea.jsx, se utiliza useState para almacenar el valor que el usuario ingresa en el input de tipo texto.

### d) Enlace del repositorio de Github
https://github.com/Dany-502/t3_act5_react

### c) Pagina desplegado en GitHub Pages
