import styles from "./Nes.module.scss";

const NES = () => {
  return (
    <div className={styles.cover__container}>
      <div className={styles.left__side} />
      <div className={styles.right__side}>
        <img
          src="https://assets1.ignimgs.com/2016/12/16/top100nesgames-desktop-1481848198595.jpg"
          alt=""
        />
      </div>
      <div className={styles.cover__bottom} />
    </div>
  );
};

export default NES;
