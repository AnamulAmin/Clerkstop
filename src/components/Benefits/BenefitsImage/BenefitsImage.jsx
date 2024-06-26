import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

export default function BenefitsImage({screen = "desktop"}) {
  return (
<div className={` mt-6 col-span-full lg:col-span-1 ${screen === "mobile" ? "block lg:hidden mb-20 md:mb-40 mt-10" : "hidden lg:block"}`}>
  <img src={"/benefits/benefits.png"} alt="Benefits" className="max-w-[100%] object-contain" />
</div>

  )
}
