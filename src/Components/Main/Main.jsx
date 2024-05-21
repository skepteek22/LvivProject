import React, { useState, useEffect } from "react";
import "./Main.scss";
import CardList from "../CardList/CardList";
import TripsList from "../TripsList/TripsList";
import Aos from "aos";
import "aos/dist/aos.css";
import Map from "../Map/Map";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const Main = () => {
  const [cardList, setCardList] = useState([
    {
      id: 1,
      type: "Concerts",
      date: "28 June, 17:00-  21:30",
      title: "NIKOW. RECITAL",
      place: "Malevich, Chornovil Avenue 2",
      price: "from 1020 ₴",
      bgImage: "/LvivProject/photo/nikow.jpg",
    },
    {
      id: 2,
      type: "Concerts",
      date: "24 August 19:00-21:00",
      title: "Artem Pyvovarov in support of the armed forces",
      place: "!FESTre/LvivProject territory, Staroznesenska St 24-26",
      price: "from 950 ₴",
      bgImage: "/LvivProject/photo/pivovarov.jpg",
    },
    {
      id: 3,
      type: "Concerts",
      date: "24 June 19:00-21:00",
      title: "Max Barskih",
      place: "!FESTre/LvivProject territory, Staroznesenska St 24-26",
      price: "from 890 ₴",
      bgImage: "/LvivProject/photo/barskih.jpg",
    },
    {
      id: 4,
      type: "Concerts",
      date: "1 July 18:30-20:30",
      title: "One in canoe",
      place: "Lviv Theater of Opera and Ballet, Svobody Ave 28",
      price: "from 290 ₴",
      bgImage: "/LvivProject/photo/odynvkanoe.jpg",
    },
    {
      id: 5,
      type: "Events this week",
      date: "24 May 19:00-21:00",
      title: "Ziferblat",
      place: "Malevich Concert Arena, Chornovil Avenue 2",
      price: "from 350 ₴",
      bgImage: "/LvivProject/photo/ziferblat.jpg",
    },
    {
      id: 6,
      type: "Concerts",
      date: "27 May 19:00-21:00",
      title: "Andrii Kapral. Give me a chance",
      place: "Lviv Theater of Opera and Ballet, Svobody Ave 28",
      price: "from 260 ₴",
      bgImage: "/LvivProject/photo/kapral1.jpg",
    },
    {
      id: 7,
      type: "Concerts",
      date: "18 June 19:00-21:00",
      title: "Yulia Sanina THE HARDKISS - special kiss",
      place: "Lviv Theater of Opera and Ballet, Svobody Ave 28",
      price: "from 790 ₴",
      bgImage: "/LvivProject/photo/sanina.jpg",
    },
    {
      id: 8,
      type: "Theatre",
      date: "26 May 18:00-19:30",
      title: "Assault and Piaf",
      place: "Lviv Theater of Opera and Ballet, Svobody Ave 28",
      price: "from 200 ₴",
      bgImage: "/LvivProject/photo/piaf.jpg",
    },
    {
      id: 9,
      type: "Theatre",
      date: "11 June 18:30-21:00",
      title: "What men are silent about",
      place:
        'House of culture of railway workers "Rocks", Fedkovich Street 54/56',
      price: "from 340 ₴",
      bgImage: "/LvivProject/photo/gnatkovskii2.jpg",
    },
    {
      id: 10,
      type: "Theatre",
      date: "12 June 19:00-21:00",
      title: "How to raise a man at home",
      place:
        'House of culture of railway workers "Rocks", Fedkovich Street 54/56',
      price: "from 340 ₴",
      bgImage: "/LvivProject/photo/vitovska2.jpg",
    },
    {
      id: 11,
      type: "Theatre",
      date: "24 May 19:00-21:00",
      title: "I am Batyrun",
      place: "OKO Theater, Theatralna street 22",
      price: "from 250 ₴",
      bgImage: "/LvivProject/photo/batyrun2.jpg",
    },
    {
      id: 12,
      type: "Festivals",
      date: "2-4 August 11:00-23:00",
      title: "Faine Misto: land of future legends",
      place: "!FESTre/LvivProject territory, Staroznesenska St 24-26",
      price: "from 600 ₴",
      bgImage: "/LvivProject/photo/faine-misto2.jpg",
    },
  ]);

  const [tripsLIst, setTripsList] = useState([
    {
      id: 1,
      title: "Ukraine Cuisine Food Tour",
      description:
        "Accompanied by our gourmet guide, who is a real expert in Ukrainain cuisine, you will indulge in some treats at Lviv's top local restaurants, stroll along the historic streets while tasting local food, and learn about the culinary treasures of the region.",
      bgImage: "/LvivProject/photo/trips1.jpg",
      site: "https://www.tripadvisor.com/AttractionProductReview-g295377-d15153974-Ukrainian_Cuisine_Food_Tour-Lviv_Lviv_Oblast.html",
    },
    {
      id: 2,
      title: "Historical walks in Old Town",
      description:
        "This tour is ideal for those who are discovering the spirit of Lviv for the first time, but already are ready to give it their hearts, as well as for those who have been to Lviv many times, but have never explored the city with a guide.",
      bgImage: "/LvivProject/photo/trips2.jpg",
      site: "https://www.tripadvisor.com/AttractionProductReview-g295377-d20032333-Historical_walk_in_Old_Town-Lviv_Lviv_Oblast.html",
    },
    {
      id: 3,
      title: "Undergrounds Private Walking Tour",
      description:
        "Discover both the over-ground and underground sights of Lviv's UNESCO-listed Old Town in one convenient private walking tour.",
      bgImage: "/LvivProject/photo/trips3.jpg",
      site: "https://www.tripadvisor.com/AttractionProductReview-g295377-d11471176-Undergrounds_of_Lviv_Private_Walking_Tour-Lviv_Lviv_Oblast.html",
    },
    {
      id: 4,
      title: "Zhovkva and Krekhiv Monastery Private Half-Day Tour from Lviv",
      description:
        "Visit two magnificent historic sites on this half-day tour from Lviv and benefit from the expertise of a private guide.",
      bgImage: "/LvivProject/photo/trips4.jpg",
      site: "https://www.tripadvisor.com/AttractionProductReview-g295377-d11471067-Zhovkva_and_Krekhiv_Monastery_Private_Half_Day_Tour_from_Lviv-Lviv_Lviv_Oblast.html",
    },
    {
      id: 5,
      title: "Lviv Private 3-Hour Tour - Best Sights",
      description:
        "Lviv Old Town tour is a private walking tour with Lviv local who will take you along the narrow brick streets of the Old City of Lviv and wıll share exciting stories of each amazing attraction.",
      bgImage: "/LvivProject/photo/trips5.jpg",
      site: "https://www.tripadvisor.com/AttractionProductReview-g295377-d19957744-Lviv_Private_3_Hour_Tour_Best_Sights-Lviv_Lviv_Oblast.html",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const filteredEvents = selectedCategory
    ? cardList.filter((event) => event.type === selectedCategory)
    : cardList;

  const [mapCategory, setMapCategory] = useState(null);
  const handleMapCategoryChange = (category) => {
    setMapCategory(category);
  };

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const [counterOn, setCounterOn] = useState(false);

  const [from, setFrom] = useState("Krakow");
  const [to, setTo] = useState("Lviv");

  const handleSwitch = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <>
      <main className="main">
        <div className="main-wrapper">
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

          <section className="upcoming-events" id="events">
            <div className="upcoming-events__wrapper">
              <div className="upcoming-events__title-icon">
                <div className="title-icon__icon">
                  <img
                    src="/LvivProject/svg/calendar-mini.svg"
                    alt="calendar"
                  />
                  <span>All events</span>
                </div>

                <div className="title-icon__title">
                  <h1>Upcoming events</h1>
                </div>
              </div>

              <div className="upcoming-events__sort-list">
                <nav className="sort-list__container">
                  <ul>
                    <div data-aos="fade-right" data-aos-delay="200">
                      <li onClick={() => handleCategoryChange(null)}>
                        <span>MAIN EVENTS</span>
                      </li>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="300">
                      <li onClick={() => handleCategoryChange("Concerts")}>
                        <span>CONCERTS</span>
                      </li>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="400">
                      <li onClick={() => handleCategoryChange("Theatre")}>
                        <span>Theatre</span>
                      </li>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="500">
                      <li onClick={() => handleCategoryChange("Festivals")}>
                        <span>Festivals</span>
                      </li>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="600">
                      <li onClick={() => handleCategoryChange("Stand-up")}>
                        <span>Stand up</span>
                      </li>
                    </div>
                  </ul>
                </nav>
              </div>

              <CardList cardList={filteredEvents} />
            </div>
          </section>

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

                <div className="main-block__right">
                  <div className="right__card-container">
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="popular-trips" id="popular-trips">
            <div className="popular-trips__wrapper">
              <div className="wrapper__block-top">
                <div data-aos="fade-right">
                  <div className="block-top__left">
                    <div className="left__heading">
                      <h1>Popular trips</h1>
                    </div>
                    <div className="left__desc">
                      <span>Start your best journey with us!</span>
                    </div>
                  </div>
                </div>

                <div data-aos="fade-left">
                  <div className="block-top__right">
                    <div className="right__top">
                      <p>
                        Do you want to visit the best places in Lviv, but don't
                        know where to start?
                      </p>
                    </div>

                    <div className="right__bottom">
                      <p>
                        Choose your tour and join the journey without thinking
                        about the details. We will do it for you!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <TripsList tripsList={tripsLIst} />
            </div>
          </section>

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
                <img
                  src="/LvivProject/photo/travel-lviv.png"
                  alt="travel-lviv"
                />
              </div>
            </div>
          </section>

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
                  <Map category={mapCategory} />
                </div>
              </div>
            </div>
          </section>

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
                  <a
                    href="https://www.instagram.com/_olesia_shn/"
                    target="_blank"
                  >
                    <img src="/LvivProject\photo\olesia.png" alt="olesia" />
                  </a>
                </div>

                <div data-aos="fade-down">
                  <a
                    href="https://www.instagram.com/artemchek22/"
                    target="_blank"
                  >
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
                  <a
                    href="https://www.instagram.com/feardelans/"
                    target="_blank"
                  >
                    <img src="/LvivProject\photo\vlad.png" alt="vlad" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Main;
