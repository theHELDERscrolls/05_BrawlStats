/* Lo que quiero es coger la información de los modos de juego para pintar en la pantalla las propiedades
que quiera. En este caso no hará falta ningún tipo de parámetro porque simplemente se va a pintar.
Obtenemos los datos de la API y listo. */

export const getGameModeInfo = async () => {
  try {
    const res = await fetch("https://api.brawlify.com/v1/gamemodes");
    const data = await res.json();
    //Depurar
    console.log(data);
    
    return (data.list || data).map((gameMode) => ({
      id: gameMode.id,
      name: gameMode.name,
      disabled: gameMode.disabled,
      bgColor: gameMode.bgColor, //! <------- REV
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