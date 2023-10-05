import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import css from "./slider.css"
import { Products } from "../../Assets/data/products";
import { useNavigate } from 'react-router-dom';

export const Slider = () => {

    const nav = useNavigate()

    const goToDetails = (e) => {
        nav("/productDetail", {
            state: {
                product: e
            }
        })
    }

  return (
    <>
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
            Products.map((product, i) => {
                return (
                    <SwiperSlide key={i}>
                    
                    <div className="left-s">

                        <div className="productDetails">
                            <span className='name'>{product.name}</span>
                            <span className='content'>{product.content}</span>
                        </div>

                        <span className='price'>{product.price}</span>
                        <div className='shop-btn' onClick={() => {goToDetails(product)}}>Shop now</div>

                    </div>

                    <img src={product.img} alt={product.name} className="productImage" />

                </SwiperSlide>
                )
            })
        }
    </Swiper>

    </div>
    </>
  )
}
