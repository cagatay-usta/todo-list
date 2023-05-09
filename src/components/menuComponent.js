function createMenuComponent(project) {
  const menuComponent = document.createElement("div");
  menuComponent.classList.add("menu-button");
  menuComponent.id = project.name;
  menuComponent.textContent = project.name;
  return menuComponent;
}

export default createMenuComponent;
