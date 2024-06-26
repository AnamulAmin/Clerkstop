import React from "react";
import PartnerLogos from "./PartnerLogos/PartnerLogos";

export default function PartnerTextArea({partner, isRightImage}) {
  
  return <div className={`col-span-full lg:col-span-3 ${isRightImage && "order-2 lg:order-1" } `}>
    <header className=" mb-3">
        <h4 className="text-[14px] md:text-[18px]  font-[400] text-theme_orange"> Partner</h4> 
        <h2 className="text-[35px] md:text-[56px] font-[600]">{partner.company} <span className="text-[20px] font-[400]">CEO: {partner.CEO} | <a href={partner.websiteLink} className="text-blue-400">{partner.website}</a> </span></h2>
        
      </header>
        <p className="text-[20px] font-[400]">{partner.description}</p>
        <PartnerLogos partners={partner.partnersLogos} />


  </div>;
}
