"use strict";

// SECCIÓN DE QUERY-SELECTOR
// Éstos son los elementos que nos traemos de la página HTML y usamos en el código
const tasksList = document.querySelector(".js_tasksList");

const tasksInfo = document.querySelector(".js_tasksInfo");

const addInput = document.querySelector(".js_addInput");

const addTaskButton = document.querySelector(".js_addTaskButton");

const GITHUB_USER = "CCristina";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

// SECCIÓN DE DATOS
// Aquí van los arrays y las variables que contantan datos de la aplicación

let tasks = [];
function getTasksSummary() {
  let total = tasks.length; //const sera igual al tamaño del array de tasks
  let completed = 0;
  for (const task of tasks) {
    if (task.completed === true) {
      completed++; // el ++ añade 1 al completed establecido como 0.
    }
  }
  let pending = total - completed;
  return { total, completed, pending };
}
function renderTasksInfo() {
  //vamos a pintarlo. Interpolamos con ${}
  const summary = getTasksSummary();
  tasksInfo.innerHTML = `Tienes ${summary.total} tareas. ${summary.completed} Completadas. ${summary.pending} Por realizar.`;
}

// SECCIÓN DE FUNCIONES

// Estos son funciones:
//   - con código auxiliar
//   - con código que usaremos en los eventos
//   - para pintar (render) en la página.

function renderTasks() {
  for (const task of tasks) {
    if (task.completed === true) {
      tasksList.innerHTML += `<li class= "tachado">
  <input type = "checkbox" name = "${task.id}" id = "${task.id} checked>
    <label for="${task.id}">${task.name}</label>
  </li>`;
    } else {
      tasksList.innerHTML += `<li>
  <input type = "checkbox" name = "${task.id}" id = "${task.id}" >
    <label for="${task.id}">${task.name}</label>
  </li>`;
    }
  }
}

// SECCIÓN DE EVENTOS
// Estos son los eventos a los que reacciona la página
// Los más comunes son: click (en botones, enlaces), input (en ídem) y submit (en form)

// SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA
// Este código se ejecutará cuando se carga la página
// Lo más común es:
//   - Pedir datos al servidor
//   - Pintar (render) elementos en la página

fetch(SERVER_URL)
  .then((results) => results.json())
  .then((data) => {
    tasks = data.results;
    renderTasks();
    renderTasksInfo();
  })
  .catch((err) => console.error(err));

//Completa el código;
//Guarda la respuesta obtenida enla variable para el listado de tareas: `tasks`

const handleNewTask = (event) => {
  event.preventDefault();

  // 1. Recoge el nombre de la tarea

  const taskName = addInput.value;

  // 2. Crea un objeto para la nueva tarea
  const newTask = {
    name: taskName, // sustituye este string vacío por el nombre de la tarea nueva
    completed: false,
  };

  // 3. Añade la nueva tarea al array de tareas

  tasks.push(newTask);

  // 4. Vuelve a pintar las tareas
  //
  renderTasksInfo();
  renderTasks();
};

addTaskButton.addEventListener("click", handleNewTask);
