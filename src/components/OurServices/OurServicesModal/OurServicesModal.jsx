import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'
import { IoMdClose } from 'react-icons/io'

export default function OurServicesModal({content, handleModal, setShowConsultationModal}) {
  return (
    <div className='fixed top-0 left-0 bg-black bg-opacity-50 z-50 flex justify-center items-center w-svw h-dvh'  >
        <div className="container pt-14 p-8 m-auto bg-theme_light_blue overflow-auto relative">
        <button className="absolute top-6 right-10 text-2xl" onClick={handleModal}>
            <IoMdClose />
            </button>
  <div className="p-6 flex flex-col gap-6 justify-center items-center">
    <h5 className="mb-2 block text-6xl font-semibold leading-snug tracking-normal text-blue-gray-900 uppercase antialiased">
    {content.title}
    </h5>
    <p className="block uppercase text-base font-light leading-relaxed text-inherit antialiased">
    {content.description}
    </p>
      <button
        className="flex items-center gap-2 text-xs font-medium py-4 px-10 text-white bg-theme_orange transition-all duration-300 uppercase group"
        type="button"
        onClick={()=> setShowConsultationModal(true)}
      >
        request Free consultation 
        
      </button>
  </div>
        
        </div>
    </div>
  )
}
