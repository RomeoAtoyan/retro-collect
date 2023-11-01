import styles from "./PS1.module.scss";
import PSX from "./Images/PSX.png";
import RatedE from "./Images/ratedE.png";

const PS1 = () => {
  return (
    <div className={styles.cover__container}>
      <div className={styles.cover__details}>
        <img className={styles.PSX} src={PSX} alt="" />
        <h3>PlayStation</h3>
        <img className={styles.RatedE} src={RatedE} alt="" />
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/en/e/e7/GTA_-_Box_Front.jpg')",
        }}
        className={styles.cover__img}
      />
    </div>
  );
};

export default PS1;
