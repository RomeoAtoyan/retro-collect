import styles from "./ExpandButton.module.scss";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

const ExpandButton = ({ expanded, setExpanded }) => {
  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className={styles.readMoreButton}
      >
        {expanded ? <BsChevronUp /> : <BsChevronDown />}
      </button>
    </div>
  );
};

export default ExpandButton;
