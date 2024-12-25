import "./a_face_CharacterCard.css";

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
      <div class="${brawler.rarityName
        .toLowerCase()
        .replace(/\s+/g, "")} a-card-face">
        <div class="portrait-container">
          <img src="${brawler.portrait}" alt="${brawler.name}"/>
          <h3>${brawler.name}</h3>
        </div>
        <p class="">${brawler.description}</p>
      </div>
    `;
  }

  section.innerHTML = card;
  return section;
};
