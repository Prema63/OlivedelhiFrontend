"use client";

import React from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { BiSolidUserCheck } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";

const Section2 = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            {/* Main Container */}
            <div className="max-w-6xl w-full p-8 md:p-12">
                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Prime Locations Card */}
                    <div className="flex flex-col items-center p-4">
                        <div className="bg-[#719430] p-4 rounded-full mb-4">
                            <IoHomeSharp className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">PRIME LOCATIONS</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Fully Furnished & Serviced Apartments with private Kitchen in prime locations of South Delhi - Defence Colony, Greater Kailash, Green Park, Saket, Panchsheel Enclave, Vasant Kunj, etc.
                        </p>
                    </div>

                    {/* Hygiene Focused Card */}
                    <div className="flex flex-col items-center p-4">
                        <div className="bg-[#719430] p-4 rounded-full mb-4">
                            <BiSolidUserCheck className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">HYGIENE FOCUSED</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            High focus on Hygiene with Cleaning done via hospital grade disinfectants - Contactless Check-Ins & Sanitization after every checkout - Face Masks, Gloves & Sanitizers for staff.
                        </p>
                    </div>

                    {/* Long Stay Deals Card */}
                    <div className="flex flex-col items-center p-4">
                        <div className="bg-[#719430] p-4 rounded-full mb-4">
                            <FaBookmark className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">LONG STAY DEALS</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Lowest Price Guarantee for all Direct Bookings - Monthly Discount Deals, Corporate Rates with GST & Repeat Guest Offers - Transparent Rentals with NO hidden charges!
                        </p>
                    </div>
                </div>

                {/* Call to Action Bar */}
                <div className="mt-10 bg-[#719430] text-white p-4 md:p-6 rounded-lg">
                    <p className="text-xs md:text-lg lg:text-xl leading-relaxed ">
                        Call or WhatsApp us at <span className="font-bold">+917290029000</span> for Special Offers with Best Price Guarantee! Weekly & Monthly Promotions | Complimentary Upgrade
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section2;
