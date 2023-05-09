import createMenuComponent from "../components/menuComponent";

export default class Project {
  constructor(name) {
    this.name = name;
    this.add();
  }

  add() {
    projects.splice(-1, 0, this);
    Project.storeAllProjects();
  }

  static remove(project) {
    const projectIndex = projects.indexOf(project);
    if (projectIndex > -1) {
      projects.splice(projectIndex, 1);
    }
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

const projects = Project.retrieveAllItems() || [
  { name: "Work" },
  { name: "Study" },
];
export { projects };
