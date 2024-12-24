import "./CharacterCard.css";

import { fetchBrawlersInfo } from "../../utils/getBrawlersInfo.js";

export const characterCard = async () => {
  const section = document.createElement("section");
  section.id = "brawlers-cards";
  const brawlers = await fetchBrawlersInfo();
  console.log(brawlers);

  // Creamos dinámicamente el HTML
  let card = "";

  for (const brawler of brawlers) {
    card += `
      <div class="${brawler.rarityName.toLowerCase()} a-card-face">
        <img src="${brawler.portrait}" alt="${brawler.name}"/>
        <h3>${brawler.name}</h3>
        <p>${brawler.description}</p>
      </div>
    `;
  }

  section.innerHTML = card;
  return section;
};
