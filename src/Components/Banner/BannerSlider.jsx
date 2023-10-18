'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import mainSlider from '@/Data/mainSlider';
import SingleBannerSlider from './SingleBannerSlider';
const BannerSlider = () => {
    return (
        <div className='main-slider mb-2'>
        <Swiper slidesPerView={1}
            loop
            navigation
            effect='fade-out'
            modules={[Navigation, EffectFade, Autoplay]}
            >

                {
                    mainSlider.map((Slider)=><SwiperSlide key={Slider.id}>

                       <SingleBannerSlider Slider={Slider}></SingleBannerSlider> 
                    </SwiperSlide>)
                }
            
         
        </Swiper>
    </div>
    );
};

export default BannerSlider;