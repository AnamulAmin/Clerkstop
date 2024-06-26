import React from "react";

export default function BenefitsListItem({ item }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-5">
      <img
        src={item.icon}
        alt="Benefits"
        className="w-[48px] h-[48px] object-contain"
      />
      <div className="space-y-2 text-center lg:text-left">
        <h5 className="text-[18px] font-[500] capitalize">{item.title}</h5>
        <p className="text-[14px]">{item.description}</p>
      </div>
    </div>
  );
}
