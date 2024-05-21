import React from "react";
import "./MiniCard.scss";

const MiniCard = ({ info, handleLike }) => {
  return (
    <>
      <div
        className="mini-card"
        style={{ backgroundImage: `url(${info.bgImage})` }}
      >
        <div className="mini-card__container">
          <div className="mini-container__type-and-like">
            <div className="mini-type-and-like__type">
              <img
                src="/LvivProject/svg/
\Ellipse 33.svg"
                alt="elipse"
              />
              <span>{info.type}</span>
            </div>

            <div className="mini-type-and-like__like" onClick={handleLike}>
              <img
                src="/LvivProject/svg/
\red-heart.svg"
                alt="heart"
              />
            </div>
          </div>

          <div className="mini-container__about-event">
            <div className="mini-about-event__date">
              <span>{info.date}</span>
            </div>

            <div className="mini-about-event__title">
              <h3>{info.title}</h3>
            </div>
            <div className="mini-about-event__place-and-price">
              <div className="mini-about-event__place">
                <img
                  src="/LvivProject/svg/
\map-pin.svg"
                  alt="map-pin"
                />
                <span>{info.place}</span>
              </div>

              <div className="mini-about-event__price">
                <span>{info.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniCard;
