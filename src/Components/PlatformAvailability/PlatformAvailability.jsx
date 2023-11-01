import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./PlatformAvailability.module.scss";

const PlatformAvailability = ({ availablePlatforms }) => {
  return (
    <Swiper
      className="platforms"
      modules={[Autoplay]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={2}
      autoplay={{ delay: 3000 }}
    >
      <div className={styles.container}>
        {availablePlatforms.map((platform, index) => (
          <SwiperSlide key={index}>
            <h3 className={styles.platform}>{platform.name}</h3>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default PlatformAvailability;
