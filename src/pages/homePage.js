import {
  displayAllTasks,
  displayPageTitle,
  displayAllProjects,
  populateProjectSelectForm,
} from "../modules/DomModule";
import { tasks } from "../modules/itemModule";
import { projects } from "../modules/projectModule";

function displayHomePage(title) {
  displayPageTitle(title);
  displayAllTasks(tasks, title);
  displayAllProjects(projects);
  populateProjectSelectForm(projects);
}

export default displayHomePage;
