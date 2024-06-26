

import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
const ConsultationForm = ({toggleModal}) => {


  return (
      <div className="w-full lg:w-10/12 pt-14 p-8 m-auto bg-theme_light_blue h-dvh lg:h-[80dvh] overflow-auto relative">
          <div className="w-full  m-auto text-center space-y-4">
            <h2 className="font-bold text-[25px] lg:text-[40px] lg:text-2xl text-black capitalize" >request Free consultation</h2>
            <p className="font-normal text-xs text-theme_paragraph" >Leave your details below and one of our team members will be in contact with you.</p> 
            <button className="absolute top-6 right-10 text-2xl" onClick={toggleModal}>
            <IoMdClose />
            </button>
          </div>
            <form
              className=" rounded w-full lg:p-8 mt-10"
            //   onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-full">
                <div className="col-span-1">
                  <input
                    required
                    className="rounded w-full p-4 text-theme_black border border-transparent focus:border-theme_orange "
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    required
                    className="rounded w-full p-4 text-theme_black border border-transparent focus:border-theme_orange "
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    required
                    className="rounded w-full p-4 text-theme_black border border-transparent focus:border-theme_orange "
                    type="Email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    required
                    className="rounded w-full p-4 text-theme_black border border-transparent focus:border-theme_orange "
                    type="text"
                    placeholder="Phone"
                    name="phone"
                  />
                </div>
                <div className="mt-5 lg:mt-7 col-span-full">
                  <textarea
                    className="rounded w-full p-4 text-theme_black border border-transparent focus:border-theme_orange "
                    id="message"
                    type="text"
                    placeholder="Enter message here"
                    rows="7"
                    name="message"
                  />
                </div>
              </div>
              <div className="mt-10 flex justify-center items-center text-center">
                <button
                  type="submit"
                  className="py-4 px-16 bg-theme_orange text-base text-white font-normal"
                >
                  Submit
                </button>
              </div>
            </form>
      </div>
  );
};

export default ConsultationForm;
