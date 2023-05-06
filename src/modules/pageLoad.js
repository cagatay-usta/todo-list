import displayHomePage from "../pages/homePage";
import { clearPageContent } from "./DomModule";

function loadPage() {
  clearPageContent();
  displayHomePage();
}

export default loadPage;
