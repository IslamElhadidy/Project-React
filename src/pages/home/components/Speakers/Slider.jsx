import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import speakerData from '../../../../design-system/components/Creative/Data'
import Creative from '../../../../design-system/components/Creative/Creative'


function Slider() {
  return (
    
    <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={4}

        >
            {
                speakerData.map(element => {
                    return(
                        <SwiperSlide key={element.id} > 
                            <Creative name={element.name} jop={element.jop} img={element.img}/>
                        </SwiperSlide>
                    )
                })
            }
            


    </Swiper>
   
  )
}

export default Slider
