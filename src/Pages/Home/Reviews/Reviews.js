import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'


// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);



const Reviews = () => {
    return (
        <>
            <Swiper slidesPerView={1} spaceBetween={10} pagination={{
                "clickable": true
            }} breakpoints={{
                "@0.00": {
                    "slidesPerView": 1,
                    "spaceBetween": 10
                },
                "@0.75": {
                    "slidesPerView": 2,
                    "spaceBetween": 20
                },
                "@1.00": {
                    "slidesPerView": 3,
                    "spaceBetween": 40
                },
                "@1.50": {
                    "slidesPerView": 4,
                    "spaceBetween": 50
                }
            }} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
};

export default Reviews;