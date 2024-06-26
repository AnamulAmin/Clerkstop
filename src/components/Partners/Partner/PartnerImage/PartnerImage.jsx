import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

export default function PartnerImage({logo, isRightImage}) {
  return (
<div className={` mt-6 col-span-full lg:col-span-1 bg-theme_black flex justify-center items-center px-12 py-14 rounded-lg ${isRightImage && "order-1 lg:order-2"}`}>
  <img src={logo} alt="Partner" className="max-w-[100%]  object-contain" />
</div>

  )
}
