import displayHomePage from "../pages/homePage";
import { clearPageContent } from "./DomModule";

function loadPage(title = "Home") {
  clearPageContent();
  displayHomePage(title);
}

export default loadPage;
