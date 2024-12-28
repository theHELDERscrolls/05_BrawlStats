import "./cardFront.css";
import "./cardBack.css";

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
      <div class="container">
        <div class="card">
          <div class="${brawler.rarityName
            .toLowerCase()
            .replace(/\s+/g, "")} front">
            <div class="portrait-container">
              <img src="${brawler.portrait}" alt="${brawler.name}"/>
              <h3>${brawler.name}</h3>
            </div>
            <p>${brawler.description}</p>
          </div>
          <div class="${brawler.rarityName
            .toLowerCase()
            .replace(/\s+/g, "")} back">
            <div class="character-name">
              <img src="${brawler.emoji}" alt="${brawler.name}"/>
              <h3>${brawler.name}</h3>
              <h4>${brawler.rarityName}</h4>
            </div>
            <div class="star-powers">
              <div class="first-star-power">
                <img src="${brawler.first_StarPowerImage}" alt="${
      brawler.first_StarPower
    }"/>
                <h4>${brawler.first_StarPower}</h4>
              </div>
              <div class="second-star-power">
                <img src="${brawler.second_StarPowerImage}" alt="${
      brawler.second_StarPower
    }"/>
                <h4>${brawler.second_StarPower}</h4>
              </div>
            </div>
            <div class="gadgets">
              <div class="first-gadget">
                <img src="${brawler.first_GadgetImage}" alt="${
      brawler.first_Gadget
    }"/>
                <h4>${brawler.first_Gadget}</h4>
              </div>
              <div class="second-gadget">
                <img src="${brawler.second_GadgetImage}" alt="${
      brawler.second_Gadget
    }"/>
                <h4>${brawler.second_Gadget}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  section.innerHTML = card;
  return section;
};
