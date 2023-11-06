import { useState, useEffect, useContext } from "react";
import AboutGame from "../Layouts/AboutGame/AboutGame";
import { useParams } from "react-router-dom";
import PlatformID from "../Context/PlatformID/PlatformID";
import { PacmanLoader } from "react-spinners";
import "../otherStyles/Spinners.scss";

const GameDetailPage = () => {
  const { id } = useContext(PlatformID);
  const params = useParams();
  const [game, setGame] = useState({});
  const [genres, setGenres] = useState("");
  const [similarGames, setSimilarGames] = useState([]);
  const [highRatedGames, setHighRatedGames] = useState([]);
  const [screenshots, setScreenshots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // screenshots for selected game
    fetch(
      `https://api.rawg.io/api/games/${params.id}/screenshots?key=abcea975c5f046518a4ebd14ccb949d0&platforms=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setScreenshots(data.results);
      })
      .catch((error) => console.log(error));

    // Similar games to selected game
    fetch(
      `https://api.rawg.io/api/games/${params.id}/game-series?key=abcea975c5f046518a4ebd14ccb949d0`
    )
      .then((res) => res.json())
      .then((data) => {
        setSimilarGames(data.results.filter((game) => game.id != params.id));
      })
      .catch((error) => console.log(error));

    // Selected Game details
    fetch(
      `https://api.rawg.io/api/games/${params.id}?key=abcea975c5f046518a4ebd14ccb949d0`
    )
      .then((res) => res.json())
      .then((data) => {
        setGame(data);
        setGenres(data.genres.map((genre) => genre?.id).join(","));
        setLoading(false);
      })
      .catch((error) => console.log(error));

    // highest rated games of the same console
    fetch(
      `https://api.rawg.io/api/games?key=abcea975c5f046518a4ebd14ccb949d0&platforms=${id}&page=1&ordering=-rating&genres=${genres}`
    )
      .then((res) => res.json())
      .then((data) => {
        setHighRatedGames(data.results);
        console.log(data.results);
      })
      .catch((error) => console.log(error));
  }, [params.id, id, genres]);

  return (
    <>
      {loading ? (
        <div className="full__page__spinner">
          <PacmanLoader color="black" />
        </div>
      ) : (
        <AboutGame
          game={game}
          screenshots={screenshots}
          similarGames={similarGames}
          highRatedGames={highRatedGames}
        />
      )}
    </>
  );
};

export default GameDetailPage;
