import React from 'react'

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden flex justify-center items-center">
  <div className="absolute inset-0">
    <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>

    <div className='container mx-auto px-10 relative text-left z-10'>
    <ul className="text-lg text-theme_orange mb-8 list-disc flex gap-8">
        <li className='list-none'>Data entry/Bookkeeping</li>
        <li>Digital Marketing</li>
        <li>App/web Development</li>
        <li>Virtual Assistants</li>
    </ul>
    <h1 className="text-6xl font-bold leading-tight mb-4 text-white capitalize max-w-[400px] ">One stop <br /> shop for all your business needs</h1>
    </div>
</div>
  )
}
