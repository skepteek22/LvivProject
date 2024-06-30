import React, { Fragment, useState } from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import './AboutLviv.scss'

const AboutLviv = () => {
    const [counterOn, setCounterOn] = useState(false);
  
    return (
    <Fragment>
      <section className="about-lviv" id="about-lviv">
            <div className="about-lviv__wrapper">
              <div className="about-lviv__left-side">
                <div data-aos="fade-up">
                  <div className="left-side__title">
                    <h1>About Lviv</h1>
                  </div>
                </div>

                <div data-aos="fade-right">
                  <div className="left-side__info">
                    <p>
                      Lviv is the pearl of Western Ukraine. A city that for
                      centuries stood on the border between Eastern and Western
                      cultures, a city rich in historical events, a city of
                      unique architectural monuments and ensembles. Excursions
                      in Lviv will leave a lot of positive emotions. <br />
                      We invite you on a trip to Lviv!
                    </p>
                  </div>
                </div>

                <div data-aos="zoom-in">
                  <div className="left-side__info-holder">
                    <div className="info-holder__text-card">
                      <div className="text-card__title">
                        <h3>Population</h3>
                      </div>

                      <ScrollTrigger onEnter={() => setCounterOn(true)}>
                        <div className="text-card__number">
                          <span>
                            {counterOn && (
                              <CountUp
                                start={0}
                                end={717100}
                                delay={0}
                                duration={2}
                              />
                            )}
                            +
                          </span>
                        </div>
                      </ScrollTrigger>
                    </div>

                    <div className="info-holder__text-card">
                      <div className="text-card__title">
                        <h3>Area</h3>
                      </div>

                      <ScrollTrigger onEnter={() => setCounterOn(true)}>
                        <div className="text-card__number">
                          <span>
                            {counterOn && (
                              <CountUp
                                start={0}
                                end={149}
                                delay={0}
                                duration={2}
                              />
                            )}
                            km&sup2;
                          </span>
                        </div>
                      </ScrollTrigger>
                    </div>

                    <div className="info-holder__text-card">
                      <div className="text-card__title">
                        <h3>Districts</h3>
                      </div>

                      <ScrollTrigger onEnter={() => setCounterOn(true)}>
                        <div className="text-card__number">
                          <span>
                            {counterOn && (
                              <CountUp
                                start={0}
                                end={6}
                                delay={0}
                                duration={2}
                              />
                            )}
                          </span>
                        </div>
                      </ScrollTrigger>
                    </div>

                  </div>
                </div>
              </div>

              <div className="about-lviv__right-side">
                <div data-aos="fade-down">
                  <div className="right-side__photo-container">
                    <img src="/LvivProject\photo\city1.png" alt="lviv1" />
                  </div>
                </div>

                <div data-aos="fade-up">
                  <div className="right-side__photo-container">
                    <img src="/LvivProject\photo\city2.png" alt="lviv2" />
                  </div>
                </div>

                <div data-aos="fade-down">
                  <div className="right-side__photo-container">
                    <img src="/LvivProject\photo\city3.png" alt="lviv3" />
                  </div>
                </div>

              </div>
            </div>
          </section>
    </Fragment>
  )
}

export default AboutLviv
