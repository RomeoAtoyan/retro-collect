import styles from "./NeoGeo.module.scss";

const NeoGeo = () => {
  return (
    <div className={styles.cover__container}>
      <div className={styles.cover__left} />
      <div className={styles.cover__middle}>
        <div
          style={{
            backgroundImage:
              "url('https://media.rawg.io/media/games/f61/f61cc8e0bce08615d90918e428aa5dc9.jpg')",
          }}
          className={styles.cover__img}
        />
      </div>
      <div className={styles.cover__right} />
    </div>
  );
};

export default NeoGeo;
