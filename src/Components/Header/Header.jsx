import React, { useState } from "react";
import "./Header.scss";
import Popup from "../Popup/Popup";
import defaultImage from "public/photo/main-logo.png";
const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="header-bg">
      <header className="header-bg__header">
        <nav className="header__nav">
          <ul className="header__list-left">
            <a href="#events">
              <li className="list-left__item">Events</li>
            </a>

            <a href="#popular-trips">
              <li className="list-left__item">Trips</li>
            </a>

            <a href="#map">
              <li className="list-left__item">Map</li>
            </a>

            <a href="#about-lviv">
              <li className="list-right__item">About Lviv</li>
            </a>
          </ul>

          <div className="header__main-logo">
            <a href="/" onClick={scrollToTop}>
              <img src={defaultImage} alt="main-logo" />
            </a>
          </div>

          <ul className="header__list-right">
            <a href="#">
              <li className="list-right__item">Bonuses</li>
            </a>

            <a href="#our-creators">
              <li className="list-right__item">Creators</li>
            </a>
            <li className="list-right__item" onClick={togglePopup}>
              <img src="public\svg\heart.svg" alt="heart" />
            </li>

            <li className="list-right__item">
              <select className="item__select">
                <option className="select__item" value="value1">
                  Eng
                </option>
                <option className="select__item" value="value2">
                  Ua
                </option>
              </select>
            </li>
          </ul>
        </nav>
      </header>

      <Popup show={showPopup} onClose={togglePopup} />
    </div>
  );
};

export default Header;
