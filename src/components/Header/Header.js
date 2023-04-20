import icon from "./headerassets/Path 2.png";
import logo from "./headerassets/PHOTOSNAP.png";
import "./Header.css";
import { useState } from "react";
import ModalWindow from "./ModalWindow";
import close from "./headerassets/icon-close-e6500fac.svg";
export default function Header() {
  const [clicked, setClicked] = useState(false);
  return (
    <header>
      <div className="header">
        <div className="header-icon-logo">
          <img className="header-icon" src={icon} alt=""></img>
          <div className="header-logo">
            <img src={logo} alt="logo"></img>
          </div>
        </div>
        <nav className="tablet-header-navbar">
          <button className="tablet-header-button">STORIES</button>
          <button className="tablet-header-button">FEATURES</button>
          <button className="tablet-header-button">PRICING</button>
        </nav>
        <button className="tablet-invite-button">GET AN INVITE</button>

        {!clicked ? (
          <button
            className="header-menu-button"
            onClick={() => setClicked(!clicked)}
          ></button>
        ) : (
          ""
        )}
        {clicked ? (
          <div className="modal-close" onClick={() => setClicked(!clicked)}>
            <img src={close} alt="close"></img>
          </div>
        ) : (
          ""
        )}
      </div>
      <ModalWindow clicked={clicked} />
      <div
        className={`${clicked ? "header-overlay" : "header-overlay disappear"}`}
      ></div>
    </header>
  );
}
