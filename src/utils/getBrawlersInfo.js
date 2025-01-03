export const fetchBrawlersInfo = async () => {
  try {
    const res = await fetch("https://api.brawlify.com/v1/brawlers");
    const data = await res.json();
    return (data.list || data).map((brawler) => ({
      id: brawler.id,
      portrait: `https://raw.githubusercontent.com/Brawlify/CDN/master/brawlers/portraits/${brawler.id}.png`,
      name: brawler.name,
      image: brawler.imageUrl,
      emoji: brawler.imageUrl3,
      rarityName: brawler.rarity.name,
      rarityColor: brawler.rarity.color,
      description: brawler.descriptionHtml,

      //1º star power
      first_StarPower: brawler.starPowers[0]?.name || null,
      first_StarPowerDescription:
        brawler.starPowers[0]?.descriptionHtml || null,
      first_StarPowerImage: brawler.starPowers[0]?.imageUrl || null,

      //2º star power
      second_StarPower: brawler.starPowers[1]?.name || null,
      second_StarPowerDescription:
        brawler.starPowers[1]?.descriptionHtml || null,
      second_StarPowerImage: brawler.starPowers[1]?.imageUrl || null,

      //3º star power
      third_StarPower: brawler.starPowers[2]?.name || null,
      third_StarPowerDescription:
        brawler.starPowers[2]?.descriptionHtml || null,
      third_StarPowerImage: brawler.starPowers[2]?.imageUrl || null,

      // 1º gadget
      first_Gadget: brawler.gadgets[0]?.name || null,
      first_GadgetDescription: brawler.gadgets[0]?.descriptionHtml || null,
      first_GadgetImage: brawler.gadgets[0]?.imageUrl || null,

      // 2º gadget
      second_Gadget: brawler.gadgets[1]?.name || null,
      second_GadgetDescription: brawler.gadgets[1]?.descriptionHtml || null,
      second_GadgetImage: brawler.gadgets[1]?.imageUrl || null,
    }));
  } catch (error) {
    console.error(error);
    alert("An error occurred while fetching the data. Please try again later.");
    return [];
  }
};
