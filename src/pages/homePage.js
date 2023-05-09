import {
  displayAllTasks,
  displayPageTitle,
  displayAllProjects,
  populateProjectSelectForm,
} from "../modules/DomModule";
import { tasks } from "../modules/itemModule";
import { projects } from "../modules/projectModule";

function displayHomePage() {
  displayPageTitle("Home");
  displayAllTasks(tasks);
  displayAllProjects(projects);
  populateProjectSelectForm(projects);
}

export default displayHomePage;
