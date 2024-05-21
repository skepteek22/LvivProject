import React from "react";
import "./TripCard.scss";

const TripCard = ({ tripsList }) => {
  return (
    <>
      <img src={tripsList.bgImage} alt="trip" className="trip-card__img" />
      <div className="swiper-slide__info">
        <div className="info__heading">
          <h4>{tripsList.title}</h4>
        </div>

        <div className="info__desc">{tripsList.description}</div>

        <div className="info__star-container">
          <img src="/LvivProject\photo\star.png" alt="" />
          <img src="/LvivProject\photo\star.png" alt="" />
          <img src="/LvivProject\photo\star.png" alt="" />
          <img src="/LvivProject\photo\star.png" alt="" />
          <img src="/LvivProject\photo\star.png" alt="" />
        </div>
        <a href={tripsList.site} target="_blank">
          MORE
        </a>
      </div>
    </>
  );
};

export default TripCard;
