import "./Brawlers.css";

import { pageCleaner } from "../../utils/cleanPage";
import { characterCard } from "../../components/CharacterCard/CharacterCard";
import { selectFilter } from "../../components/Select/select";
import { filterBrawlers } from "../../utils/filter";

export const Brawlers = async () => {
  const main = document.querySelector("main");
  pageCleaner(main);
  selectFilter();

  const section = document.createElement("section");
  section.id = "brawlers";
  main.appendChild(section);

  await characterCard();
  filterBrawlers();
};
