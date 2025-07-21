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
    const [expandedFAQ, setExpandedFAQ] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "What's the difference between Hotels & Olive Serviced Apartments?",
            answer: "Serviced apartments offers spacious, fully furnished, beautifully decorated apartments, much larger than hotel rooms (even extended stay hotel rooms), featuring a genuine (more home-like) residential character. All apartments usually feature a complete fully-equipped Kitchen, and have separate dining, living and sleeping areas. They will also have a fully automatic Washing Machine with Dryer, Iron & Ironing Board, landline Telephone, Tata Sky TV and WiFi Internet. A wide range of personal services and exceptional amenities including health clubs and swimming pools (at many locations) provide a refined lifestyle, and offer a caring and homelike atmosphere for guests and their families."
        },
        {
            id: 2,
            question: "What is included in the rate?",
            answer: "Rentals include Cleaning, linen changes, Water, Cooking Gas, 24 Hour Wi-Fi Internet, Tata Sky TV, Power Backup, Landline Phone (Outgoing Calls chargeable) and all flat/society maintenance. All apartments are fully furnished and equipped with cooking utensils and crockery to cater for the maximum occupancy of the apartment. Electricity may be charged separately upon actuals. Rentals do not include any applicable Goods & Services Tax (GST)."
        },
        {
            id: 3,
            question: "Can I view your serviced apartments prior to making a reservation?",
            answer: "Yes, subject to availability. If you are staying in the apartment for an extended period of time we would strongly suggest you do this, so you can familiarize yourself not only with the apartment but the local area and facilities. Please contact our reservations team to arrange a viewing."
        },
        {
            id: 4,
            question: "How do I make a booking?",
            answer: "It is just as easy as booking a hotel! You can go to our reservations website and make your booking online to get an immediate confirmation – https://www.oliveservicedapartments.com/delhi OR give us a call at +917290029000 or email us via sales@olivedelhi.com or fill in the form on the website: https://www.oliveapartmentsdelhi.com/enquiry All bookings will be confirmed only after paying the reservation amount. For direct online booking, you will receive an instant confirmation. For booking made by other modes, within 24 hours of the reservation amount being received by us, you will receive confirmation of your booking and your arrival information pack via email."
        },
        {
            id: 5,
            question: "How much do I pay to make the booking?",
            answer: "To secure a booking, we require 1 week rental payment (may be higher or lower in case of certain bookings). This rental payment can be made via Debit/Credit Cards, Cash or Bank Transfer."
        },
        {
            id: 6,
            question: "Do I need to pay a security deposit?",
            answer: "If you do not have a credit card available to cover any unpaid bills, loss or damage, you will be required to pay a security deposit on your arrival. We will keep the deposit during your stay and until we can confirm there are no pending phone bills nor any additional cleaning nor damage nor loss in the apartment."
        },
        {
            id: 7,
            question: "Can I pay for my serviced apartment on departure?",
            answer: "No. A part of the Payment is required at the time of booking and prior to check-in. Unlike hotels, few serviced apartment buildings have a manned reception or the facility to take payment at the time of check-in. At the time of booking you will be asked for full payment of 1 week rental unless otherwise agreed."
        },
        {
            id: 8,
            question: "What methods of payment do you accept?",
            answer: "All major debit/credit cards are accepted. We also accept Cash and Bank Transfers."
        },
        {
            id: 9,
            question: "Is there a minimum stay requirement?",
            answer: "There is a minimum stay requirement of 2 nights in all our properties unless otherwise specified."
        },
        {
            id: 10,
            question: "What are the terms of cancellation?",
            answer: "Please familiarize yourself with our terms and conditions of business as all bookings are subject to these terms. There is absolutely NO Cancellation charge if you cancel a confirmed reservation before 14 Days from the date of arrival. There will be a 25% cancellation charge if a confirmed reservation is cancelled later than this date and upto 1 Day before the scheduled check-in date. If a reservation is cancelled after that date or is a No-Show, there will be no refund of rental paid. In the event that a guest needs to check out prior to the agreed departure date, we will use our best endeavour to obtain a refund of accommodation charges for the remainder of the stay. However, any refund will be subject to the apartment being re-let and may be subject to a cancellation charge. We recommend that you have travel insurance to cover these costs."
        }
    ];

    const toggleFAQ = (id) => {
        setExpandedFAQ(expandedFAQ === id ? null : id);
    };

    //   if (isLoading) {
    //     return (
    //       <LoadingMutatingDots/>
    //     );
    //   }

    return (
        <>
            <div className="w-full bg-gray-50 shadow-md min-h-screen">
                {/* Top Header */}
                <div className="flex flex-col mx-4 my-4 md:flex-row bg-[#719430] text-white py-5 px-4 md:px-8 text-sm md:text-base">
                    <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
                        <span className="text-base md:text-xl font-medium">FAQ</span>
                    </div>
                    <div className="w-full sm:w-1/2 text-center sm:text-right">
                        <span className="text-sm md:text-base">
                            You are here: Home / FAQ
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 max-w-7xl">
                    {/* Left Section */}
                    <div className="w-full lg:w-2/3 space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
                                Frequently Asked Questions
                            </h1>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Here is a list of Frequently Asked Questions (FAQ) that will give you a much better understanding of our workings, to ensure a simpler, hassle-free and transparent process of renting your service apartments across Delhi. Please feel free to contact our Sales Team for any queries or clarifications.
                            </p>
                        </div>

                        {/* FAQ List */}
                        <div className="space-y-4">
                            {faqData.map((faq) => (
                                <div 
                                    key={faq.id} 
                                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                                >
                                    {/* Question Header */}
                                    <button
                                        onClick={() => toggleFAQ(faq.id)}
                                        className="w-full px-4 md:px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                                    >
                                        <div className="flex items-start space-x-3">
                                            <span className="text-[#719430] font-semibold text-sm md:text-base flex-shrink-0">
                                                Q.
                                            </span>
                                            <h3 className="text-gray-800 font-medium text-sm md:text-base leading-relaxed pr-4">
                                                {faq.question}
                                            </h3>
                                        </div>
                                        <div className="flex-shrink-0 ml-2">
                                            <svg
                                                className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                                                    expandedFAQ === faq.id ? 'rotate-180' : ''
                                                }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </button>

                                    {/* Answer Content */}
                                    <div
                                        className={`transition-all duration-300 ease-in-out ${
                                            expandedFAQ === faq.id
                                                ? 'max-h-96 opacity-100'
                                                : 'max-h-0 opacity-0'
                                        } overflow-hidden`}
                                    >
                                        <div className="px-4 md:px-6 pb-4">
                                            <div className="flex items-start space-x-3">
                                                <span className="text-[#719430] font-semibold text-sm md:text-base flex-shrink-0">
                                                    A.
                                                </span>
                                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        
                    </div>

                    {/*  Side Form */}
                    <div className="w-full lg:w-1/3">
                        <div className="lg:sticky lg:top-8">
                            <div className=" border-l border-gray-200 p-4 md:p-6">
                                <Sideform />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ChatPopup />
            <Scroll />
        </>
    );
}