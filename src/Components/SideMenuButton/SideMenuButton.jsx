import styles from "./SideMenuButton.module.scss";
import { BsChevronRight } from "react-icons/bs";

const SideMenuButton = ({ onClick }) => {
  return (
    <div className={styles.menu__backdrop}>
      <div onClick={onClick} className={styles.container}>
        <BsChevronRight />
      </div>
    </div>
  );
};

export default SideMenuButton;
