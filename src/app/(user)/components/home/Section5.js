import React from 'react';
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsDropletHalf } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineDoorFront } from "react-icons/md";
import { FaTools } from "react-icons/fa";

const features = [
  {
    title: 'Social Distancing & Privacy',
    description:
      'Social distancing in non-sharing Homes with Self Check-ins & Check-Outs, Digital Payments, Contact-less Delivery & no Public areas for minimal contacts & high privacy',
    icon: (
        <AiOutlineSafetyCertificate className='w-8 h-8 text-white' />
    )
  },
  {
    title: 'Hygiene & Sanitization',
    description:
      'High focus on hygiene via enhanced cleaning with hospital-grade disinfectants. PPE Masks, gloves, sanitizers provided for all staff. Disinfecting wipes and cleaning products also provided.',
    icon: (
      <BsDropletHalf  className='w-8 h-8 text-white'/>
    )
  },
  {
    title: 'Available in All Sizes',
    description:
      'Fully furnished & serviced flats including Studios, One Bedroom Flats, as well as Two to Four Bedroom Apartments for flexible rental stays',
      
    icon:(
        <IoHomeOutline className='w-8 h-8 text-white'/>
    )
  },
  {
    title: 'Private Living Rooms & Kitchens',
    description:
      'All rental properties are designed as self-sufficient homes with fully functional kitchens and all cooking amenities. Living rooms with couch seating & dining tables.',
    icon: (
     <MdOutlineDoorFront  className='w-8 h-8 text-white'/>
    )
  },
  {
    title: 'Cleaning & Maintenance Services',
    description:
      'Hotel-like services such as WiFi Internet, cleaning, linen, Tata Sky TV, and property maintenance with on-call support team.',
    icon: (
      <FaTools className='w-8 h-8 text-white' />
    )
  }
];

const paragraphs = [
  "Before you book one of our Serviced Apartments in Delhi, we would like to give you some insights on your stay experience –",
  "When you stay in one of our apartments instead of the regular hotels, it gives you the chance to live like a local while you're on vacation. You are essentially renting a fully-furnished home in a residential neighbourhood.",
  "There are quite a few advantages when you stay at our apartments – you get your own individual space, which gives you more privacy and freedom than hotels.",
  "You will also get WiFi Internet besides full kitchen facilities and all the related conveniences including Washing Machine, Iron & Ironing boards, etc.",
  "You get a lot more room in our apartments than you would usually get in a hotel, which makes our apartments a popular choice for families and groups of friends looking for Vacation Rental Homes or Holiday Rentals. Please note that staying in our apartments works a little differently than with most hotels.",
  "For example, we do not operate a front desk in most properties and you may be required to pay a security deposit. You may not have access to some of the services you would get at a hotel (breakfast, room service, and so on).",
  "Also, most apartments require you to pay electricity charges on actuals since these are stand-alone residences that are essentially rented out to you for your stays. However, what you will definitely get in our apartments is a home-away-from-home living experience which will make you come back for more everytime! And we can assure you that you will never book a hotel in Delhi again!"
];

const Section5 = () => (

  <div className="flex flex-col min-h-screen">
    <div className="max-w-6xl w-full mx-auto py-12 px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left  Section */}
        <div>
          <div className="mb-8">
            <h1 className="text-2xl text-gray-700">
              What is the Olive Service Apartments stay experience?
            </h1>
          </div>
          
          {/* Content section with enhanced readability */}
          <div className="space-y-6">
            {paragraphs.map((para, i) => (
              <div key={i} className="group">
                <p className="text-gray-500 text-md ">
                  {para}
                </p>
              </div>
            ))}
          </div>
        </div>

      {/* Right Section */}
      <div className="flex flex-col space-y-8">
        {features.map(({ icon, title, description }, i) => (
          <div key={i} className="flex items-start">
            <div className=" p-3 rounded-full mr-4  bg-[#719430] ">
              {icon}
            </div>
            <div className="flex-1">
                
              <h3 className="text-xl font-bold text-gray-800 mb-2 ">
                {title}
              </h3>
              <p className="text-gray-500 text-md ">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Section5;