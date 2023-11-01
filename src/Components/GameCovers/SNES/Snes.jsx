import styles from "./Snes.module.scss";

const SNES = () => {
  return (
    <div className={styles.cover__container}>
      <div className={styles.left__side} />
      <div className={styles.cover__middle}>
        <div className={styles.middle__top}>
          <img
            src="https://www.vgmpf.com/Wiki/images/0/0a/Mortal_Kombat_-_SNES_-_Album_Art.png"
            alt="game"
          />
        </div>
        <div className={styles.middle__bottom}></div>
      </div>
      <div className={styles.right__side} />
    </div>
  );
};

export default SNES;
