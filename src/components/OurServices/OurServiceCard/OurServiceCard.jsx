import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

export default function OurServiceCard({content, precedence, handleModal}) {
  return (
<div className="relative mt-6 flex pb-24  flex-col  bg-white bg-clip-border text-gray-700 border-2 hover:border-opacity-100 border-opacity-0 border-theme_orange transition-all duration-500">
  <div className="p-6">
    <h2 className='text-[100px] font-bold text-gray-300'>{`0${precedence}`}</h2>
    <h5 className="mb-2 block text-[18px] font-semibold leading-snug tracking-normal text-blue-gray-900 uppercase antialiased">
    {content.title}
    </h5>
    <p className="block uppercase text-xs font-light leading-relaxed text-inherit antialiased">
    {content.description}
    </p>
  </div>
  <div className="absolute bottom-6 p-6 pt-0 left-0">
      <button
        className="flex items-center gap-2 text-xs font-medium hover:text-theme_orange transition-all duration-300 uppercase group"
        type="button"
        onClick={handleModal}
      >
        Learn More <HiArrowLongRight className="text-xl group-hover:translate-x-1 transition-transform duration-500 " />
        
      </button>
  </div>
</div>

  )
}
