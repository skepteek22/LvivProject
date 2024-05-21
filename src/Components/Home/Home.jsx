import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "swiper/scss/effect-fade";
import "./Home.scss";

import { EffectFade, Pagination, Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <>
      <section className="intro">
      <Swiper
          centeredSlides={true}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide className="mySwiper__slide">
            <div className="slide__fill">
              <div className="slide1-title">
                <h1>Romantic Places</h1>
              </div>
              <div className="slide1-info">
                <p>
                  Lviv has plenty of romantic places to visit. We invite you to
                  take a stroll through the Old Town, where you can admire the
                  architecture of medieval buildings and cozy cafes.
                </p>

                <p>
                  It's also worth visiting Shevchenko Park with its lake and
                  alleys, where you can enjoy a bike ride or a boat trip together.
                  Another wonderful place is High Castle Hill, which offers a
                  magnificent view of the city, especially enchanting in the
                  evening when the city is illuminated by lights.
                </p>
              </div>
            </div>
            <img src="/photo/romantic-places.png" alt="main-bg" />
          </SwiperSlide>

          <SwiperSlide className="mySwiper__slide">
            <div className="slide2-title">
              <h1>Restaurants</h1>
            </div>
            <div className="slide2-info">
              <p>
                Lviv is renowned for its rich culture and delicious cuisine. The
                city boasts numerous excellent restaurants where you can taste a
                wide variety of Ukrainian, European, and international dishes.
              </p>
              <p>
                From cozy cafes with a unique atmosphere to elegant restaurants
                with exquisite service, Lviv has something for everyone's taste.
              </p>
            </div>
            <img src="/photo/restaurants.png" alt="restaurants" />
          </SwiperSlide>

          <SwiperSlide className="mySwiper__slide">
            <div className="slide3-title">
              <h1>Hotels</h1>
            </div>
            <div className="slide3-info">
              <p>
                Lviv offers a wide range of accommodation options to suit every
                taste and budget. From luxurious five-star hotels in the heart
                of the city to cozy boutique hotels tucked away in quiet
                neighborhoods, there's something for everyone.
              </p>

              <p>
                Whether you're visiting for business or pleasure, you'll find
                comfortable and welcoming hotels with excellent service and all
                the amenities you need for a pleasant stay.
              </p>
            </div>
            <img src="/photo/hotels.png" alt="hotels" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Home;
