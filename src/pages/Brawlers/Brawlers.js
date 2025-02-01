import "./Brawlers.css";

import { pageCleaner } from "../../utils/cleanPage";
import { characterCard } from "../../components/CharacterCard/CharacterCard";
import { selectFilter } from "../../components/Select/Select";
import { filterBrawlers } from "../../utils/filter";

export const Brawlers = async () => {
  const main = document.querySelector("main");
  pageCleaner(main);

  /* Vamos a crear el section donde irán a pintarse los personajes */
  const section = document.createElement("section");
  section.id = "brawlers";
  main.appendChild(section);

  /* Añadimos el "botón" de filtrar */
  selectFilter();

  /* Pintamos las tarjetas de cada personaje */
  await characterCard();
  filterBrawlers();
};
