import createItemComponent from "../components/itemComponent";

const content = document.querySelector("#content");
function createHomePage() {
  const contentTitle = document.createElement("div");
  contentTitle.innerHTML = `
    <div class="content-title">Home</div>
    `;

  content.appendChild(contentTitle);
  content.appendChild(createItemComponent());
}

export default createHomePage;
