import React from "react";
import "./RestaurantCard.scss";
const RestaurantCard = () => {
  return (
    <div className="card-container__restaurants-card">
      <div className="restaurants-card__image">
        <img src="public\photo\restaurants1.png" alt="restaurant" />
      </div>
      <div className="restaurants-card__bottom-block">
        <div className="restaurants-card__title">
          <h3>Kilinski</h3>
        </div>
        <div className="restaurants-card__location">
          <img
            src="/LvivProject/svg/
\map-pin (1).svg"
            alt="pin"
          />
          <p>Lviv, Ulasa Samchuka, 16</p>
        </div>
        <div className="restaurants-card__time-and-like">
          <div className="time-and-like__time">
            <img
              src="/LvivProject/svg/
\clock.svg"
              alt="clock"
            />
            <p>MON-SAT 12 PM - 11 PM SUN 11 AM - 11 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
