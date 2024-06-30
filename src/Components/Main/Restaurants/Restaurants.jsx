import React, { Fragment, useState } from "react";
import RestaurantsCardList from "../../RestaurantsCardList/RestaurantsCardList";
import './Restaurants.scss'

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      image: "/LvivProject/photo/restaurants1.png",
      title: "Kilinski",
      place: "Lviv, Ulasa Samchuka, 16",
      time: "MON-SAT 12 PM - 11 PM SUN 11 AM - 11 PM",
    },
    {
      id: 2,
      image: "/LvivProject/photo/restaurants2.png",
      title: "Amadeus",
      place: "Lviv, Katedralna Sq., 7",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 3,
      image: "/LvivProject/photo/restaurants3.png",
      title: "Valentino Restaurant",
      place: "Lviv, Ostapa Nyzhankivs'koho St, 20",
      time: "8:00 AM - 10:00 PM",
    },
    {
      id: 4,
      image: "/LvivProject/photo/restaurants4.png",
      title: "Papi",
      place: "Lviv, Valova St., 19",
      time: "9:00 AM - 10:00 PM",
    },
    {
      id: 5,
      image: "/LvivProject/photo/restaurants5.png",
      title: "Mon Chef Restaurant",
      place: "Lviv, Gorodotska Str., 15 Second floor of the Astoria Hotel",
      time: "7:00 AM - 11:00 PM",
    },
    {
      id: 6,
      image: "/LvivProject/photo/restaurants6.png",
      title: "Baczewski Restaurant",
      place: "Lviv, Shevskaya St., 8",
      time: "8:00 AM - 2:00 AM",
    },
    {
      id: 7,
      image: "/LvivProject/photo/restaurants7.jpg",
      title: "36Po",
      place: "Lviv, Rynok Sq., 36",
      time: "12:00 AM - 12:00 AM",
    },
    {
      id: 8,
      image: "/LvivProject/photo/restaurants8.jpg",
      title: "Marevo",
      place: "Lviv, Ulasa Samchuka, 16",
      time: "MON-SAT 12 PM - 11 PM SUN 11 AM - 11 PM",
    },
    {
      id: 9,
      image: "/LvivProject/photo/restaurant9.jpg",
      title: "Atlas",
      place: "Lviv, Rynok Sq., 45",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 10,
      image: "/LvivProject/photo/restaurant10.jpg",
      title: "Churrasco Grill",
      place: "Lviv, Galytska, 13",
      time: "11:00 AM - 9:30 PM",
    },
    {
      id: 11,
      image: "/LvivProject/photo/restaurants11.jpg",
      title: "Budzinni",
      place: "Lviv, Petra Doroshenka, 8",
      time: "5:00 AM - 12:00 PM",
    },
  ]);

  return (
    <Fragment>
      <section className="restaurants">
        <div className="restaurants__wrapper">
          <div className="restaurants__title">RESTAURANTS</div>

          <div className="restaurants__main-block">
            <div className="main-block__left">
              <ul>
                <li className="disabled-li">Filter</li>
                <li>Restaurants</li>
                <li>Fastfood</li>
                <li>Coffee</li>
              </ul>
            </div>

            <RestaurantsCardList restaurants={restaurants} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Restaurants;
