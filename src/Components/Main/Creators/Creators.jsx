import React, { Fragment } from "react";
import './Creators.scss'

const Creators = () => {
  return (
    <Fragment>
      <section className="creators" id="our-creators">
        <div className="creators__wrapper">
          <div className="creators__title">
            <h1>Our Creators</h1>
          </div>

          <div className="creators__container">
            <div data-aos="fade-down">
              <a
                href="https://www.instagram.com/maksleskiv223/"
                target="_blank"
              >
                <img src="/LvivProject\photo\maksym.png" alt="maksym" />
              </a>
            </div>

            <div data-aos="fade-up">
              <a href="https://www.instagram.com/_olesia_shn/" target="_blank">
                <img src="/LvivProject\photo\olesia.png" alt="olesia" />
              </a>
            </div>

            <div data-aos="fade-down">
              <a href="https://www.instagram.com/artemchek22/" target="_blank">
                <img src="/LvivProject\photo\artem.png" alt="artem" />
              </a>
            </div>

            <div data-aos="fade-up">
              <a href="" target="_blank">
                <img src="/LvivProject\photo\oleg.png" alt="oleg" />
              </a>
            </div>

            <div data-aos="fade-down">
              <a href="#" target="_blank">
                <img src="/LvivProject\photo\olexandr.png" alt="olexandr" />
              </a>
            </div>

            <div data-aos="fade-up">
              <a href="https://www.instagram.com/feardelans/" target="_blank">
                <img src="/LvivProject\photo\vlad.png" alt="vlad" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Creators;
