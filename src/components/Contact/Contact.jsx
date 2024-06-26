import React from 'react'
import AddressArea from './AddressArea/AddressArea'
import ContactForm from './ContactForm/ContactForm'

export default function Contact() {
  return (
    <div className="bg-theme_light_blue p-4 rounded-lg py-20">

    <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <AddressArea />
      <ContactForm />
    </div>
  </div>
  )
}
