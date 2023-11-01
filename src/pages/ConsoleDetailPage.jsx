import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutConsole from "../Layouts/AboutConsole/AboutConsole";
import { retroPlatforms } from "../Consoles/retroPlatforms";
import GameID from "../Context/PlatformID/PlatformID";

const ConsoleDetailPage = () => {
  const [platform, setPlatform] = useState({});
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [gamesLoading, setGamesLoading] = useState(true);
  const [detailsLoading, setDetailsLoading] = useState(true);
  const params = useParams();
  const { setId } = useContext(GameID);

  const platformImage = retroPlatforms.find(
    (platform) => platform.id === Number(params.id)
  ).src;
  const imgUrl = "/src/Consoles/Images/";

  useEffect(() => {
    setId(params.id);
  }, [params.id]);

  // selected platform details
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/platforms/${params.id}?key=abcea975c5f046518a4ebd14ccb949d0`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlatform(data);
        setDetailsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [params.id]);

  // games of selected platform
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=abcea975c5f046518a4ebd14ccb949d0&platforms=${params.id}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
        setGamesLoading(false);
      })
      .catch((error) => console.log(error));
  }, [params.id, page]);

  const loadingStates = {
    gamesLoading: gamesLoading,
    detailsLoading: detailsLoading,
  };

  const prevPage = () => {
    if (page <= 1) {
      return;
    } else {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <>
      <AboutConsole
        prevClick={prevPage}
        nextClick={nextPage}
        {...loadingStates}
        platformImg={`${imgUrl}${platformImage}`}
        games={games}
        platform={platform.name}
        description={platform.description}
      />
    </>
  );
};

export default ConsoleDetailPage;
