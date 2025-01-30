import "./Brawlers.css";

import { pageCleaner } from "../../utils/cleanPage";
import { characterCard } from "../../components/CharacterCard/CharacterCard";

export const Brawlers = async () => {
  const main = document.querySelector("main");
  pageCleaner(main);

  /* Vamos a crear el section donde irán a pintarse los personajes */
  const section = document.createElement("section");
  section.id = "brawlers";
  main.appendChild(section);

  /* Pintamos las tarjetas de cada personaje */
  await characterCard();
};
