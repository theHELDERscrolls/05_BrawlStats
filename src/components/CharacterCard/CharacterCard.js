import "./cardFront.css";
import "./cardBack.css";
import "./popup.css";

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
                <p class="info-popup">${
                  brawler.first_StarPowerDescription
                }</p>
              </div>
              <div class="second-star-power">
                <img src="${brawler.second_StarPowerImage}" alt="${
      brawler.second_StarPower
    }"/>
                <h4>${brawler.second_StarPower}</h4>
                <p class="info-popup">${
                  brawler.second_StarPowerDescription
                }</p>
              </div>
               ${
                 brawler.third_StarPower
                   ? `<div class="third-star-power">
                      <img src="${brawler.third_StarPowerImage}" alt="${brawler.third_StarPower}"/>
                      <h4>${brawler.third_StarPower}</h4>
                      <p class="info-popup">${brawler.third_StarPowerDescription}</p>
                    </div>`
                   : ""
               }
            </div>
            <div class="gadgets">
              <div class="first-gadget">
                <img src="${brawler.first_GadgetImage}" alt="${
      brawler.first_Gadget
    }"/>
                <h4>${brawler.first_Gadget}</h4>
                <p class="info-popup">${
                  brawler.first_GadgetDescription
                }</p>
              </div>
              ${
                brawler.second_Gadget
                  ? `<div class="second-gadget">
                      <img src="${brawler.second_GadgetImage}" alt="${brawler.second_Gadget}"/>
                      <h4>${brawler.second_Gadget}</h4>
                      <p class="info-popup">${brawler.second_GadgetDescription}</p>
                    </div>`
                  : ""
              }
            </div>
          </div>
        </div>
      </div>
    `;
  }

  section.innerHTML = card;

  // Flip effect
  const cards = section.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  /* Al hacer clic en cualquier parte de la carta, esta se voltea, excepto en los
  elementos que se indicam (star powers y gadgets). */
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (
        e.target.closest(
          ".first-star-power, .second-star-power, .third-star-power, .first-gadget, .second-gadget"
        )
      ) {
        card.classList.toggle("flipped");
      }
    });
  });

  //! Descriptions popups ERASE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // const elements = section.querySelectorAll(
  //   ".first-star-power, .second-star-power, .third-star-power, .first-gadget, .second-gadget"
  // );

  // elements.forEach((element) => {
  //   element.addEventListener("mouseover", (e) => {
  //     e.stopPropagation();
  //     element.querySelectorAll(".info-popup").forEach((popup) => {
  //       popup.classList.toggle("hidden");
  //     });
  //   });
  // });

  // section.addEventListener("mouseover", (e) => {
  //   const closePopups = section.querySelectorAll(".info-popup");
  //   closePopups.forEach((popup) => {
  //     popup.classList.add("hidden");
  //   });
  // });

  return section;
};
