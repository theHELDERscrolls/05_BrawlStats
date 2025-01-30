import "./Brawlers.css";

import { pageCleaner } from "../../utils/cleanPage";
//! IMPORTAR FUNCIÓN PARA PINTAR A LOS BRAWLERS

export const Brawlers = async () => {
  const main = document.querySelector("main");
  pageCleaner(main);

  /* Vamos a crear el section donde irán a pintarse los personajes */
  const section = document.createElement("section");
  section.id="brawlers-cards";
  main.appendChild(section);
};