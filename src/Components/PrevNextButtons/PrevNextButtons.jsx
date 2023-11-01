import styles from "./PrevNextButtons.module.scss";
import Button from "../Button/Button";

const PrevNextButtons = ({ prevClick, nextClick }) => {
  return (
    <div className={styles.buttons__container}>
      <Button onClick={prevClick}>Prev</Button>
      <Button onClick={nextClick}>Next</Button>
    </div>
  );
};

export default PrevNextButtons;
