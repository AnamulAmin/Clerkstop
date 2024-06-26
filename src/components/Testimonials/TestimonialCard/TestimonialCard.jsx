import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdFormatQuote } from "react-icons/md";
export default function TestimonialCard() {
  return (
    <section className="p-6">
	<div className="container max-w-xl mx-auto">
		<div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8">
			<MdFormatQuote className="text-6xl text-theme_orange" />
			<blockquote className="max-w-[1000px] text-lg font-medium text-center text-theme_paragraph">We are a Health Food Retail business who understood the power and the urgent need to harness the power of ecommerce after Covid19. Clerkstop has helped us with data entry of products, design recommendations to maximize customer time spent on our website and more. Within a year we have seen our website go from offering a 1000 SKUs to 9000 SKUs online to our growing customers.</blockquote>
			<div className="text-center dark:text-gray-600">
			<div className="flex space-x-2">
				<button type="button" aria-label="Page 1" className="text-yellow-400 text-2xl"><MdOutlineStarPurple500 /></button>
				<button type="button" aria-label="Page 1" className="text-yellow-400 text-2xl"><MdOutlineStarPurple500 /></button>
				<button type="button" aria-label="Page 1" className="text-yellow-400 text-2xl"><MdOutlineStarPurple500 /></button>
				<button type="button" aria-label="Page 1" className="text-yellow-400 text-2xl"><MdOutlineStarPurple500 /></button>
				<button type="button" aria-label="Page 1" className="text-yellow-400 text-2xl"><MdOutlineStarPurple500 /></button>
			</div>
				<p>Leroy Jenkins</p>
				<p>CEO of Company Co.</p>
			</div>
		</div>
	</div>
</section>
  )
}
