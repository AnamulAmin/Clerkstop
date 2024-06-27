import React, { useState } from "react";
import "./OurServices.css";
import OurServiceCard from "./OurServiceCard/OurServiceCard";
import SectionHeading from "../Parcials/SectionHeading/SectionHeading";
import OurServicesModal from "./OurServicesModal/OurServicesModal";
import ConsultationForm from "../Consultation/ConsultationForm/ConsultationForm";
export default function OurServices() {
  const [dynamicData, setDynamicData] = useState({})
  const [showModal, setShowModal] = useState(false) 
  const [showConsultationModal, setShowConsultationModal] = useState(false) 
  console.log(showConsultationModal)
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
    <div className="bg-theme_light_blue p-4 rounded-lg py-20">

      <SectionHeading subHeading="Our Services" heading="Our Services" />

      <div className="container mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <OurServiceCard content={service} key={index} precedence={index + 1} handleModal={()=> {setDynamicData(service); setShowModal(true)}} />
        ))}
      </div>
      {
        showModal && <OurServicesModal content={dynamicData} handleModal={()=> setShowModal(false)} setShowConsultationModal={setShowConsultationModal} />
      }
      {
        showConsultationModal && <ConsultationForm toggleModal={()=> {setShowConsultationModal(false)}} />
      }
    </div>
  );
}
