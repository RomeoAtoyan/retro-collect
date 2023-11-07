import { useEffect, useState } from "react";
import GameRow from "../Components/GameRow/GameRow";
import Hero from "../Layouts/Hero/Hero";
import PlatformsSlider from "../Layouts/PlatformsSlider/Platforms";

const HomePage = () => {
  const [homeGames, setHomeGames] = useState();

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=abcea975c5f046518a4ebd14ccb949d0`)
      .then((res) => res.json())
      .then((data) => {
        setHomeGames(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <PlatformsSlider />
      <Hero />
      <GameRow doNotPaginate games={homeGames} category={"Best Games"} />
    </>
  );
};

export default HomePage;
