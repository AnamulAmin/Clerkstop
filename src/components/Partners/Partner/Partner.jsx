import React from "react";
import "./Partner.css";
import PartnerImage from "./PartnerImage/PartnerImage";
import PartnerTextArea from "./PartnerTextArea/PartnerTextArea";
export default function Partner({partner, isRightImage}) {
  
  return (
    <div className="rounded-lg py-20 md:pb-40">
      <div className="container mx-auto px-8 grid grid-cols-1 sm:grid-cols-4 gap-14 items-start">

      {
        isRightImage ? 
        <>
         <PartnerTextArea partner={partner} isRightImage={isRightImage} />
         <PartnerImage logo={partner?.companyLogo} isRightImage={isRightImage} />
        </>
         :
        <>
         <PartnerImage logo={partner?.companyLogo} isRightImage={isRightImage} />
         <PartnerTextArea partner={partner} isRightImage={isRightImage} />
        </>
      }
      </div>
    </div>
  );
}
