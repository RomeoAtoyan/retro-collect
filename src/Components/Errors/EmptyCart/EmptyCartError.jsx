import React from "react";
import Button from "../../Button/Button";
import styles from "./EmptyCartError.module.scss";
import CatZZZ from "./Images/catZZZ.png";
const EmptyCartError = () => {
  return (
    <div className={styles.error__container}>
      <img src={CatZZZ} alt="" />
      <div className={styles.error__message}>
        <h2>Cart is empty :(</h2>
        <Button color={"orange"} className={styles.start__shopping}>Start Shopping</Button>
      </div>
    </div>
  );
};

export default EmptyCartError;
