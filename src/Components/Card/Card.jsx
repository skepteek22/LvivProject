// Card.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLike } from "../../redux/cardSlice";
import "./Card.scss";

const Card = ({ info }) => {
  const likedCards = useSelector((state) => state.card.likedCards);
  const dispatch = useDispatch();

  const handleHeartClick = () => {
    dispatch(toggleLike({ card: info }));
  };

  const isLiked = likedCards.some((card) => card.id === info.id);

  return (
    <div className="card" style={{ backgroundImage: `url(${info.bgImage})` }}>
      <div className="card__container">
        <div className="container__type-and-like">
          <div className="type-and-like__type">
            <img
              src="/LvivProject/svg/
\Ellipse 33.svg"
              alt="elipse"
            />
            <span>{info.type}</span>
          </div>

          <div className="type-and-like__like" onClick={handleHeartClick}>
            <img
              src={
                isLiked
                  ? "/LvivProject/svg/red-heart.svg"
                  : "/LvivProject/svg/heart.svg"
              }
              alt="like"
            />
          </div>
        </div>

        <div className="container__about-event">
          <div className="about-event__date">
            <span>{info.date}</span>
          </div>

          <div className="about-event__title">
            <h3>{info.title}</h3>
          </div>
          <div className="about-event__place-and-price">
            <div className="about-event__place">
              <img
                src="/LvivProject/svg/
\map-pin.svg"
                alt="map-pin"
              />
              <span>{info.place}</span>
            </div>

            <div className="about-event__price">
              <span>{info.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
