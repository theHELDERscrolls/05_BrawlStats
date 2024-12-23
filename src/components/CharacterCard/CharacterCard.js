//! ESTÁ MAL LA RUTA!!!!!!!!!!!!!!!! import "./CharacterCard.css";

import { fetchBrawlersInfo } from "../../utils/getBrawlersInfo.js";

export const characterCard = async () => {
  const brawlers = await fetchBrawlersInfo();
  console.log(brawlers);

  // Creamos dinámicamente el HTML
  let card = "";

  for (const brawler of brawlers) {
    card += `
    <div class="card-container">
        <img src="${brawler.portrait}" alt="${brawler.name}" />
    </div>
    `;
  }
  return card;
};
