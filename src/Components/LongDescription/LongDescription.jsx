import ExpandButton from "../ExpandButton/ExpandButton";
import styles from "./LongDescription.module.scss";

const LongDescription = ({ height, description, setExpanded, expanded }) => {
  return (
    <div
      style={{
        height: height,
      }}
      className={styles.description}
    >
      <p>{description || "No description available"}</p>
      <ExpandButton setExpanded={setExpanded} expanded={expanded} />
    </div>
  );
};

export default LongDescription;
