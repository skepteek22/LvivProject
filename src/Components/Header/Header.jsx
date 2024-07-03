import React, { useState, useCallback } from "react";
import "./Header.scss";
import Popup from "../Popup/Popup";
import Bonuses from "../Bonuses/Bonuses";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showBonus, setShowBonus] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const togglePopup = useCallback(() => {
    setShowPopup(prevShowPopup => !prevShowPopup);
  }, []);

  const handleBonus = useCallback(() => {
    setShowBonus(bonus => !bonus);
  }, []);

  return (
    <div className="header-bg">
      <header className="header-bg__header">
        <nav className="header__nav">
          <ul className="header__list-left">
            <li className="list-left__item"><a href="#events">Events</a></li>
            <li className="list-left__item"><a href="#popular-trips">Trips</a></li>
            <li className="list-left__item"><a href="#map">Map</a></li>
            <li className="list-left__item"><a href="#about-lviv">About Lviv</a></li>
          </ul>

          <div className="header__main-logo">
            <a href="/LvivProject/index.html" onClick={scrollToTop}>
              <img src="/LvivProject/photo/main-logo.png" alt="main-logo" />
            </a>
          </div>

          <ul className="header__list-right">
            <li className="list-right__item" onClick={handleBonus}><a href="#">Bonuses</a></li>
            <li className="list-right__item"><a href="#our-creators">Creators</a></li>
            <li className="list-right__item" onClick={togglePopup}>
              <img src="/LvivProject/svg/heart.svg" alt="heart" />
            </li>
            <li className="list-right__item">
              <select className="item__select">
                <option className="select__item" value="value1">Eng</option>
                <option className="select__item" value="value2">Ua</option>
              </select>
            </li>
          </ul>
        </nav>
      </header>

      {showPopup && <Popup show={showPopup} onClose={togglePopup} />}
      {showBonus && <Bonuses onClose={handleBonus}/>}
    </div>
  );
};

export default Header;
