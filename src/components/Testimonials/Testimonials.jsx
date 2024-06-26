import React from 'react'
import TestimonialCard from './TestimonialCard/TestimonialCard'
import SectionHeading from '../Parcials/SectionHeading/SectionHeading'

export default function Testimonials() {
  return (
    <section className=" py-20">
        <SectionHeading subHeading="TESTIMONIALS" heading="Feedback from you" />
        <div className="container mx-auto">
            <TestimonialCard />
        </div>

    </section>
  )
}
