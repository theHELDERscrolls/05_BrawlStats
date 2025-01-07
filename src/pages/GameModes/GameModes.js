import "./GameModes.css";

import { pageCleaner } from "../../utils/cleanPage";
import { GameModeCard } from "../../components/GameModeCard/GameModeCard";

export const GameModes = async () => {
  const main = document.querySelector("main");
  pageCleaner(main);
  const gameModes = await GameModeCard();
  main.appendChild(gameModes);
};
