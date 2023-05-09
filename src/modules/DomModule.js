import Task from "./itemModule";
import Project from "./projectModule";
import loadPage from "./pageLoad";

const content = document.getElementById("content");
const menu = document.getElementById("menu");
const menuContainer = document.querySelector(".menu-container");
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
  button.addEventListener("click", (e) => {
    const taskContainer = e.target.closest(".item-container");
    taskContainer.firstElementChild.classList.toggle("crossed");
    Task.toggleDone(taskContainer.id);
  });
}

function displayPageTitle(title) {
  const contentTitle = document.createElement("div");
  contentTitle.classList.add("content-title");
  contentTitle.innerHTML = title;
  content.appendChild(contentTitle);
}

function displayAllTasks(tasks, title) {
  const itemsContainer = document.createElement("div");
  itemsContainer.classList.add("items-container");
  if (title === "Home") {
    tasks.forEach((task) => {
      itemsContainer.appendChild(Task.display(task));
      content.appendChild(itemsContainer);
    });
  } else {
    tasks.forEach((task) => {
      if (task.project === title) {
        itemsContainer.appendChild(Task.display(task));
        content.appendChild(itemsContainer);
      }
    });
  }

  // Assign buttons after each display
  const deleteTaskButtons = document.querySelectorAll(".delete-item-button");
  deleteTaskButtons.forEach((button) => {
    deleteClickHandler(button);
  });

  const completeTaskButtons = document.querySelectorAll(".done-button");
  completeTaskButtons.forEach((button) => {
    doneClickHandler(button);
  });
}

function addNewProject() {
  const projectFormTitleInput = document.getElementById(
    "project-title-form-input"
  );
  if (projectFormTitleInput.value) {
    // eslint-disable-next-line no-unused-vars
    const addedProject = new Project(projectFormTitleInput.value);
    projectFormTitleInput.value = "";
    loadPage();
    return true;
  }
  return false;
}

function displayAllProjects(projects) {
  // clean first if there is any present
  const menuProjectsContainer = document.querySelector(
    ".menu-projects-container"
  );
  while (menuProjectsContainer.firstChild) {
    menuProjectsContainer.removeChild(menuProjectsContainer.lastChild);
  }

  projects.forEach((project) => {
    menuProjectsContainer.appendChild(Project.display(project));
  });

  const addProjectButton = document.querySelector(".menu-new-project-button");
  const addProjectContainer = document.querySelector(".add-project-container");
  const projectFormCloseButton = document.getElementById(
    "project-form-close-button"
  );

  projectFormCloseButton.addEventListener("click", () => {
    addProjectContainer.classList.toggle("hidden");
  });

  addProjectButton.addEventListener("click", () => {
    addProjectContainer.classList.toggle("hidden");
  });

  const addProjectFormButton = document.getElementById(
    "project-form-add-button"
  );
  addProjectFormButton.addEventListener("click", () => {
    if (addNewProject()) {
      addProjectContainer.classList.toggle("hidden");
      loadPage();
    }
  });

  const projectButtons = document.querySelectorAll(".project-button");
  projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      loadPage(button.id);
    });
  });
}

menu.addEventListener("click", () => {
  const itemsContainer = document.querySelector(".items-container");
  menuContainer.classList.toggle("menu-open");
  itemsContainer.classList.toggle("menu-open");
});

function displayAddForm() {
  addTaskButton.classList.toggle("clicked");
  addTaskForm.classList.toggle("hidden");
}

function populateProjectSelectForm(projects) {
  const projectFormInput = document.getElementById("project-form-input");
  // clear first to prevent duplicates
  while (projectFormInput.firstChild) {
    projectFormInput.removeChild(projectFormInput.lastChild);
  }
  projects.forEach((project) => {
    const option = document.createElement("option");
    option.value = project.name;
    option.textContent = project.name;
    projectFormInput.appendChild(option);
  });
}

function addNewTask() {
  const projectFormInput = document.getElementById("project-form-input");
  const addTaskDueDate = document.getElementById("date-form-input");
  const addTaskTitle = document.getElementById("title-form-input");

  if (addTaskTitle.value && addTaskDueDate.value && projectFormInput.value) {
    // eslint-disable-next-line no-unused-vars
    const addedTask = new Task(
      addTaskTitle.value,
      addTaskDueDate.value,
      " ",
      projectFormInput.value
    );

    loadPage();
    return true;
  }
  return false;
}

addTaskButton.addEventListener("click", displayAddForm);
addTaskFormButton.addEventListener("click", () => {
  if (addNewTask()) {
    displayAddForm();
    loadPage();
  }
});

export {
  displayAllTasks,
  displayPageTitle,
  clearPageContent,
  displayAllProjects,
  populateProjectSelectForm,
};
