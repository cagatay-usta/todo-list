import {
  displayAllTasks,
  displayPageTitle,
} from "../modules/DomModule";
import { testTasks } from "../modules/itemModule";

function displayHomePage() {
  displayPageTitle("Home");
  displayAllTasks(testTasks);
}

export default displayHomePage;
