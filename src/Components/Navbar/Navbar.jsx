import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import styles from "./Navbar.module.scss";

import { Link } from "react-router-dom";
import SearchInput from "../Inputs/SearchInput/SearchInput";
import SideMenu from "../MUI/SideMenu/SideMenu";
import SideMenuButton from "../SideMenuButton/SideMenuButton"

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav>
        <Link to={"/"} replace>
          <div className={styles.nav__items__left}>
            <h3>
              Retro <br /> Collect
            </h3>
          </div>
        </Link>
        <SearchInput showInput={showInput} />
        <div className={styles.nav__items__right}>
          <AiOutlineSearch onClick={() => setShowInput(!showInput)} />
          <MdFavoriteBorder />
          <Link to="/cart">
            <BsHandbag color="white" />
          </Link>
        </div>
      </nav>
      <SideMenuButton onClick={() => setOpenMenu(true)} />
      <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default Navbar;
