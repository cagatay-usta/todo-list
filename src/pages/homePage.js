import {
  displayAllTasks,
  displayPageTitle,
  displayAllProjects,
} from "../modules/DomModule";
import { tasks } from "../modules/itemModule";
import { projects } from "../modules/projectModule";

function displayHomePage() {
  displayPageTitle("Home");
  displayAllTasks(tasks);
  displayAllProjects(projects);
}

export default displayHomePage;
