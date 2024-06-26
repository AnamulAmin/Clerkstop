import React from 'react'
import ConsultationForm from './ConsultationForm/ConsultationForm'

export default function ConsultationModal({toggleModal}) {
  
  return (
    <div className='fixed top-0 left-0 bg-black bg-opacity-50 z-50 flex justify-center items-center w-svw h-dvh' >

        <ConsultationForm toggleModal={toggleModal} />
    </div>
  )
}
