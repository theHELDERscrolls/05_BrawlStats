import "./Navbar.css";
import { a_simple } from "../Anchors/a_simple";

export const header = () => {
  const header = document.querySelector("header");
  header.innerHTML = `
      <img id="web_logo" src="/assets/images/BS_logo.png" alt="weblogo">
      <nav>
        <ul class="display_flex_center">
          <li class="display_flex_center">
            ${a_simple("home_link", "#home", "Home").outerHTML}
          </li>
          <li class="display_flex_center">
            ${a_simple("brawlers_link", "#brawlers", "Brawlers").outerHTML}
          </li>
          <li class="display_flex_center">
            ${a_simple("game_modes_link", "#game_modes", "Games").outerHTML}
          </li>
          <li class="display_flex_center">
            ${a_simple("players_link", "#players", "Players").outerHTML}
          </li>
          <li class="display_flex_center">
            ${a_simple("clubs_link", "#clubs", "Clubs").outerHTML}
          </li>
        </ul>
      </nav>
      <a href="mailto:manuhelderrui@gmail.com?subject=Website suggest" id="suggest_link">Suggest</a>
      <img id="web_menu" class="hidden" src="/assets/icons/ham_menu.svg" alt="Menu icon">
     `;
};
