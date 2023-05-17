function createItemComponent(task) {
  const itemComponent = document.createElement("div");
  itemComponent.classList.add("item-container");
  itemComponent.id = task.id;
  const isDone = task.done ? "crossed" : "";
  itemComponent.innerHTML = `

        <div class="item-title ${isDone}">${task.title}</div>
        <div class="item-icons">
        <span class="material-symbols-outlined edit-item-button">
            edit_note
        </span>
        <span class="material-symbols-outlined delete-item-button"> delete </span>
        <span class="material-symbols-outlined done-button"> done </span>
        </div>

    `;
  return itemComponent;
}

export default createItemComponent;
