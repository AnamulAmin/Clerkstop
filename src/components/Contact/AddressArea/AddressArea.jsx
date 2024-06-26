import React from "react";

function AddressArea() {
  return <div className="col-span-full lg:col-span-1 space-y-4">
    <header>
        <h4 className="text-[14px] md:text-[18px] text-center lg:text-left font-[400] text-theme_orange"> Contact Now</h4> 
        <h2 className="text-[35px] md:text-[56px] text-center lg:text-left font-[600]">Get in Touch Now</h2>
      </header>
        <p>Please feel free to contact our Directors or team members on the following mobile numbers or via email.</p>
        <div>
        <h5 className="text-theme_paragraph text-2xl">Phone</h5>
        <p className="text-theme_heading text-lg font-medium">0490145719</p>
        <p className="text-theme_heading text-lg font-medium ">0411878220</p>

        </div>

        <div>
        <h5 className="text-theme_paragraph text-2xl font-medium">Email</h5>
        <p className="text-theme_heading text-lg font-medium">info@clerkstop.com</p>

        </div>
  </div>;
}

export default AddressArea;
