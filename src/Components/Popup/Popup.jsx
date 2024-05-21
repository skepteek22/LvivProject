import React from "react";
import "./Popup.scss";
import MiniCard from "../MiniCard/MiniCard";
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../../redux/cardSlice';

const Popup = ({ show, onClose  }) => {
  const likedCards = useSelector((state) => state.card.likedCards);
  const dispatch = useDispatch();

  const handleLike = (info) => {
    dispatch(toggleLike({ card: info }));
  };
  
  return (
    <>
      {show && <div className="overlay" onClick={onClose}></div>}

      <div className={`popup ${show ? "show" : ""}`}>
        <div className="popup__title-and-arrow">
          <img src="public\svg\back.svg" alt="back" onClick={onClose}/>
          <h3 className="title-and-arrow__title">
            <b>Liked events</b>
          </h3>
        </div>

        {likedCards.length > 0 ? (
          <div className="popup__grid-holder">
            {likedCards.map((fav, index) => (
              <MiniCard info={fav} key={index} handleLike={() => handleLike(fav)}/>
            ))}
          </div>
        ) : (
          <div className="no-liked-events">
              <p>No liked events...Yet...</p>
            </div>
        )}
      </div>
    </>
  );
};

export default Popup;
