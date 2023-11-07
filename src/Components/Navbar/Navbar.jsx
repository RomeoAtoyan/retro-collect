import { useState } from "react";
import styles from "./Navbar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

import SearchInput from "../Inputs/SearchInput/SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);

  return (
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
        {/* if contemplating burger menu
        <RxHamburgerMenu/> */}
      </div>
    </nav>
  );
};

export default Navbar;
