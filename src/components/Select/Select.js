import "./Select.css";

export const selectFilter = () => {
  const main = document.querySelector("main");
  const select = document.createElement("select");
  select.id = "filter";
  select.innerHTML = `
      <option value="all">All</option>
      <option value="legendary">Legendary</option>
      <option value="mythic">Mythic</option>
      <option value="epic">Epic</option>
      <option value="superrare">Super Rare</option>
      <option value="rare">Rare</option>
    `;
  main.appendChild(select);
};
