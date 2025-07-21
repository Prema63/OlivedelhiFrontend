"use client";

import React, { useState } from "react";
import Head from "next/head";
import ChatPopup from "../global/chatPopUp/ChatPopUP";
import Scroll from "../global/scroll/Scroll";
import Sideform from "../global/Sideform/Sideform";
// import {LoadingMutatingDots} from "../global/loading/Loadings";
import { url } from "../lib/lib";

export default function AboutUs() {
    const [isLoading, setIsLoading] = useState(true);


    //   if (isLoading) {
    //     return (
    //       <LoadingMutatingDots/>
    //     );
    //   }

    return (
        <>
            <div className="w-full bg-gray-50 shadow-md min-h-screen ">
                {/* Top Header */}
                <div className="flex flex-col mx-4 my-4 md:flex-row bg-[#719430] text-white py-5 px-4 md:px-8 text-sm md:text-base">
                    <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
                        <span className="text-base md:text-xl font-medium">About Us</span>
                    </div>
                    <div className="w-full sm:w-1/2 text-center sm:text-right">
                        <span className="text-sm md:text-base">
                            You are here: Home / About Us
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
                    {/* Left Section */}
                    <div className="w-full lg:w-2/3 text-gray-400 space-y-4">
                        <p className="font-semibold text-2xl text-gray-700">
                            About Us @ Olive Service Apartments Delhi
                        </p>
                        <p>
                            Olive Service Apartments in Delhi is a multiple award-winning chain of self-catered Fully Furnished & Serviced Apartments, we are considered a leader in the Industry having one of the largest room inventory of fully serviced accommodations in Delhi NCR, Jaipur, Hyderabad, Bangalore, Kolkata & Goa.
                        </p>
                        <p>
                            Through this website, we market our mix of stand-alone and grouped short-term rental properties spread across Delhi (South & Central) as well as nearby Gurgaon & Noida. These fully furnished properties offer private, independent residential units with Living Rooms and individual furnished Kitchens – much bigger than equivalent hotel rooms.
                        </p>
                        <p>
                            All Serviced Apartments listed on our website are directly operated and managed by our team, we also have rooms that are managed by us on a Management Contract thereby ensuring the same, consistent hospitality standards of Olive Service apartments across all our properties. Our Service apartments in Delhi are selected after careful inspection by our team who also ensure that they follow the Olive best practices of operations and are audited periodically for its adherence. This has resulted in various brand recognition awards including the Certificate of Excellence on Tripadvisor and other Online Travel Agencies (OTAs) as well as significant media coverage for Best Service Apartments in Delhi.
                        </p>
                        <p>
                            Our primary business model is short-stay rentals (weekly/monthly) of Serviced apartments where the property is leased out to guests by way of short-term rental contracts, we also have some corporate guest houses that offer rooms by the day & week providing hotel-like facilities in spacious suites for Corporates as well as Vacation Rentals Holiday Homes for leisure travellers.
                        </p>
                        <p>
                            Our Corporate Guest House Management Services include setting up and operating accommodations for corporate executives of companies who have a lot of business travel requirements. We can source, setup and manage such Corporate Guest Houses exclusively for any company for housing their own employees in a professional setup that costs much less than hotels while offering the same comforts and facilities.
                        </p>
                        <p>
                            <strong>Property Owners –</strong> If you are an Apartment Owner who is currently operating a serviced property or would like us to utilize their residential property as Service Apartments in Delhi for high rental returns, please drop us a mail with your property details at <a href="mailto:partners@olivedelhi.com" className="text-blue-600 underline">partners@olivedelhi.com</a>
                        </p>
                        <p>
                            We are actively looking for new Apartments in South/Central Delhi, Gurgaon & Noida to expand our portfolio and can guarantee you the most competitive rentals for Serviced Apartments across Delhi along with the trust and assurance of our award-winning brand (Olive Service Apartments Delhi)
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className=" border-l border-gray-300 w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0 md:pl-6 pb-8">
                        <Sideform />
                    </div>
                </div>

            </div>

            <ChatPopup />
            <Scroll />
        </>
    );
}



