import styles from "./SearchInput.module.scss";
import { motion } from "framer-motion";

const SearchInput = ({ showInput }) => {
  return (
    showInput && (
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "max-content" }}
      >
        <div className={styles.search__container}>
          <input type="text" />
        </div>
      </motion.div>
    )
  );
};

export default SearchInput;
