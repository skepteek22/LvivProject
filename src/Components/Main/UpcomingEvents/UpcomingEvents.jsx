import React, { Fragment, useCallback, useState } from "react";
import CardList from "../../CardList/CardList";
import './UpcomingEvents.scss'

const UpcomingEvents = () => {
  const [cardObject, setCardObject] = useState([
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

  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredEvents = selectedCategory
    ? cardObject.filter((event) => event.type === selectedCategory)
    : cardObject;

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  return (
    <Fragment>
      <section className="upcoming-events" id="events">
        <div className="upcoming-events__wrapper">
          <div className="upcoming-events__title-icon">
            <div className="title-icon__icon">
              <img src="/LvivProject/svg/calendar-mini.svg" alt="calendar" />
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
    </Fragment>
  );
};

export default UpcomingEvents;
