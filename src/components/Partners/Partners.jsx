import React from "react";
import Partner from "./Partner/Partner";

export default function Partners() {
  const content = [
    {
      company: "Antopolis",
      companyLogo: "/logos/antopolis.png",
      CEO: "Sheehan Rahman",
      website: "www.theantopolis.com",
      websiteLink: "www.theantopolis.com",
      description: "Antopolis is a premier software development and digital marketing company, delivering cutting-edge solutions for 14 years. Known for its innovative strategies and exceptional technical prowess, Antopolis empowers businesses to thrive in the digital age. With a commitment to excellence and a passion for transforming ideas into reality, Antopolis is the trusted partner for clients seeking unparalleled growth and success in the ever-evolving digital landscape.",
      partnersLogos: [
        {
          logo: "/logos/Uber.png"
        },
        {
          logo: "/logos/toyota.png"
        },
        {
          logo: "/logos/unilever.png"
        },
        {
          logo: "/logos/burger_king.png"
        },
        {
          logo: "/logos/Philip_Morris_International.svg 1.png"
        },
      ]
      
    },
    {
      company: "SPC",
      companyLogo: "/logos/Northflank.png",
      CEO: "Rad Sharar Bin Kama",
      website: "www.theantopolis.com",
      websiteLink: "Website URL Here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      partnersLogos: [
        {
          logo: "/logos/J.P. Morgan.png"
        },
        {
          logo: "/logos/Forbes.png"
        },
        {
          logo: "/logos/Airtable.png"
        },
        {
          logo: "/logos/Group.png"
        },
        {
          logo: "/logos/Asana.png"
        },
      ]
      
    },
    {
      company: "RTR Bookkeeping",
      companyLogo: "/logos/Autodesk.png",
      CEO: "CEO: Rizwan Tawfique",
      website: "www.theantopolis.com",
      websiteLink: "Website URL Here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      partnersLogos: [
        {
          logo: "/logos/J.P. Morgan.png"
        },
        {
          logo: "/logos/Forbes.png"
        },
        {
          logo: "/logos/Airtable.png"
        },
        {
          logo: "/logos/Group.png"
        },
        {
          logo: "/logos/Asana.png"
        },
      ]
      
    }
  ]
  return (
    <>
    {
      content.map((partner, index) =>(<Partner key={index} partner={partner} isRightImage={index % 2 === 0} />)) 
    }
    </>
  );
}
