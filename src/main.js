import "./style.css";

import { header } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Home } from "./pages/Home/Home";

const init = () => {
  header();
  Home();
  linkPage("home_link", Home);
};

init();
