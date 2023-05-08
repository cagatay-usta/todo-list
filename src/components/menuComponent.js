function createMenuComponent(project) {
  const menuComponent = document.createElement("div");
  menuComponent.classList.add("menu-button");
  menuComponent.id = project;
  menuComponent.textContent = project;
  return menuComponent;
}

export default createMenuComponent;
