import styles from "./Button.module.scss";

const Button = ({ className, onClick, children, fontSize, color }) => {
  return (
    <button
      onClick={onClick}
      style={{
        fontSize: fontSize,
        backgroundColor: color,
      }}
      className={`${className} ${styles.button}`}
    >
      {children}
    </button>
  );
};

export default Button;
