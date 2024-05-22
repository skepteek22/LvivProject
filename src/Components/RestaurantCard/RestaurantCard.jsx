import React from "react";
import "./RestaurantCard.scss";

const RestaurantCard = ({ info }) => {
  return (
    <div className="card-container__restaurants-card">
      <div className="restaurants-card__image">
        <img src={info.image} alt="restaurant" />
      </div>
      <div className="restaurants-card__bottom-block">
        <div className="restaurants-card__title">
          <h3>{info.title}</h3>
        </div>
        <div className="restaurants-card__location">
          <img
            src="/LvivProject/svg/
\map-pin (1).svg"
            alt="pin"
          />
          <p>{info.place}</p>
        </div>
        <div className="restaurants-card__time-and-like">
          <div className="time-and-like__time">
            <img
              src="/LvivProject/svg/
\clock.svg"
              alt="clock"
            />
            <p>{info.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
