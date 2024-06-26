import React, { useState } from 'react'
import "./Header.css";
import ConsultationModal from '../../Consultation/ConsultationModal';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <header>
        <div className="container mx-auto px-8 flex justify-between items-center gap-8">
            <div className="col-span-1 flex flex-col items-center justify-center">
                <img src="/logos/logo.png" alt="Clerkstop Logo" className="w-32 h-32 object-contain" />
            </div>
            <button className="py-2 md:py-4 px-4 md:px-6 text-center font-k2D text-[12px] md:text-xs font-[500] uppercase transition-all hover:bg-[#f06a1c]  bg-theme_orange text-white text-nowrap" onClick={toggleModal}>
            request Free consultation
            </button>
            {
              isOpen &&
            <ConsultationModal toggleModal={toggleModal} />
            }
        </div>
    </header>
  )
}
