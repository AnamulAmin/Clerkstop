import React, { useEffect, useRef, useState } from 'react'
import "./Header.css";
import ConsultationModal from '../../Consultation/ConsultationModal';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);


  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.scrollY > 200) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);


  return (
    <header className={`w-full transition-all duration-500 mx-auto z-50 top-0 left-0 ${
      sticky.isSticky
        ? "fixed bg-black bg-opacity-50 py-4"
        : "static bg-transparent py-8"
    }`}
    ref={headerRef}>
        <div className={`container mx-auto px-8 flex justify-between items-center gap-8`}>
            <div className="col-span-1 flex flex-col items-center justify-center">
                <img src="/logos/logo.png" alt="Clerkstop Logo" className="w-32 object-contain" />
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
