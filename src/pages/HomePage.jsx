import GameRow from "../Components/GameRow/GameRow";
import Hero from "../Layouts/Hero/Hero";
import Platforms from "../Layouts/Platforms/Platforms";

const HomePage = () => {
  return (
    <>
      <Platforms />
      <Hero />
      <GameRow category={"Best Games"} />
    </>
  );
};

export default HomePage;
