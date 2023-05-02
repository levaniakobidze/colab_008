import icon from "./headerassets/Path 2.png";
import logo from "./headerassets/PHOTOSNAP.png";
import "./Header.css";
import { useState, useEffect } from "react";
import ModalWindow from "./ModalWindow";
import close from "./headerassets/icon-close-e6500fac.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const html = document.getElementsByTagName("html");
    if (clicked) {
      html[0].style.overflow = "hidden";
    } else {
      html[0].style.overflow = "scroll";
    }
  }, [clicked]);

  return (
    <header>
      <div className="header">
        <Link to="/">
          <div onClick={() => setClicked(false)} className="header-icon-logo">
            <img className="header-icon" src={icon} alt=""></img>
            <div className="header-logo">
              <img src={logo} alt="logo"></img>
            </div>
          </div>
        </Link>
        <nav className="tablet-header-navbar">
          <Link to="stories">
            <button className="tablet-header-button">STORIES</button>
          </Link>
          <Link to="features">
            <button className="tablet-header-button">FEATURES</button>
          </Link>
          <Link to="pricing">
            <button className="tablet-header-button">PRICING</button>
          </Link>
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
      <ModalWindow clicked={clicked} setClicked={setClicked} />
      <div
        onClick={() => setClicked(false)}
        className={`${clicked ? "header-overlay" : "header-overlay disappear"}`}
      ></div>
    </header>
  );
}
