import React, { Fragment, useState, useCallback } from "react";
import './GetToLviv.scss';

const GetToLviv = () => {
  const [from, setFrom] = useState("Krakow");
  const [to, setTo] = useState("Lviv");

  const handleSwitch = useCallback(() => {
    setFrom(to);
    setTo(from);
  }, [from, to]);

  return (
    <Fragment>
      <section className="get-to-lviv">
        <div className="get-to-lviv__wrapper">
          <div className="get-to-lviv__left-block">
            <div className="left-block__title">
              <h1>Get to Lviv</h1>
            </div>
            <div className="left-block__description">
              <p>
                Do you want to find the easiest route to Lviv from the most
                popular cities? We are ready to help you!
              </p>
            </div>
            <div className="left-block__travel-options">
              <div className="travel-options__all-info">
                <div className="travel-options__from">
                  <span>Travel from</span>
                  <select
                    className="travel-options__select"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  >
                    <option value="Krakow">Krakow, Poland</option>
                    <option value="Lviv">Lviv, Ukraine</option>
                  </select>
                </div>

                <div className="travel-options__from">
                  <span>To</span>
                  <select
                    className="travel-options__select"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  >
                    <option value="Lviv">Lviv, Ukraine</option>
                    <option value="Krakow">Krakow, Poland</option>
                  </select>
                </div>
                <button type="button">SEE ALL OPTIONS</button>
              </div>
              <div className="travel-options__image-container">
                <img
                  src="/LvivProject/svg/switch button.svg"
                  alt="switch button"
                  onClick={handleSwitch}
                />
              </div>
            </div>
          </div>
          <div className="get-to-lviv__right-block">
            <img src="/LvivProject/photo/travel-lviv.png" alt="travel-lviv" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default GetToLviv;
