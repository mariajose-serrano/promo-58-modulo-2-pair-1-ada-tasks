"use strict";

// SECCIÓN DE QUERY-SELECTOR
// Éstos son los elementos que nos traemos de la página HTML y usamos en el código

const tasksList = document.querySelector(".js_tasksList");

// SECCIÓN DE DATOS
// Aquí van los arrays y las variables que contantan datos de la aplicación

let tasks = [];

const GITHUB_USER = "s-minaya";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;
// SECCIÓN DE FUNCIONES
// Estos son funciones:
//   - con código auxiliar
//   - con código que usaremos en los eventos
//   - para pintar (render) en la página.

let oneTask = tasks[0];

function renderAllTasks() {
  tasksList.innerHTML = "";
  for (const oneTask of tasks) {
    if (oneTask.completed === true) {
      tasksList.innerHTML += ` <li class="tachado">${oneTask.name}</li>`;
    } else {
      tasksList.innerHTML += ` <li>${oneTask.name}</li>`;
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
  .then((response) => response.json())

  .then((data) => {
    console.log(data);
    tasks = data;
    renderAllTasks();
  })
  .catch((error) => console.error("Error al cargar tareas:", error));
//Completa el código;
//Guarda la respuesta obtenida enla variable para el listado de tareas: `tasks`
