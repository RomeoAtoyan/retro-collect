import styles from "./Dreamcast.module.scss";
import Spiral from "./Images/spiral.png";

const Dreamcast = () => {
  return (
    <div className={styles.cover__container}>
      <div className={styles.cover__details}>
        <h2>Dreamcast</h2>
        <img src={Spiral} alt="" />
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280x1280/products/23146/52580/guts--------------2__06231.1682003189.jpg?c=2')",
        }}
        className={styles.cover__img}
      />
    </div>
  );
};

export default Dreamcast;
