import styles from "./PS2.module.scss";
import PSII from "./Images/PSII.png";

const PS2 = () => {
  return (
    <div className={styles.cover__container}>
      <div className={styles.cover__details}>
        <h2>PlayStation®2 </h2>
        <img className={styles.psLogo} src={PSII} alt="" />
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://m.media-amazon.com/images/M/MV5BN2NmOWZmM2EtZGI1Yi00ZDYxLTkxODEtOTMwNmQ0M2IxOWZiXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg')",
        }}
        className={styles.cover__img}
      />
    </div>
  );
};

export default PS2;
