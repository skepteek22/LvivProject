import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/effect-coverflow'
import './TripsList.scss'

import { Navigation, Keyboard, EffectCoverflow} from 'swiper/modules';
import TripCard from '../TripCard/TripCard';

const TripsList = ({tripsList}) => {
  return (
    <>
      <div className='wrapper__block-bottom'>
                <Swiper
                  effect='coverflow'
                  grabCursor={true}
                  centeredSlides={true}
                  keyboard={true}
                  loop={true}
                  slidesPerView={'auto'}
                  navigation={true}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                  }}
                  modules={[EffectCoverflow, Keyboard, Navigation]}
                  className='swiperTrips'
                >
                
                {tripsList.map( trip => (
                  <SwiperSlide key={trip.id} className='swiperTrips__slide'>
                    <TripCard tripsList={trip}/>
                  </SwiperSlide>
                ))}

                
                </Swiper>

                
              </div>    
    </>
  )
}

export default TripsList
