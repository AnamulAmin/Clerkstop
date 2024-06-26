import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-black p-4 py-8 text-white">
        <div className="container mx-auto px-8 flex justify-between items-center">
            <p className='text-current font-normal'>© 2024 All Rights Reserved by Clerkstop</p>
            <div className="flex items-center gap-6 text-2xl">
                <a href="#" className="hover:text-theme_orange"><FaFacebookF /></a>
                <a href="#" className="hover:text-theme_orange"><FaYoutube /></a>
                <a href="#" className="hover:text-theme_orange"><FaInstagram /></a>
            </div>
            <p className='text-current font-normal' >Made with 🤍 by Antopolis</p>
        </div>
    </footer>
  )
}
