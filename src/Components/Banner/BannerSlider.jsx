"use client";

import { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, EffectFade, Autoplay } from "swiper/modules";
// import "swiper/css/bundle";
// import mainSlider from "@/Data/mainSlider";
// import SingleBannerSlider from "./SingleBannerSlider";
import Image from "next/image";
import Link from "next/link";
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
  useEffect(() => {
    const bannerImage = document.querySelectorAll("#image-aos");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-image");
          observer.unobserve(entry.target);
        }
      });
    });
    bannerImage.forEach((simg) => {
      observer.observe(simg);
    });
  });
  return (
    <div
      className="main-slider mb-2 w-full pt-12 bg-[#E0F4FF] min-h-[80vh]"
      id="banner"
    >
      {/* <Swiper
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
      </Swiper> */}
      <div className="lg:flex mx-auto w-full ">
        <div className=" md:w-10/12 w-full flex  items-center mt-10">
          <div className="md:w-8/12 w-11/12 mx-auto md:text-left text-center">
            <h1 className="md:text-4xl text-3xl font-bold">
              Find The Care <br /> You Need.
            </h1>
            <p className="text-slate-500 my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
              ducimus! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Magnam, magni!
            </p>
            <button className="btn btn-success">Make appointment</button>
          </div>
        </div>
        <div className="md:flex gap-4 w-full mt-10 mx-auto md:ps-6 ">
          <div className="w-8/12 mx-auto">
            <div
              className=" bg-[#00A9FF]/80  md:w-[300px] w-[250px] md:h-[300px] h-[250px] banner-image-custom-style   -z-10 overflow-hidden translate-y-32 opacity-0 duration-500"
              id="image-aos"
            >
              <img
                height={500}
                width={500}
                className=" mx-auto -mt-10 "
                src="https://i.ibb.co/sg3sH29/pexels-antoni-shkraba-5215024.png"
                alt="doctor image"
              />
              {/* <div className="bg-orange-700/40 absolute w-[300px] h-[300px] banner-image-custom-style top-28  -z-10"></div> */}
            </div>
            <div
              className=" bg-[#00A9FF]/80   md:w-[150px] w-[100px] md:h-[150px] h-[100px] banner-image-custom-style   -z-10 overflow-hidden translate-y-32 opacity-0 duration-500 delay-100"
              id="image-aos"
            >
              <img
                height={100}
                width={100}
                className="object-contain mx-auto -mb-20"
                src="https://i.ibb.co/Nt7HNyk/pexels-pavel-danilyuk-5998474.png"
                alt="doctor image"
              />
              {/* <div className="bg-orange-700/40 absolute w-[300px] h-[300px] banner-image-custom-style top-28  -z-10"></div> */}
            </div>
          </div>
          <div className="w-10/12 mx-auto mt-9">
            <div
              className=" bg-[#2192FF]/80  md:w-[350px] w-[300px] md:h-[350px]  h-[300px] banner-image-custom-style   -z-10 overflow-hidden translate-y-32 opacity-0 duration-500 delay-150"
              id="image-aos"
            >
              <img
                height={300}
                width={300}
                className=" object-contain mx-auto -z-10"
                src="https://i.ibb.co/SPBwFHC/pexels-jrfotosgrand-fotografia-12660379.png"
                alt="doctor image"
              />
              {/* <div className="bg-orange-700/40 absolute w-[300px] h-[300px] banner-image-custom-style top-28  -z-10"></div> */}
            </div>
            <div
              className=" bg-[#00A9FF]/80   w-[120px] h-[120px] banner-image-custom-style   -z-10 overflow-hidden translate-y-32 opacity-0 duration-500 delay-75"
              id="image-aos"
            >
              <img
                height={350}
                width={350}
                className=" object-contain mx-auto -mt-8"
                src="https://i.ibb.co/Tm5fqcY/pexels-los-muertos-crew-8460159.png
               "
                alt="doctor image"
              />
              {/* <div className="bg-orange-700/40 absolute w-[300px] h-[300px] banner-image-custom-style top-28  -z-10"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
