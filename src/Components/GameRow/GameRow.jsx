import GameCard from "../GameCard/GameCard";
import styles from "./GameRow.module.scss";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../otherStyles/SwiperStyles.scss";
import { useNavigate } from "react-router-dom";
import PrevNextButtons from "../PrevNextButtons/PrevNextButtons";
import { PacmanLoader } from "react-spinners";
const GameRow = ({
  category,
  games,
  doNotPaginate,
  setExpanded,
  navigation,
  prevClick,
  nextClick,
  gamesLoading,
}) => {
  const navigate = useNavigate();

  const goToGameDetails = (gameID) => {
    navigate(`/game/${gameID}`);
    setExpanded && setExpanded(false);
  };

  return gamesLoading ? (
    <div className="spinner_game">
      <PacmanLoader color="black" />
    </div>
  ) : (
    <div className={styles.row__container}>
      <div className={styles.row__title}>
        <h2>{category}</h2>
        <button>View All</button>
      </div>
      <div className={styles.games__container}>
        <Swiper
          className="game__row__swiper"
          modules={doNotPaginate ? [] : [Pagination, Autoplay]}
          pagination={doNotPaginate ? {} : { clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
        >
          {games?.map((game, index) => (
            <SwiperSlide key={index}>
              <GameCard
                gameOnClick={() => goToGameDetails(game?.id)}
                key={index}
                game={game?.name}
                img={game?.background_image}
                year={new Date(game?.released).getFullYear()}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {navigation && (
          <PrevNextButtons prevClick={prevClick} nextClick={nextClick} />
        )}
      </div>
    </div>
  );
};

export default GameRow;
