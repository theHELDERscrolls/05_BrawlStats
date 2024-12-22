import "./Home.css";
import { pageCleaner } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  pageCleaner(main);
  main.innerHTML = `
    <video id="web_video" src="/assets/videos/BS_Banner.mp4" muted autoplay loop></video>
    <h1>TEXTO DE PRUEBA</h1>  
  `;
};
