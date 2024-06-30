import React, { useState, useEffect, useCallback} from "react";
import "./Main.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import AboutLviv from "./AboutLviv/AboutLviv";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";
import Restaurants from "./Restaurants/Restaurants";
import PopularTrips from "./PopularTrips/PopularTrips";
import GetToLviv from "./GetToLviv/GetToLviv";
import MapComponent from "./MapComponent/MapComponent";
import Creators from "./Creators/Creators";

const Main = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <main className="main">
        <div className="main-wrapper">
          <AboutLviv/>
          <UpcomingEvents/>
          <Restaurants/>
          <PopularTrips/>
          <GetToLviv/>
          <MapComponent/>
          <Creators/>

        </div>
      </main>
    </>
  );
};

export default Main;
