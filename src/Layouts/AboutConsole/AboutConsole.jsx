import GameRow from "../../Components/GameRow/GameRow";
import styles from "./AboutConsole.module.scss";
import { PacmanLoader } from "react-spinners";
import "../../otherStyles/Spinners.scss";

const AboutConsole = ({
  platform,
  description,
  src,
  platformImg,
  games,
  detailsLoading,
  gamesLoading,
  prevClick,
  nextClick,
}) => {
  return detailsLoading ? (
    <div className="spinner_console">
      <PacmanLoader color="orange" />
    </div>
  ) : (
    <div className={styles.about__container}>
      <div className={styles.description}>
        <div className={styles.title}>
          <h1>About the {platform}</h1>
          <img src={platformImg} alt="platform-img" />
        </div>
        <p>{description}</p>
      </div>
      <div className={styles.console__img}>
        <img width={300} src={src} alt="" />
      </div>
      <GameRow
        gamesLoading={gamesLoading}
        prevClick={prevClick}
        nextClick={nextClick}
        navigation
        doNotPaginate
        games={games}
        category={`${platform} GAMES`}
      />
    </div>
  );
};

export default AboutConsole;
