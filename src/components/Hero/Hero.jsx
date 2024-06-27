

import React, { useCallback, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './Hero.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

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
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        ref={sliderRef}
        speed={600}
        parallax={true}
        pagination={true}
        modules={[Parallax, Pagination, Navigation]}
        className="hero"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(/hero/hero.png)'
          }}
          data-swiper-parallax="-23%"
        >

        </div>
        <div className="gallery_navigate_area text-white absolute bottom-[16%] -translateY-1/2 left-0 z-[9999] w-full flex justify-between items-center px-12 text-6xl">
        <div className='container mx-auto px-10 relative text-left z-10 space-x-20'>

        <button className="transition-all duration-500 hover:-translate-x-3 hover:text-theme_orange" onClick={handlePrev}>
          <HiArrowLongLeft />
        </button>
        <button className="transition-all duration-500 hover:translate-x-3 hover:text-theme_orange" onClick={handleNext}>
          <HiArrowLongRight />
        </button>
        </div>
      </div>
        <SwiperSlide>
        <div className='container mx-auto px-10 relative text-left z-10'>
    <ul className="text-lg text-theme_orange mb-8 list-disc flex gap-8">
        <li className='list-none'>Data entry/Bookkeeping</li>
        <li>Digital Marketing</li>
        <li>Hero/web Development</li>
        <li>Virtual Assistants</li>
    </ul>
    <h1 className="text-6xl font-bold leading-tight mb-4 text-white capitalize max-w-[400px] ">One stop <br /> shop for all your business needs</h1>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='container mx-auto px-10 relative text-left z-10'>
    <ul className="text-lg text-theme_orange mb-8 list-disc flex gap-8">
        <li className='list-none'>Data entry/Bookkeeping</li>
        <li>Digital Marketing</li>
        <li>Hero/web Development</li>
        <li>Virtual Assistants</li>
    </ul>
    <h1 className="text-6xl font-bold leading-tight mb-4 text-white capitalize max-w-[400px] ">One stop <br /> shop for all your business needs</h1>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='container mx-auto px-10 relative text-left z-10'>
    <ul className="text-lg text-theme_orange mb-8 list-disc flex gap-8">
        <li className='list-none'>Data entry/Bookkeeping</li>
        <li>Digital Marketing</li>
        <li>Hero/web Development</li>
        <li>Virtual Assistants</li>
    </ul>
    <h1 className="text-6xl font-bold leading-tight mb-4 text-white capitalize max-w-[400px] ">One stop <br /> shop for all your business needs</h1>
    </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

