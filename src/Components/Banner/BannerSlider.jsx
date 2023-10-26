"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import mainSlider from "@/Data/mainSlider";
import SingleBannerSlider from "./SingleBannerSlider";
const BannerSlider = () => {
  useEffect(() => {
    const banner = document.querySelector("#banner");
    const navBG = document.querySelector("#nav-bg");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          navBG.classList.add("nav-bg-color");
        } else {
          navBG.classList.remove("nav-bg-color");
        }
      });
    });
    observer.observe(banner);
  });
  return (
    <div className="main-slider mb-2" id="banner">
      <Swiper
        slidesPerView={1}
        loop
        autoplay={true}
        navigation
        effect="fade-out"
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {mainSlider.map((Slider) => (
          <SwiperSlide key={Slider.id}>
            <SingleBannerSlider Slider={Slider}></SingleBannerSlider>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
