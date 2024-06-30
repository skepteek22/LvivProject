import React, { Fragment, useState } from "react";
import TripsList from "../../TripsList/TripsList";
import './PopularTrips.scss'

const PopularTrips = () => {
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

  return (
    <Fragment>
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
                    Do you want to visit the best places in Lviv, but don't know
                    where to start?
                  </p>
                </div>

                <div className="right__bottom">
                  <p>
                    Choose your tour and join the journey without thinking about
                    the details. We will do it for you!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <TripsList tripsList={tripsLIst} />
        </div>
      </section>
    </Fragment>
  );
};

export default PopularTrips;
