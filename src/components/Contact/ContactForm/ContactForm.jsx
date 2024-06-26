import React from 'react'
import ContactInput from './ContactFormInput/ContactInput'

export default function ContactForm() {
  return (
    <div classNameName="col-span-full lg:col-span-1">
          <form action="#" className='space-y-10'>
              <ContactInput
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
              <ContactInput
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone Number"
              />

              <ContactInput
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            <div className="w-full">
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Your Message"
                className="w-full resize-none rounded-md  bg-white py-3 px-6 text-base font-medium  border focus:border-theme_orange min-h-56 "
              ></textarea>
            </div>
            <div>
              <button
                className="hover:shadow-form bg-theme_orange hover:bg-[#f06a1c] py-3 px-8 text-xl font-thin text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
    </div>
  )
}
