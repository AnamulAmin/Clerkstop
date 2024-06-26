import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OurServices from './components/OurServices/OurServices'
import Header from './components/Parcials/Header/Header'
import Benefits from './components/Benefits/Benefits'
import Partners from './components/Partners/Partners'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Testimonials from './components/Testimonials/Testimonials'
import Hero from './components/Hero/Hero'

function App() {

  return (
    <>
    <Header />
    <Hero />
    <OurServices />
    <Benefits />
    <Partners />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default App
