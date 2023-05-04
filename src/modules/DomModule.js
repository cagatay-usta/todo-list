const content = document.getElementById("content");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  alert("Menu Clicked");
});

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

export { displayAllTasks, displayPageTitle };
