export const fetchBrawlersInfo = async () => {
  try {
    const res = await fetch("https://api.brawlify.com/v1/brawlers");
    const data = await res.json();
    return (data.list || data).map((brawler) => ({
      id: brawler.id,
      portrait: `https://raw.githubusercontent.com/Brawlify/CDN/master/brawlers/portraits/${brawler.id}.png`,
      model: `https://raw.githubusercontent.com/Brawlify/CDN/master/brawlers/models/${brawler.id}.png`,
      name: brawler.name,
      image: brawler.imageUrl,
      emjoi: brawler.imageUrl3,
      rarityName: brawler.rarity.name,
      rarityColor: brawler.rarity.color,
      description: brawler.descriptionHtml,
      first_StarPower: brawler.starPowers[0].name,
      first_StarPowerDescription: brawler.starPowers[0].descriptionHtml,
      first_StarPowerImage: brawler.starPowers[0].imageUrl,
      second_StarPower: brawler.starPowers[1].name,
      second_StarPowerDescription: brawler.starPowers[1].descriptionHtml,
      second_StarPowerImage: brawler.starPowers[1].imageUrl,
      first_Gadget: brawler.gadgets[0].name,
      first_GadgetDescription: brawler.gadgets[0].descriptionHtml,
      first_GadgetImage: brawler.gadgets[0].imageUrl,
      second_Gadget: brawler.gadgets[1]?.name,
      second_GadgetDescription: brawler.gadgets[1]?.descriptionHtml,
      second_GadgetImage: brawler.gadgets[1]?.imageUrl,
    }));
  } catch (error) {
    console.error(error);
    alert("An error occurred while fetching the data. Please try again later.");
    return [];
  }
};
