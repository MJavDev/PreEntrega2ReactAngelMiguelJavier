import user from "../../assets/user.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { Nav } from "../Nav/Nav";
import "./Header.scss";
import { HiMagnifyingGlass } from "react-icons/hi2";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <Link className="nav__item" to="/">
        <h1 className="logo ">PLANTOPIA</h1>
      </Link>

      <div className="icons_container">
        <Nav />
        <div className="magnifying-glass">
          <HiMagnifyingGlass className="magnifying-glass_icon" />
          <div className="search items-left rounded-md border border-gray-300 ">
            <input
              type="text"
              className="w-full bg-transparent focus:outline-none px-2"
              placeholder="Search"
              id="buscar"
            />
          </div>
        </div>
        <CartWidget />
      </div>
    </header>
  );
};
