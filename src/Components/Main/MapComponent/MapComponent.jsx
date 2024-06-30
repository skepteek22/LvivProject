import React, { Fragment, useCallback, useState } from "react";
import './MapComponent.scss'
import MapItem from "../../MapItem/MapItem";


const MapComponent = () => {
  const [mapCategory, setMapCategory] = useState(null);

  const handleMapCategoryChange = useCallback((category) => {
    setMapCategory(category);
  }, []);

  return (
    <Fragment>
      <section className="map" id="map">
        <div className="map__wrapper">
          <div className="map__title">
            <h1>Map</h1>
          </div>

          <div className="map__main-block">
            <div className="map__filter">
              <ul>
                <div data-aos="fade-up" data-aos-delay="200">
                  <li>Filter</li>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <li
                    className="map__list-item"
                    onClick={() => handleMapCategoryChange("hotel")}
                  >
                    Hotels
                  </li>
                </div>

                <div data-aos="fade-up" data-aos-delay="400">
                  <li
                    className="map__list-item"
                    onClick={() => handleMapCategoryChange("restaurant")}
                  >
                    Restaurants
                  </li>
                </div>

                <div data-aos="fade-up" data-aos-delay="500">
                  <li
                    className="map__list-item"
                    onClick={() => handleMapCategoryChange("cafe")}
                  >
                    Cafes
                  </li>
                </div>

                <div data-aos="fade-up" data-aos-delay="600">
                  <li
                    className="map__list-item"
                    onClick={() => handleMapCategoryChange("theater")}
                  >
                    Theaters
                  </li>
                </div>

                <div data-aos="fade-up" data-aos-delay="700">
                  <li
                    className="map__list-item"
                    onClick={() => handleMapCategoryChange("museum")}
                  >
                    Museums
                  </li>
                </div>
              </ul>
            </div>

            <div className="map__container">
              <MapItem category={mapCategory} />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MapComponent;
