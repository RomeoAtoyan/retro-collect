import { IoIosArrowBack } from "react-icons/io";
import styles from "./GoBackbutton.module.scss";
import { useNavigate } from "react-router-dom";

const GoBackButton = ({ url, className }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(url)}
      className={`${styles.goBack} ${className}`}
    >
      <IoIosArrowBack />
    </button>
  );
};

export default GoBackButton;
