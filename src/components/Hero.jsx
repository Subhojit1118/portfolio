import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import profile from "../assets/images/profile-img.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper text-white w-full h-[88vh]"
      >
        <SwiperSlide className="flex items-center justify-between">
          <div className="w-1/2 flex flex-col items-start ">
            <h6 className="text-[#ffbd39] font-black">HELLO!</h6>
            <h1 className="font-black text-6xl mt-4 mb-8">
              i'm{" "}
              <span className="text-[#ffbd39] text-6xl font-black">
                Subhojit Halder
              </span>{" "}
            </h1>
            <h3>a freelance web developer</h3>
            <div className="flex gap-4 mt-6">
              <button className="bg-[#ffbd39] text-black px-7 py-4 rounded-full font-bold text-xs">
                HIRE ME
              </button>
              <button className="text-white border rounded-full px-7 py-4 font-bold text-xs">
                MY WORKS
              </button>
            </div>
          </div>
          <img className="w-1/2 " src={profile} alt="profile" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-between">
          <div className="w-1/2  flex flex-col items-start ">
            <h6 className="text-[#ffbd39] font-black">HELLO!</h6>
            <h1 className="font-black text-6xl mt-4 mb-8">
              i'm a{" "}
              <span className="text-[#ffbd39] text-6xl font-black">
                web developer
              </span>{" "}
              <span className="font-black text-6xl">Based In India</span>
            </h1>
            <div className="flex gap-4 mt-6">
              <button className="bg-[#ffbd39] text-black px-7 py-4 rounded-full font-bold text-xs">
                HIRE ME
              </button>
              <button className="text-white border rounded-full px-7 py-4 font-bold text-xs">
                MY WORKS
              </button>
            </div>
          </div>
          <img className="w-1/2" src={profile} alt="profile" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-between">
          <div className="w-1/2  flex flex-col items-start ">
            <h6 className="text-[#ffbd39] font-black">HELLO!</h6>
            <h1 className="font-black text-6xl mt-4 mb-8">
              i'm a{" "}
              <span className="text-[#ffbd39] text-6xl font-black">
                programmer
              </span>{" "}
            </h1>
            <div className="flex gap-4 mt-6">
              <button className="bg-[#ffbd39] text-black px-7 py-4 rounded-full font-bold text-xs">
                HIRE ME
              </button>
              <button className="text-white border rounded-full px-7 py-4 font-bold text-xs">
                MY WORKS
              </button>
            </div>
          </div>
          <img className="w-1/2" src={profile} alt="profile" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
