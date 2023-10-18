import React from "react";
import TextModifier from "react-text-modifier";
const SingleBannerSlider = ({ Slider = {} }) => {
  const { bg, title, sub_title } = Slider;
  return (
    <>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div className="absolute top-1/2 -translate-y-1/2 text-center w-full text-white main-slider__details">
        <p className="text-2xl md:text-3xl font-bold ">{sub_title}</p>
        <TextModifier
          text={title}
          as="h1"
          renderSeparator={() => <div className="mt-1 md:mt-4" />}
          className="font-bold text-3xl md:text-3xl lg:text-3xl font-serif"
          highlight={[
            "CARE",
            "SMILE",
            "HEALTH",
            "SURGEON",
            "time",
            "Lifestyle",
            "assistance",
          ]}
          highlightClassName="text-3xl md:text-3xl lg:text-4xl text-blue-500"
        />
        <button className="text-xl font-bold font-serif my-6 bg-emerald-500 p-4 rounded-md">
          Read More
        </button>
        <button className="text-xl font-bold font-serif my-6 bg-yellow-500 p-4 rounded-md ms-5">
          Contact Us
        </button>
      </div>
    </>
  );
};

export default SingleBannerSlider;
