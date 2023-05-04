function createItemComponent() {
  const itemComponent = document.createElement("div");
  itemComponent.innerHTML = `

    <div class="items-container">
    <div class="item-container">
        <div class="item-title">Get dressed</div>
        <div class="item-icons">
        <span class="material-symbols-outlined">
            edit_note
        </span>
        <span class="material-symbols-outlined"> delete </span>
        <span class="material-symbols-outlined"> done </span>
        </div>
    </div>
    <div class="item-container">
        <div class="item-title">Get dressed</div>
        <div class="item-icons">
        <span class="material-symbols-outlined">
            edit_note
        </span>
        <span class="material-symbols-outlined"> delete </span>
        <span class="material-symbols-outlined"> done </span>
        </div>
    </div>
    </div>

    `;
  return itemComponent;
}

export default createItemComponent;
