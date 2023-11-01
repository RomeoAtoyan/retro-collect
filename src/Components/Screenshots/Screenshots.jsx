import { useEffect, useState } from "react";
import styles from "./Screenshots.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import FadeIn from "../Animations/FadeIn";

const Screenshots = ({ screenshots }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleClick = (imgId) => {
    setSelectedImg(imgId);
  };

  useEffect(() => {
    if (selectedImg) {
      document.body.classList.add(styles.modalOpen);
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove(styles.modalOpen);
    }
  }, [selectedImg]);

  return (
    <>
      <div className={styles.screenshots_container}>
        {screenshots?.slice(0, 3).map((img, index) => (
          <img
            onClick={() => handleClick(img.id)}
            key={index}
            src={img.image}
            alt={`Screenshot ${index + 1}`}
          />
        ))}
      </div>
      {selectedImg && (
        <FadeIn>
          <div className={styles.modal}>
            <div className={styles.modal_inner}>
              <img
                src={screenshots.find((img) => img?.id === selectedImg)?.image}
                alt="Selected Screenshot"
              />
              <AiFillCloseCircle onClick={() => setSelectedImg(null)} />
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Screenshots;
