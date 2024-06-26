import React from 'react'

export default function ContactInput({ placeholder, type, name}) {
  return (
    <div className="w-full">
        <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="w-full rounded-md  bg-white py-4 px-6 text-base font-medium  text-[#6B7280] outline-none border focus:border-theme_orange h-20 " />
    </div>
  )
}
