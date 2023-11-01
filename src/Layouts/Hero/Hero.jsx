import styles from "./Hero.module.scss";
import "../../otherStyles/SwiperStyles.scss";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSlide from "../../Components/HeroSlide/HeroSlide";
import { retroPlatforms } from "../../Consoles/retroPlatforms";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const imgUrl = "/src/Consoles/Images/";
  const navigate = useNavigate();

  const GoToConsolePage = (id) => {
    navigate(`/platform/${id}`);
  };

  return (
    <div className={styles.hero__container}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        className={styles.swiper}
        loop
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {retroPlatforms.map((console, index) => (
          <SwiperSlide key={index}>
            <HeroSlide
              onClick={() => GoToConsolePage(console.id)}
              img={`${imgUrl}${console.src}`}
              name={console.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
