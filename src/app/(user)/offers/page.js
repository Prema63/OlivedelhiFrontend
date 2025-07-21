"use client";

import React, { useState } from "react";
import ChatPopup from "../global/chatPopUp/ChatPopUP";
import Scroll from "../global/scroll/Scroll";
import Sideform from "../global/Sideform/Sideform";
// import {LoadingMutatingDots} from "../global/loading/Loadings";
import { url } from "../lib/lib";

export default function Offers() {
    const [isLoading, setIsLoading] = useState(false);

    const offerData = [
        {
            id: 1,
            title: "1. Free Airport Transfers Offer",
            description: "Details – This special offer will provide Free Airport/Train Station Transfers for all reservations done online via our website or through Email.",
            points: [
                "For all bookings of more than 3 Nights stay in Delhi – You will get FREE transportation by private Car to the Delhi Airport or Railway Station at the end of your stay.",
                "For all bookings of more than 7 Nights stay in Delhi – You will get FREE transportation by private Car both ways, we will pick you from the Delhi Airport or Railway Station at the time of check-in and drop you back at end of your stay."
            ]
        },
        {
            id: 2,
            title: "2. Complimentary Upgrade for Repeat Guests – Friends & Family",
            description: "This offer will provide Free Airport/Train Station Transfers for all bookings of SUPERIOR & PREMIER Category completed online only via our website",
            premierDetails: {
                title: "For PREMIER Apartment bookings of more than 7 Nights stay",
                description: "You will get FREE transportation by private Car both ways, we will pick you from the Airport or Railway Station at the time of check-in and drop you back at end of your stay."
            },
            superiorDetails: {
                title: "For SUPERIOR Apartment bookings of more than 15 Nights stay",
                description: "You will get FREE transportation by private Car both ways, we will pick you from the Airport or Railway Station at the time of check-in and drop you back at end of your stay.",
                validity: "This offer will automatically be applied for all bookings done online via our Website between 1st May to 31st July 2025.",
                note: "For bookings with complimentary category upgrades, the offer will be only applicable as per the originally booked category."
            }
        },
        {
            id: 3,
            title: "3. Cleaning Fees waived for direct bookings",
            description: "This offer waives off the one-time Checkout Cleaning Fees charged for bookings done online only via our website.",
            points: [
                "The Cleaning Fee waiver will be applicable for all bookings at select properties. Kindly check the details of your desired property for waiver accordingly."
            ],
            validity: "This offer will automatically be applied for all bookings done online via our Website or our Email between 1st May to 31st July 2025."
        },
        {
            id: 4,
            title: "4. Early Check-In OR Late Check-Out (4 Hours)",
            description: "This offer will provide a Complimentary 4 Hour Early Check-In OR Late Check-Out at our apartments for all direct bookings done online only via our website.",
            points: [
                "The Early Check-In OR Late Check-Out offer is subject to availability of the property and will be applicable for all bookings of more than 3 Nights Stay at any of our properties."
            ],
            validity: "This offer will automatically be applied for all bookings done online via our Website or our Email between 1st May to 31st July 2025."
        },
        {
            id: 5,
            title: "5. Special Offers @ Olive Serviced Apartments",
            description: "Here are the currently running Special Offers -",
            longStayInfo: {
                title: "Long Stay Discounts",
                description: "Besides these Special Offers, you also get Long Stay Discounts for all bookings that are applied automatically as per length of your stay.",
                monthlyRentals: "Just provide your Check-In & Check-Out Dates (minimum 28 Nights) and get Monthly discounted rentals respectively. The discounted Monthly rentals also remain fixed for stays of longer than a month."
            },
            hotDeal: "The HOT DEAL pricing of Standard Apartments is our cheapest available rate. We also offer some extra options of Add-On Service Packs on chargeable basis to enhance your stay experience, these can be Added when making your booking on our website."
        }
    ];

    return (
        <>
            <div className="w-full bg-gray-50 shadow-md min-h-screen">
                {/* Top Header */}
                <div className="flex flex-col mx-4 my-4 md:flex-row bg-[#719430] text-white py-5 px-4 md:px-8 text-sm md:text-base">
                    <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
                        <span className="text-base md:text-xl font-medium">Offers</span>
                    </div>
                    <div className="w-full sm:w-1/2 text-center sm:text-right">
                        <span className="text-sm md:text-base">
                            You are here: Home / Offers                        
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
                    {/* Left Section */}
                    <div className="w-full lg:w-2/3 space-y-6">
                        <div className="text-gray-700 space-y-4 mb-8">
                            <h1 className="text-2xl md:text-3xl font-semibold">
                                Special Offers @ Olive Delhi
                            </h1>
                            <p className="text-lg md:text-xl underline">
                                We present our currently running Special Offers
                            </p>
                        </div>

                        {/* Offers List */}
                        <div className="space-y-8">
                            {offerData.map((offer) => (
                                <div key={offer.id} className=" p-6  ">
                                    <h2 className="text-lg md:text-xl font-semibold text-[#719430] mb-4">
                                        {offer.title}
                                    </h2>
                                    
                                    <p className="text-gray-600 leading-relaxed">
                                        {offer.description}
                                    </p>

                                    {/* Regular Points */}
                                    {offer.points && (
                                        <ul>
                                            {offer.points.map((point, index) => (
                                                <li key={index} className="text-gray-600 leading-relaxed">
                                                    <span className="inline-block w-2 h-2 bg-[#719430] rounded-full mr-3"></span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* Premier Details */}
                                    {offer.premierDetails && (
                                        <div className="mb-4">
                                            <h3 className="font-semibold text-gray-700 mb-2">
                                                {offer.premierDetails.title} –
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed ml-4">
                                                {offer.premierDetails.description}
                                            </p>
                                        </div>
                                    )}

                                    {/* Superior Details */}
                                    {offer.superiorDetails && (
                                        <div>
                                            <h3 className="font-semibold text-gray-700 ">
                                                {offer.superiorDetails.title} –
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed ml-4 mb-3">
                                                {offer.superiorDetails.description}
                                            </p>
                                            {offer.superiorDetails.validity && (
                                                <p className="text-gray-600 leading-relaxed mb-2">
                                                    {offer.superiorDetails.validity}
                                                </p>
                                            )}
                                            {offer.superiorDetails.note && (
                                                <p className="text-gray-600 leading-relaxed">
                                                    {offer.superiorDetails.note}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    {/* Validity */}
                                    {offer.validity && (
                                        <p className="text-gray-600 leading-relaxed mt-4">
                                            {offer.validity}
                                        </p>
                                    )}

                                    {/* Long Stay Info */}
                                    {offer.longStayInfo && (
                                        <div className="mt-4 space-y-4">
                                            <div>
                                                <h3 className="font-semibold text-gray-700 mb-2">
                                                    {offer.longStayInfo.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed mb-3">
                                                    {offer.longStayInfo.description}
                                                </p>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {offer.longStayInfo.monthlyRentals}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Hot Deal */}
                                    {offer.hotDeal && (
                                        <p className="text-gray-600 leading-relaxed mt-4">
                                            {offer.hotDeal}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="border-l border-gray-300 w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0 md:pl-6 pb-8">
                        <Sideform />
                    </div>
                </div>
            </div>

            <ChatPopup />
            <Scroll />
        </>
    );
}