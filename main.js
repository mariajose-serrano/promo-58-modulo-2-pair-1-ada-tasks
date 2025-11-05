"use strict";

// SECCIÓN DE QUERY-SELECTOR
// Éstos son los elementos que nos traemos de la página HTML y usamos en el código
const tasksList = document.querySelector(".js_tasksList");


// SECCIÓN DE DATOS
// Aquí van los arrays y las variables que contantan datos de la aplicación
const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

const task = tasks[0];
console.log(task);
// SECCIÓN DE FUNCIONES
// Estos son funciones:
//   - con código auxiliar
//   - con código que usaremos en los eventos
//   - para pintar (render) en la página.


// SECCIÓN DE EVENTOS
// Estos son los eventos a los que reacciona la página
// Los más comunes son: click (en botones, enlaces), input (en ídem) y submit (en form)



// SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA
// Este código se ejecutará cuando se carga la página
// Lo más común es:
//   - Pedir datos al servidor
//   - Pintar (render) elementos en la página
function renderTasks() {
  for (const task of tasks) {
    if (task.completed === true) {
      tasksList.innerHTML +=
        `<li class= "tachado">
  <input type = "checkbox" name = "${task.id}" id = "${task.id} checked>
    <label for="${task.id}">${task.name}</label>
  </li>` }
    else {
      tasksList.innerHTML +=
        `<li>
  <input type = "checkbox" name = "${task.id}" id = "${task.id}" >
    <label for="${task.id}">${task.name}</label>
  </li>`;
    }
  }
}
renderTasks();
//Completa el código;
//Guarda la respuesta obtenida enla variable para el listado de tareas: `tasks`
