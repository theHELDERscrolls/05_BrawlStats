// Game Mods selected
let basicGameModes = [
  "Gem Grab",
  "Heist",
  "Bounty",
  "Brawl Ball",
  "Solo Showdown",
  "Duo Showdown",
  "Knockout",
  "Duels",
  "Wipeout",
  "Wipeout 5v5",
  "Brawl Ball 5v5",
  "Gem Grab 5v5",
  "Knockout 5v5",
];

export const getGameModeInfo = async () => {
  try {
    const res = await fetch("https://api.brawlify.com/v1/gamemodes");
    const data = await res.json();
    // Debbuging
    //!console.log(data); // esto está devolviendo el array normal y corriente SUBNORMAL xd

    return (data.list || data)
      .filter(
        (gameMode) =>
          basicGameModes.includes(gameMode.name) && !gameMode.disabled
      )
      .map((gameMode) => ({
        id: gameMode.scId,
        name: gameMode.name,
        description: gameMode.description,
        icon: gameMode.imageUrl,
        banner: gameMode.imageUrl2,
      }));
  } catch (error) {
    console.error(error);
    alert("An error ocurred while fetching the data. Please try again later.");
    return [];
  }
};

getGameModeInfo().then(console.log);
