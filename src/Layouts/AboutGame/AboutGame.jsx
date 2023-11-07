import styles from "./AboutGame.module.scss";
import { useContext, useEffect, useState } from "react";
import GameRow from "../../Components/GameRow/GameRow";
import GoBackButton from "../../Components/GoBackButton/GoBackButton";
import LongDescription from "../../Components/LongDescription/LongDescription";
import ScreenShots from "../../Components/Screenshots/Screenshots";
import PlatformAvailability from "../../Components/PlatformAvailability/PlatformAvailability";
import Rating from "../../Components/Rating/Rating";
import PlatformID from "../../Context/PlatformID/PlatformID";

const AboutGame = ({ game, similarGames, highRatedGames, screenshots }) => {
  const [expanded, setExpanded] = useState(false);
  const publishers = game?.publishers;
  const starRating = Math.round(game?.rating);
  const availablePlatforms = game?.platforms.map((item) => item.platform);
  const descriptionHeight = expanded ? "max-content" : "6em";

  return (
    <>
      <div
        style={{
          backgroundImage: `url('${
            game?.background_image || game?.background_image_additional
          }')`,
        }}
        className={styles.about__container}
      >
        <h3 className={styles.year}>
          {new Date(game?.released).getFullYear()}
        </h3>
        <GoBackButton className={styles.goBack} url={"/"} />
        <div className={styles.title__container}>
          <h2>{game?.name}</h2>
          <Rating stars={starRating} />
          <div className={styles.game__publishers}>
            {publishers?.slice(0, 3).map((publisher, index) => (
              <span key={index}>{publisher?.name}</span>
            ))}
          </div>
        </div>
      </div>
      <ScreenShots screenshots={screenshots} />
      <LongDescription
        height={descriptionHeight}
        description={game.description_raw}
        setExpanded={setExpanded}
        expanded={expanded}
      />
      <PlatformAvailability availablePlatforms={availablePlatforms} />
      <GameRow
        setExpanded={setExpanded}
        doNotPaginate
        games={highRatedGames}
        category={`Highest Rated`}
      />
      {similarGames && (
        <GameRow
          setExpanded={setExpanded}
          doNotPaginate
          games={similarGames}
          category={"Similar Games"}
        />
      )}
    </>
  );
};

export default AboutGame;
