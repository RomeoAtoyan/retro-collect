import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { retroPlatforms } from "../../Consoles/retroPlatforms";
import styles from "./Platforms.module.scss";

const Platforms = () => {
  return (
    <div className={styles.platforms__container}>
      <Swiper modules={[Autoplay]} slidesPerView={2} autoplay={{ delay: 700 }}>
        {retroPlatforms.map((platform, index) => (
          <SwiperSlide key={index}>
            <h5>{platform?.name}</h5>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Platforms;
