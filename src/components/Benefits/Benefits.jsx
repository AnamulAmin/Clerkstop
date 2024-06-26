import React from "react";
import "./Benefits.css";
import BenefitsImage from "./BenefitsImage/BenefitsImage";
import BenefitsTextArea from "./BenefitsTextArea/BenefitsTextArea";
export default function Benefits() {
  const services = [
    {
      title: "Web/App Developers",
      description: "We partner with Expert Web/Mobile Developers and Technical Experts to bring your innovative ideas to life."
    },
    {
      title: "Digital Marketing",
      description: "Be it brand new product marketing or short campaign, we empower our clients through innovative ideas and contours that catches the eye. We work with data and bridge the gap between you and your customers to drive sales."
    },
    {
      title: "Business Support",
      description: "Expert team of Virtual assistants encompassing services as personal assistants and administrative support assistants with excellent written and verbal communication skills, with training in various disciplines."
    },
    {
      title: "Data Entry/ Daily Bookkeeping",
      description: "Accurate financial record keeping, Preparation and assistance for BAS lodgment. Xero, MYOB and Quickbooks experts."
    },
    {
      title: "Content",
      description: "Compelling content creation to engage and captivate your target audience."
    },
    {
      title: "Startup & SME Digital sector Consultancy",
      description: "Unlock the full potential of your startup or SME with our digital sector consultancy services. Our experienced consultants will help you navigate the complexities of the tech landscape"
    },
  ]
  return (
    <div className="rounded-lg pt-20 md:pb-40">
      <div className="container mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 gap-14 items-start">
      <BenefitsTextArea />
      <BenefitsImage />
      </div>
    </div>
  );
}
