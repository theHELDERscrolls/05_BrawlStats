import "./navbar.css";
import { a_simple } from "../Anchors/a_simple";

export const renderHeader = () => {
  const main = document.querySelector("main");
  const header = document.querySelector("header");
  header.innerHTML = `
  <div id=web_title_container>
    <img id="web_logo" src="/assets/images/BS_logo.png" alt="weblogo">
    <h1 id="web_title">Brawl Stats</h1>
  </div>
  <img id="web_menu" src="/assets/icons/ham_menu.svg" alt="Menu icon">
  <nav id="web_nav">
    <h3>Menu</h3>
    <ul>
      <li>
        ${a_simple("home_link", "#home", "Home").outerHTML}
      </li>
      <li>
        ${a_simple("brawlers_link", "#brawlers", "Brawlers").outerHTML}
      </li>
      <li>
        ${a_simple("game_modes_link", "#game_modes", "Games").outerHTML}
      </li>
      <li>
        ${a_simple("players_link", "#players", "Players").outerHTML}
      </li>
      <li>
        ${a_simple("clubs_link", "#clubs", "Clubs").outerHTML}
      </li>
      <li>
        <a href="mailto:manuhelderrui@gmail.com?subject=Website suggest" id="suggest_link">Suggest</a>
      </li>
    </ul>
  </nav>
  `;
};