import React from "react";
import "./Bonuses.scss";

const Bonuses = ({ onClose }) => {
  return (
    <>
      <div className="bonuses-overlay">
        <div className="ticket-wrapper">
          <div className="ticket-wrapper__back-arrow" onClick={onClose}>
            <img src="\LvivProject\svg\back.svg" alt="back-arrow"/>
          </div>
          <div className="ticket">
            <div className="ticket__top">
              <div className="top__qr-code">
                <img src="\LvivProject\photo\qr-code.png" alt="qr-code" />
              </div>
            </div>
            <div className="ticket__bottom">
              <div className="bottom-code__info">
                <div className="info__tittle">
                  <h3>Lviv</h3>
                </div>
                <div className="info__disc">
                  <span>Discount trip purchase</span>
                </div>
              </div>
              <div className="bottom__percentage">
                <span>40%</span>
              </div>
            </div>

            <div className="circles">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bonuses;
