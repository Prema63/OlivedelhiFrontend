"use client"

import React from 'react';
import Booking from "./Booking";

const Section1 = () => {
  return (
    <section className="w-full ">
      {/* Background Image */}
      <div className="md:h-[500px] lg:h-[500px] px-2 mx-2">
        <div className="overflow-hidden h-full w-full">
          <img
            src="https://node.oliveapartmentsdelhi.com/get/files/m7vyigb5-b0bhy-1.webp"
            alt="Modern apartment interior with blue sofas and elegant furnishing"
            className="w-full h-full object-cover"
          />
        </div>
      </div>


      {/* Content Section */}
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="p-4 ">
          <h1 className="text-lg md:text-xl lg:text-xl font-bold text-gray-900 text-center">
            OLIVE SERVICE APARTMENTS DELHI
          </h1>

          <p className="text-md md:text-xl text-green-600 text-center max-w-4xl mx-auto leading-relaxed">
            Top rated Serviced Apartments in Delhi with Kitchen - Short Term Hotel Apartments in Delhi
          </p>
        </div>
      </div>

      <Booking />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p className="text-base">
              Olive Service Apartments Delhi are the leading Hospitality Agency in Delhi providing fully loaded Serviced Apartments & Vacation Rentals in Delhi offering
              an unmatched combination of luxury, warmth, and comforts at very affordable prices.
            </p>

            <p className="text-base">
              All our Serviced Properties are spread across the best areas of South Delhi ensuring convenient accessibility for both business and leisure purposes. Our
              personalized Home Stay residences with private kitchen and living room are also Pet Friendly and ideal for business travelers as well as general tourists
              and medical guests visiting Delhi. Whatever be your need, we will have a customized stay option available across South and Central Delhi.
            </p>

            <p className="text-base text-green-700 font-medium italic">
              With accommodation in all sizes - Studio, One Bedroom Apartments & Two to Four Bedroom Apartments, we are the top choice for Short Term
              AirBnB Vacation Rentals and Serviced Apartments for Monthly Stays in Delhi!
            </p>
          </div>
        </div>
      </div>

      <div className="h-16"></div>
    </section>
  );
};

export default Section1;
