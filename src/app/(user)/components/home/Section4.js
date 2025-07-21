"use client"

import React from 'react';
import { FaHeart } from "react-icons/fa";
import { IoIosThumbsUp } from "react-icons/io";

const Section4 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 font-sans">
            <div className=" w-full  md:p-12 ">
                {/* Title */}
                <h2 className="text-md md:text-2xl  text-center text-[#282f29]">
                    SOME OF OUR GUEST FEEDBACKS @ OLIVE DELHI
                </h2>

                {/* Feedback Card */}
                <div className=" md:p-8 ">
                    <p className="text-gray-600 text-md  italic">
                        "Very professional and transparent service, right from online booking to airport pickup and apartment stay at Saket. No hidden charges. It was our first visit to India and the Olive team removed all our apprehensions. They arranged a new DVD player when we requested one. Housekeeping staff was not very good with English but they were honest workers who knew their job. We will not hesitate to visit again."
                    </p>
                    <p className="mt-6 text-gray-600 text-sm text-center ">
                        Vignesh RS, Hyderabad
                    </p>
                </div>
            </div>

            {/* New Banner Section */}
            <div className="w-full bg-[#719430] p-8  rounded-lg shadow-md max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Top Ratings Card */}
                    <div className="bg-white p-6  rounded-lg flex flex-col items-center text-center">
                        <div className="bg-[#719430] p-3 rounded-full mb-4">
                            <FaHeart className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">TOP RATINGS BY PAST GUESTS</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our Properties have consistently received 5 Stars ratings on multiple Travel websites including TripAdvisor, Booking.com, AirBnB, Expedia, MakeMyTrip, etc.
                        </p>
                    </div>

                    {/* Lowest Price Guarantee Card */}
                    <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center">
                            <div className="bg-[#719430] p-3 rounded-full mb-4">
                                <IoIosThumbsUp  className="h-6 w-6 text-white" />
                            </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">LOWEST PRICE GUARANTEE</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We can guarantee that you will get the Lowest Prices when you book direct with Olive, as compared to rates on any Travel Booking website across the Internet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
