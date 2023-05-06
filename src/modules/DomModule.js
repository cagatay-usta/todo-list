import Task from "./itemModule";
import loadPage from "./pageLoad";

const content = document.getElementById("content");
const menu = document.getElementById("menu");
const addTaskButton = document.getElementById("add-task");
const addTaskForm = document.querySelector(".add-task-container");
const addTaskFormButton = document.getElementById("form-add-button");

function clearPageContent() {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

function displayPageTitle(title) {
  const contentTitle = document.createElement("div");
  contentTitle.classList.add("content-title");
  contentTitle.innerHTML = title;
  content.appendChild(contentTitle);
}

function displayAllTasks(tasks) {
  const itemsContainer = document.createElement("div");
  itemsContainer.classList.add("items-container");

  tasks.forEach((task) => {
    itemsContainer.appendChild(task.display());
  });
  content.appendChild(itemsContainer);
}

menu.addEventListener("click", () => {
  alert("Menu Clicked");
});

function displayAddForm() {
  addTaskButton.classList.toggle("clicked");
  addTaskForm.classList.toggle("hidden");
}

function addNewTask() {
  const projectFormInput = document.getElementById(
    "project-form-input"
  );
  const addTaskDueDate = document.getElementById("date-form-input");
  const addTaskTitle = document.getElementById("title-form-input");

  const addedTask = new Task(
    addTaskTitle.value,
    addTaskDueDate.value,
    " ",
    projectFormInput.value
  );
  console.log(addedTask);
  loadPage();
}

addTaskButton.addEventListener("click", displayAddForm);
addTaskFormButton.addEventListener("click", () => {
  displayAddForm();
  addNewTask();
  loadPage();
});

export { displayAllTasks, displayPageTitle, clearPageContent };
