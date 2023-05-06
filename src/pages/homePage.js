import {
  displayAllTasks,
  displayPageTitle,
} from "../modules/DomModule";
import { tasks } from "../modules/itemModule";

function displayHomePage() {
  displayPageTitle("Home");
  displayAllTasks(tasks);
}

export default displayHomePage;
