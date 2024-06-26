import React from "react";
import BenefitsListItem from "./BenefitsListItem/BenefitsListItem";
import BenefitsImage from "../BenefitsImage/BenefitsImage";

export default function BenefitsTextArea() {
  const benefits = [
    {
      title: "Reliable",
      description: "Count on ClerkStop for dependable and accurate services, ensuring your business operations run smoothly.",
      icon: "/benefits/icon1.png"
    },
    {
      title: "Transparent Pricing",
      description: "Experience transparent and fair pricing models, providing clarity and predictability for your budget.",
      icon: "/benefits/icon2.png"
    },
    {
      title: "Supportive",
      description: "Beyond services, ClerkStop is your supportive partner, offering guidance and assistance to help your business thrive.",
      icon: "/benefits/icon3.png"
    },
  ]
  return <div className="col-span-full lg:col-span-1">
    <header className=" mb-10">
        <h4 className="text-[14px] md:text-[18px] text-center lg:text-left font-[400] text-theme_orange"> <span className="inline md:hidden text-current">Benefits of hiring Clerkstop</span> <span className="hidden md:inline text-current">The benefits are as clear as our bookkeeping records.</span></h4> 
        <h2 className="text-[35px] md:text-[56px] text-center lg:text-left font-[600]"><span className="inline md:hidden text-current">Empower Your Business with Us</span> <span className="hidden md:inline text-current">Benefits of Choosing ClerkStop.</span></h2>
        <BenefitsImage screen={"mobile"} />
      </header>
        <div className="space-y-10 mt-10">
          {benefits.map((item, index) => (
            <BenefitsListItem item={item} key={index} />
          ))}
        </div>
  </div>;
}
