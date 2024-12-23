import "./Brawlers.css";

import { pageCleaner } from "../../utils/cleanPage";
import { characterCard } from "../../components/CharacterCard/CharacterCard";

export const Brawlers = async () => {
  const main = document.querySelector("main");
  pageCleaner(main);
  const cardsHTML = await characterCard();
  main.innerHTML = cardsHTML;
};
