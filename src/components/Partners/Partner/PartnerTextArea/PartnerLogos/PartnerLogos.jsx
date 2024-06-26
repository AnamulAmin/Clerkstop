import React from "react";

export default function PartnerLogos({ partners }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 items-center gap-4 mt-8 lg:w-[80%]">
      {partners.map((partner, index) => (
        <img
          src={partner.logo}
          alt="logo"
          className=" w-20 md:max-w-28 h-12 md:h-16 object-contain"
          key={index}
        />
      ))}
    </div>
  );
}
