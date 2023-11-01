import Button from "../Button/Button";
import styles from "./HeroSlide.module.scss";

const HeroSlide = ({ name, img, onClick }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.hero__left}>
        <h1 className={styles.console__name}>{name}</h1>
        <Button onClick={onClick} className={styles.shop__now}>
          shop now
        </Button>
      </div>
      <div className={styles.hero__right}>
        <div className={styles.console__img__container}>
          <img src={img} alt="console" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
