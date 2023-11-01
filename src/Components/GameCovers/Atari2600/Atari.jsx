import styles from "./Atari.module.scss";

const Atari = () => {
  return (
    <div className={styles.cover__container}>
      <div className={styles.cover__details}>
        <span>game program</span>
        <h6>Adventure</h6>
        <span>Use with Joystick Controllers</span>
        <div
          style={{
            backgroundImage:
              "url('https://playclassic.games/wp-content/uploads/2021/06/Pac-Man.jpg')",
          }}
          className={styles.cover__img}
        />
      </div>
    </div>
  );
};

export default Atari;
