import Drawer from "@mui/material/Drawer";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./SideMenu.module.scss";
import { GoHome } from "react-icons/go";
import { CgGames } from "react-icons/cg";
import { GiGameConsole } from "react-icons/gi";
import { Link } from "react-router-dom";

const SideMenu = ({ openMenu, setOpenMenu }) => {
  return (
    <Drawer open={openMenu} anchor="left">
      <div className={styles.side__menu}>
        <div className={styles.close__button}>
          <AiOutlineClose
            onClick={() => setOpenMenu(false)}
            size={25}
            color="white"
          />
        </div>
        <div className={styles.list__container}>
          <ul>
            <li>
              <GoHome color="rgba(64, 226, 160)" size={25} />
              <Link onClick={() => setOpenMenu(false)} to="/">
                Home
              </Link>
            </li>
            <li>
              <CgGames color="rgba(255, 102, 102)" size={25} />
              <Link onClick={() => setOpenMenu(false)} to="/games">
                Games
              </Link>
            </li>
            <li>
              <GiGameConsole color="rgba(255, 105, 248)" size={25} />
              <Link onClick={() => setOpenMenu(false)} to="/platforms/all">
                Platforms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Drawer>
  );
};

export default SideMenu;
