import React from "react";

function SectionHeading({ subHeading, heading }) {
  return (
    <header className="text-center mb-10">
      <h4 className="text-[14px] md:text-[18px] font-bold text-theme_orange uppercase">
        {subHeading}
      </h4>
      <h2 className="text-[35px] md:text-[56px] font-medium">{heading}</h2>
    </header>
  );
}

export default SectionHeading;
