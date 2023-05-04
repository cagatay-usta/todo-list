function createItemComponent(title) {
  const itemComponent = document.createElement("div");
  itemComponent.classList.add("item-container");
  itemComponent.innerHTML = `

        <div class="item-title">${title}</div>
        <div class="item-icons">
        <span class="material-symbols-outlined">
            edit_note
        </span>
        <span class="material-symbols-outlined"> delete </span>
        <span class="material-symbols-outlined"> done </span>
        </div>

    `;
  return itemComponent;
}

export default createItemComponent;
