import "./CharacterCard.css";

import { fetchBrawlersInfo } from "../../utils/getBrawlersInfo.js";

export const characterCard = async () => {
  const brawlersData = await fetchBrawlersInfo();
  const characterContainer = document.getElementById("brawlers");

  brawlersData.forEach((brawler) => {
    const card = document.createElement("div");
    card.classList.add("character_card", `${brawler.rarityName.toLowerCase()}`);

    card.innerHTML = `
      <div class="portrait_container">
        <img src="${brawler.portrait}" alt="${brawler.name.toLowerCase()} portrait"/>
        <h3>${brawler.name}</h3>
      </div>
      <p>${brawler.description}</p>
    `;
    characterContainer.appendChild(card);
  });
};