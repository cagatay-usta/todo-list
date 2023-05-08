import createMenuComponent from "../components/menuComponent";

export default class Project {
  constructor(name) {
    this.name = name;
    this.add();
  }

  add() {
    projects.push(this);
    Project.storeAllProjects();
  }

  static storeAllProjects() {
    if (window.localStorage.getItem("localProjects")) {
      window.localStorage.removeItem("localProjects");
    }
    window.localStorage.setItem("localProjects", JSON.stringify(projects));
  }

  static retrieveAllItems() {
    return JSON.parse(window.localStorage.getItem("localProjects"));
  }

  static display(project) {
    return createMenuComponent(project);
  }
}

const projects = Project.retrieveAllItems() || ["Home", "New Project", "About"];
export { projects };
