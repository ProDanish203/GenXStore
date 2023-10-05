import React, { useState } from 'react'
import css from "./testimonials.css"
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { TestimonialsData } from "../../Assets/data/testimonials"

export const Testimonials = () => {

    const [data, setdata] = useState(TestimonialsData)

  return (
    <>
    <section className="testimonials-section">

    <h3 className="heading">our <span>reviews</span></h3>

    <div className="slide-container">

        <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
            856: {
                slidesPerView: 3
            }, 
            600:{
                slidesPerView: 2
            },
            0:{
                slidesPerView: 1
            }
        }}
        >
            {
                data.map((x, i) => {
                    return (
                    <SwiperSlide key={i}>
                          
                        <img src={x.img} alt={x.name} className="reviewImg"/>

                        <div className="name">{x.name}</div>
                        <div className="content">{x.content}</div>


                    </SwiperSlide>
                    )
                })
            }
        </Swiper>

    </div>

    </section>
    </>
  )
}
