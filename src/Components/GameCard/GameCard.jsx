import styles from "./GameCard.module.scss";

const GameCard = ({ console, game, img, gameOnClick, year }) => {
  return (
    <div className={styles.card__container}>
      <div className={styles.card__img}>
        <img onClick={gameOnClick} src={img} alt="game-cover" />
      </div>
      <div className={styles.card__description}>
        <span>{console}</span>
        <h3>{game}</h3>
        {year && <span>{year}</span>}
      </div>
    </div>
  );
};

export default GameCard;
