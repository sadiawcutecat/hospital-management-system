"use client";

import { RiDoubleQuotesL } from "react-icons/ri";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { testimonialData } from "@/Data/testimonialData";

const Testimonial = () => {
  return (
    <div className=" md:p-20 p-8 mb-10">
      <div className="text-center img-slide opacity-0 duration-1000 mx-auto">
        <h3 className="text-2xl font-bold text-orange-500">
          Feedback from our patients
        </h3>
        <h1 className="text-4xl font-bold my-4">TESTIMONIALS</h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          0: {
            // width: 768,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 3,
          },
        }}
        loop
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper img-slide opacity-0 duration-1000"
      >
        <div>
          {testimonialData.map((testimonial, i) => (
            <SwiperSlide key={i} className="shadow-2xl mt-7 font-serif ">
              <div className="p-8">
                <p className="text-justify">{testimonial.comments}</p>
                <div className="flex space-x-8 mt-6">
                  <img
                    src={testimonial.picture}
                    alt=""
                    className="h-16 w-16 rounded-full"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="">{testimonial.profession}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <RiDoubleQuotesL
                    className="text-orange-500"
                    style={{ fontSize: "4rem" }}
                  ></RiDoubleQuotesL>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
