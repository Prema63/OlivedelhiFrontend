"use client";

import React, { useState } from "react";
import ChatPopup from "../global/chatPopUp/ChatPopUP";
import Scroll from "../global/scroll/Scroll";
import Sideform from "../global/Sideform/Sideform";
// import {LoadingMutatingDots} from "../global/loading/Loadings";
import { url } from "../lib/lib";

// Contact Form Component
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        apartmentType: '',
        budget: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#719430] focus:border-transparent transition-colors"
                        required
                    />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Your Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#719430] focus:border-transparent transition-colors"
                        required
                    />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Your Phone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#719430] focus:border-transparent transition-colors"
                        required
                    />
                </div>

                {/* Apartment Type Field */}
                <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                        Your Apartment Type
                    </label>
                    <div className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="apartmentType"
                                    value="serviced-room"
                                    checked={formData.apartmentType === 'serviced-room'}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-[#719430] focus:ring-[#719430] border-gray-300"
                                />
                                <span className="text-sm text-gray-700">Serviced Room</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="apartmentType"
                                    value="studio-apartment"
                                    checked={formData.apartmentType === 'studio-apartment'}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-[#719430] focus:ring-[#719430] border-gray-300"
                                />
                                <span className="text-sm text-gray-700">Studio Apartment</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="apartmentType"
                                    value="one-bedroom"
                                    checked={formData.apartmentType === 'one-bedroom'}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-[#719430] focus:ring-[#719430] border-gray-300"
                                />
                                <span className="text-sm text-gray-700">One Bedroom Apartment</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="apartmentType"
                                    value="two-bedroom"
                                    checked={formData.apartmentType === 'two-bedroom'}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-[#719430] focus:ring-[#719430] border-gray-300"
                                />
                                <span className="text-sm text-gray-700">Two Bedroom Apartment</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer sm:col-span-2">
                                <input
                                    type="radio"
                                    name="apartmentType"
                                    value="three-bedroom"
                                    checked={formData.apartmentType === 'three-bedroom'}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-[#719430] focus:ring-[#719430] border-gray-300"
                                />
                                <span className="text-sm text-gray-700">Three Bedroom Apartment</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Budget Field */}
                <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                        Your Budget
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="budget"
                                value="low-budget"
                                checked={formData.budget === 'low-budget'}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-[#719430] focus:ring-[#719430] border-gray-300"
                            />
                            <span className="text-sm text-gray-700">Low Budget</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="budget"
                                value="mid-range"
                                checked={formData.budget === 'mid-range'}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-[#719430] focus:ring-[#719430] border-gray-300"
                            />
                            <span className="text-sm text-gray-700">Mid Range</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="budget"
                                value="high-end"
                                checked={formData.budget === 'high-end'}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-[#719430] focus:ring-[#719430] border-gray-300"
                            />
                            <span className="text-sm text-gray-700">High End</span>
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        className="bg-[#719430] text-white px-6 py-2 rounded-md hover:bg-[#5a7526] focus:outline-none focus:ring-2 focus:ring-[#719430] focus:ring-opacity-50 transition-colors font-medium text-sm"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default function Pricing() {
    return (
        <div className="w-full bg-gray-50 shadow-md min-h-screen">
            {/* Top Header */}
            <div className="flex flex-col mx-4 my-4 md:flex-row bg-[#719430] text-white py-5 px-4 md:px-8 text-sm md:text-base">
                <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
                    <span className="text-base md:text-xl font-medium">Contact-Us</span>
                </div>
                <div className="w-full sm:w-1/2 text-center sm:text-right">
                    <span className="text-sm md:text-base">
                        You are here: Home / Contact Us
                    </span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 max-w-7xl">
                {/* Left Section */}
                <div className="w-full lg:w-2/3 space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
                            Contact Us @ Olive Delhi
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Please fill the short Form below for your Special Offer! You can Call or WhatsApp (+91) 7290029000 or Email –
                            <span className="text-[#587bff]"> sales@olivedelhi.com</span>
                        </p>
                    </div>
                    {/* Contact Form */}
                    <ContactForm />
                </div>

                {/* Side Form Placeholder */}
                <div className="w-full lg:w-1/3">
                    <div className="lg:sticky lg:top-8">
                        <div className="border-l border-gray-200 p-4 md:p-6">
                            <Sideform />
                        </div>
                    </div>
                </div>
            </div>
            <ChatPopup />
            <Scroll />
        </div>
    );
}