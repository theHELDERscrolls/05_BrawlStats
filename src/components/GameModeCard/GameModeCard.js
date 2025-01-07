import "./GameModeCard.css";

import { getGameModeInfo } from "../../utils/getGameModeInfo";

export const GameModeCard = async () => {
  const ul = document.createElement("ul");
  ul.id = "gameMode-list";
  const gameModes = await getGameModeInfo();
  console.log(gameModes); //!!!!!!!!!!!!!!

  for (const gameMode of gameModes) {
    if (!gameMode.disabled) {
      const li = document.createElement("li");
      li.classList.add("gameMode-card");
      li.innerHTML = `
        <h3>${gameMode.name}</h3>
        <p>${gameMode.description}</p>
        <img src="${gameMode.icon}" alt="${gameMode.name}"/>
        <img src="${gameMode.banner}" alt="${gameMode.name}"/>
        `;
      ul.appendChild(li);
    }
  }
  return ul;
};
