import React from "react";
import "../src/index.css"; // Upewnij się, że zawiera style poniżej
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import Buttons from "../components/Buttons";

export default function Slider() {
  return (
    <div className="h-screen w-screen flex items-stretch justify-stretch ">
      <Swiper
        className="h-full w-full"
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="w-full h-full  ">
          <img
            src="/images/rest1.jpg"
            alt="restaurant 1"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full  ">
          <img
            src="/images/rest2.jpg"
            alt="restaurant 2"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute inset-0 flex justify-center items-center w-full p-4">
        <Buttons />
      </div>
    </div>
  );
}
