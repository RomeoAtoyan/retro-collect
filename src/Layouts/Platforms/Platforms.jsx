import { useState, useEffect } from "react";
import { retroPlatforms } from "../../Consoles/retroPlatforms";
import styles from "./Platforms.module.scss";

const Platforms = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => prevPosition + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.platforms__container}>
      <div
        className={styles.platforms__carousel}
        style={{ transform: `translateX(-${scrollPosition * 100}px)` }}
      >
        {retroPlatforms.map((console, index) => (
          <h5 key={index}>{console.name}</h5>
        ))}
      </div>
    </div>
  );
};

export default Platforms;
