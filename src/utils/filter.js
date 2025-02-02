export const filterBrawlers = () => {
  const filter = document.querySelector("#filter");
  const cards = document.querySelectorAll(".character_card");
  const h3 = document.querySelectorAll(".brawler_name");

  filter.addEventListener("change", () => {

    /* Necesitamos eliminar toda las clases antes de indicar la nueva */
    filter.classList.forEach((cls) => {
      filter.classList.remove(cls);
    });

    switch (filter.value) {
      case "all":
        cards.forEach((card) => (card.style.display = "none"));
        cards.forEach((card) => (card.style.display = "block"));
        break;

      case "legendary":
        filter.classList.add("option_legendary");
        cards.forEach((card) => {
          card.classList.contains("legendary")
            ? (card.style.display = "block")
            : (card.style.display = "none");
        });
        break;

      case "mythic":
        filter.classList.add("option_mythic");
        cards.forEach((card) => {
          card.classList.contains("mythic")
            ? (card.style.display = "block")
            : (card.style.display = "none");
        });
        break;

      case "epic":
        filter.classList.add("option_epic");
        cards.forEach((card) => {
          card.classList.contains("epic")
            ? (card.style.display = "block")
            : (card.style.display = "none");
        });
        break;

      case "superrare":
        filter.classList.add("option_superrare");
        cards.forEach((card) => {
          card.classList.contains("superrare")
            ? (card.style.display = "block")
            : (card.style.display = "none");
        });
        break;

      case "rare":
        filter.classList.add("option_rare");
        cards.forEach((card) => {
          card.classList.contains("rare") || card.classList.contains("common")
            ? (card.style.display = "block")
            : (card.style.display = "none");
        });
        break;
    }
  });
};
