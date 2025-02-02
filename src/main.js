import "./style.css";

import { renderHeader } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Home } from "./pages/Home/Home";
import { Brawlers } from "./pages/Brawlers/brawlers";
import { GameModes } from "./pages/GameModes/gameModes";

const init = () => {
  renderHeader();
  Home();
  linkPage("home_link", Home);
  linkPage("brawlers_link", Brawlers);
  // linkPage("game_modes_link", GameModes);
};

init();
