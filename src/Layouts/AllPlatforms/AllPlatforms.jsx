import { retroPlatforms } from "../../Consoles/retroPlatforms";
import SNES from "../../Components/GameCovers/SNES/Snes";
import NES from "../../Components/GameCovers/NES/Nes";
import Genesis from "../../Components/GameCovers/Genesis/Genesis";
import PlayStation from "../../Components/GameCovers/PS1/PS1";
import PlayStation2 from "../../Components/GameCovers/PS2/PS2";
import Atari from "../../Components/GameCovers/Atari2600/Atari";
import NeoGeo from "../../Components/GameCovers/NeoGeo/NeoGeo";
import Dreamcast from "../../Components/GameCovers/Dreamcast/Dreamcast";
import platformsGIF from "./Images/platforms.gif";
import GoBackButton from "../../Components/GoBackButton/GoBackButton.jsx";
import styles from "./AllPlatforms.module.scss";

const AllPlatforms = () => {
  const whichPlatform = (platformID) => {
    switch (platformID) {
      case 79:
        return <SNES />;
      case 49:
        return <NES />;
      case 167:
        return <Genesis />;
      case 27:
        return <PlayStation />;
      case 15:
        return <PlayStation2 />;
      case 23:
        return <Atari />;
      case 106:
        return <Dreamcast />;
      case 12:
        return <NeoGeo />;
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${platformsGIF})`,
        }}
        className={styles.hero__container}
      >
        <GoBackButton url={"/"} />
        <h2>Our Consoles</h2>
      </div>
      <div className={styles.container}>
        {retroPlatforms.map((platform, index) => (
          <div
            onClick={() => console.log(platform.id)}
            key={index}
            className={styles.item}
          >
            <h4>{platform.name}</h4>
            {whichPlatform(platform.id)}
          </div>
        ))}
      </div>
    </>
  );
};

export default AllPlatforms;
