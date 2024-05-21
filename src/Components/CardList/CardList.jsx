import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import "./CardList.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Pagination, Navigation, Keyboard } from "swiper/modules";

const CardList = ({ cardList }) => {
  return (
    <>
      <div className="list-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={-150}
          grabCursor={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Navigation, Keyboard]}
          className="mySlides"
        >
          <div className="swiper-controller">
            <img
              className="swiper-button-next"
              src="/LvivProject/svg/
\arrow-right-circle-line.svg"
              alt=""
            />
            <img
              className="swiper-button-prev"
              src="/LvivProject/svg/
\arrow-left-circle-line.svg"
              alt=""
            />
          </div>

          {cardList.map((slide) => (
            <SwiperSlide className="mySlide" key={slide.id}>
              <Card info={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CardList;
