
import TestimonialCard from './TestimonialCard/TestimonialCard'
import SectionHeading from '../Parcials/SectionHeading/SectionHeading'
import  { useCallback, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './Testimonials.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default function Testimonials() {
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
    <section className=" py-20">
        <SectionHeading subHeading="TESTIMONIALS" heading="Feedback from you" />
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        ref={sliderRef}
        speed={600}
        parallax={true}
        loop={true}
        modules={[ Navigation]}
        className="testimonials"
      >
        
        <div className="gallery_navigate_area text-black absolute top-1/2 -translateY-1/2 left-0 z-[9999] w-full flex justify-between items-center px-12 text-6xl">
        <div className='container mx-auto px-10 relative text-left z-10 flex justify-between items-center overflow-hidden'>

        <button className="transition-all duration-500 hover:-translate-x-3 hover:text-theme_orange" onClick={handlePrev}>
          <HiArrowLongLeft />
        </button>
        <button className="transition-all duration-500 hover:translate-x-3 hover:text-theme_orange" onClick={handleNext}>
          <HiArrowLongRight />
        </button>
        </div>
      </div>
        <SwiperSlide>
        <div className="container mx-auto">

<TestimonialCard />
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="container mx-auto">

<TestimonialCard />
</div>
        </SwiperSlide>
      </Swiper>
        

    </section>
  )
}






