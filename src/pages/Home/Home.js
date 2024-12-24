import "./Home.css";
import { pageCleaner } from "../../utils/cleanPage";
import { a_img } from "../../components/Anchors/a_img";

export const Home = () => {
  const main = document.querySelector("main");
  pageCleaner(main);
  main.innerHTML = `
    <video id="web_video" src="/assets/videos/BS_Banner.mp4" muted autoplay loop></video>
    <section id="banner" class="display_flex_center">
      <h1>Dominate the Arena, Know Your Brawlers</h1>
      <h2>Discover stats, game modes, and secrets to improve in every match.</h2>
      <div id="social_media" class="display_flex_center">
        ${a_img(
          "social_link display_flex_center",
          "https://supercell.com/en/games/brawlstars/",
          "social_img",
          "https://img.icons8.com/?size=100&id=120061&format=png&color=121212",
          "Supercell logo"
        )}
        ${a_img(
          "social_link display_flex_center",
          "https://apps.apple.com/us/app/brawl-stars/id1229016807",
          "social_img",
          "https://img.icons8.com/?size=100&id=30659&format=png&color=121212",
          "Apple logo"
        )}
        ${a_img(
          "social_link display_flex_center",
          "https://play.google.com/store/apps/details?id=com.supercell.brawlstars&hl=en",
          "social_img",
          "https://img.icons8.com/?size=100&id=22980&format=png&color=121212",
          "Apple logo"
        )}
      </div>
    </section>  
  `;
};
