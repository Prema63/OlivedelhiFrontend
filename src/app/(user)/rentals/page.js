"use client";

import React, { useState } from "react";
import ChatPopup from "../global/chatPopUp/ChatPopUP";
import Scroll from "../global/scroll/Scroll";
import Sideform from "../global/Sideform/Sideform";
// import {LoadingMutatingDots} from "../global/loading/Loadings";
import { url } from "../lib/lib";

export default function Pricing() {

    const apartmentTypes = [
        {
            id: 1,
            title: "Studio Apartments (300 sq ft)",
            layout: "Bedroom + Bathroom + Living Room with individual Kitchenette",
            pricing: "Pricing (Upto 2 Adults): Starting From Rs 3,950/Day"
        },
        {
            id: 2,
            title: "One Bedroom Apartments (600 sq ft)",
            layout: "Bedroom + Bathroom + Living Room with individual Kitchen",
            pricing: "Pricing (Upto 2 Adults): Starting From Rs 4,950/Day"
        },
        {
            id: 3,
            title: "Two Bedroom Apartments (900 sq ft)",
            layout: "2 Bedrooms + 2 Bathrooms + Living Room + Dining Area + Kitchen",
            pricing: "Pricing (Upto 4 Adults): Starting From Rs 7,450/Day"
        },
        {
            id: 4,
            title: "Three Bedroom Apartments (1500 sq ft)",
            layout: "3 Bedrooms + 3 Bathrooms + Living Room + Dining Area + Kitchen",
            pricing: "Pricing (Upto 6 Adults): Starting From Rs 9,950/Day"
        }
    ];

    const additionalInfo = [
        "These are indicative Starting pricing for the base category of apartments, pricing will increase for Serviced & Premier category of Apartments as well as across different localities. Please confirm with our Sales Team for exact pricing and inclusions when making your reservations.",
        "Any Extra Person/Beds will be charged at Rs 600/night/guest above the Rental limit specified for the respective Apartments. Children above 6 Years will be charged Rs 600/night.",
        "The Prices are exclusive of Goods & Services Tax (GST). The current GST is around 12% and is applicable for stays of less than 3 months duration only.",
        "Your Reservations are always billed in advance. You may also be asked to provide a refundable damage deposit that will be returned back to you at the end of your stay minus any arrears.",
        "Serviced Apartments pricing covers Cleaning (floors & toilets), linen changes, Wi-Fi Internet, Water, Cooking Gas, Tata Sky TV, Power Backup service and all flat maintenance. Daily rates are inclusive of all Utilities, but for any longer-stay discounted Monthly Plans, electricity is charged on actuals."
    ];

    const cancellationPolicy = "Cancellation Policy – There is ZERO Cancellation Charge for any reservation cancelled 7 Days before check-in date. We levy a 50% cancellation charge, if you cancel or modify a confirmed reservation within 7 Days before the check-in date. In case of a No-Show, there is NO refund of advance payments. Some Special Rates are Non-Refundable and will be specified over email.";

   

    return (
        <div className="w-full bg-gray-50 shadow-md min-h-screen">
            {/* Top Header */}
            <div className="flex flex-col mx-4 my-4 md:flex-row bg-[#719430] text-white py-5 px-4 md:px-8 text-sm md:text-base">
                <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
                    <span className="text-base md:text-xl font-medium">Pricing</span>
                </div>
                <div className="w-full sm:w-1/2 text-center sm:text-right">
                    <span className="text-sm md:text-base">
                        You are here: Home / Pricing
                    </span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 max-w-7xl">
                {/* Left Section */}
                <div className="w-full lg:w-2/3 space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
                            PRICING @ OLIVE DELHI
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Below are the Pricing / Tariff / Rates of the Fully Serviced Apartments at Delhi –
                        </p>
                        <p className="text-red-600 text-sm md:text-base leading-relaxed">
                            *Long Stay Offers of Monthly Discounts upto 40%
                        </p>
                    </div>

                    {/* Apartment Types */}
                    <div className="space-y-4">
                        {apartmentTypes.map((apartment) => (
                            <div key={apartment.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                                    {apartment.title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base mb-2">
                                    <span className="font-medium">Layout:</span> {apartment.layout}
                                </p>
                                <p className="text-gray-600 text-sm md:text-base">
                                    {apartment.pricing}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Additional Information */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                        <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                            {additionalInfo.map((info, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-[#719430] mr-2 mt-1">•</span>
                                    <span className="leading-relaxed">{info}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cancellation Policy */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                            Cancellation Policy
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {cancellationPolicy}
                        </p>
                    </div>
                </div>

                {/* Side Form Placeholder */}
                  <div className="w-full lg:w-1/3">
                        <div className="lg:sticky lg:top-8">
                            <div className=" border-l border-gray-200 p-4 md:p-6">
                                <Sideform />
                            </div>
                        </div>
                    </div>
            </div>
             <ChatPopup/>
            <Scroll/>
        </div>
    );
}