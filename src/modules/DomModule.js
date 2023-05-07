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

function deleteClickHandler(button) {
  button.addEventListener("click", (e) => {
    const taskContainer = e.target.closest(".item-container");
    Task.remove(taskContainer.id);
    taskContainer.remove();
  });
}

function doneClickHandler(button) {
  button.addEventListener("click", () => {
    button
      .closest(".item-container")
      .firstElementChild.classList.toggle("crossed");
  });
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
    console.log(task);
    itemsContainer.appendChild(Task.display(task));
  });
  content.appendChild(itemsContainer);

  // Assign buttons after each display
  const deleteTaskButtons = document.querySelectorAll(
    ".delete-item-button"
  );
  deleteTaskButtons.forEach((button) => {
    deleteClickHandler(button);
  });

  const completeTaskButtons =
    document.querySelectorAll(".done-button");
  completeTaskButtons.forEach((button) => {
    doneClickHandler(button);
  });
}

menu.addEventListener("click", () => {
  // PLACEHOLDER DEBUG
  Task.clearAllItems()
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
