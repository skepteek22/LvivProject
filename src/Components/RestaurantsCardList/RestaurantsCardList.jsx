import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import './RestaurantsCardList.scss'

const RestaurantsCardList = ({ restaurants }) => {
  return (
    <div className="main-block__right">
      <div className="right__card-container">
        {restaurants.map((el) => (
          <RestaurantCard info={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsCardList;
