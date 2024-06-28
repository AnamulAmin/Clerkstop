import React, { useCallback, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./Hero.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import HeroContent from "./HeroContent/HeroContent";
export default function Hero() {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        ref={sliderRef}
        speed={600}
        parallax={true}
        pagination={{ clickable: true }}
        modules={[Parallax, Pagination, Navigation]}
        className="hero"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image": "url(/hero/hero.png)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <div className="gallery_navigate_area text-white absolute bottom-[10%] -translateY-1/2 left-0 z-[9999] w-full flex justify-between items-center px-12 text-6xl">
          <div className="container mx-auto px-10 relative flex justify-center lg:justify-start items-center text-left z-10 space-x-20">
            <button
              className="transition-all duration-500 hover:-translate-x-3 hover:text-theme_orange"
              onClick={handlePrev}
            >
              <HiArrowLongLeft />
            </button>
            <button
              className="transition-all duration-500 hover:translate-x-3 hover:text-theme_orange"
              onClick={handleNext}
            >
              <HiArrowLongRight />
            </button>
          </div>
        </div>
        <SwiperSlide>
          <HeroContent />
        </SwiperSlide>
        <SwiperSlide>
          <HeroContent />
        </SwiperSlide>
        <SwiperSlide>
          <HeroContent />
        </SwiperSlide>
        <SwiperSlide>
          <HeroContent />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
