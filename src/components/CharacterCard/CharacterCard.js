import "./CharacterCard.css";

import { fetchBrawlersInfo } from "../../utils/getBrawlersInfo.js";

export const characterCard = async () => {
  const brawlersData = await fetchBrawlersInfo();
  const characterContainer = document.getElementById("brawlers");

  brawlersData.forEach((brawler) => {
    const card = document.createElement("div");
    card.classList.add(
      "character_card",
      `${brawler.rarityName.toLowerCase().replace(/\s+/g, "")}`
    );

    card.innerHTML = `
      <div class="portrait_container">
        <img class="portrait_img" src="${brawler.portrait}" alt="${brawler.name
      .toLowerCase()
      .replace(/\s+/g, "")} portrait"/>
        <h3>${brawler.name}</h3>
      </div>
      <p>${brawler.description}</p>
    `;
    characterContainer.appendChild(card);
  });

  /* Añadir función del loader desués de esto
  Tenemos que seleccionar todas las imágenes de los brawlers con un querySelectorAll
  y la clase.
  
  Iniciamos una variable en 0.
  
  Iteramos entre todas esas clases para ver si se han cargado usando un forEach y
  comprobando la carga con .onload. Hacemos que la variable ++ y cuando esa variable
  sea === a la longitud de las imágenes del querySelectorAll que desaparezca el
  loader*/
};
