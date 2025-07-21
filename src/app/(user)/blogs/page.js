"use client";

import React, { useState } from "react";
import ChatPopup from "../global/chatPopUp/ChatPopUP";
import Scroll from "../global/scroll/Scroll";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
// import {LoadingMutatingDots} from "../global/loading/Loadings";
import { url } from "../lib/lib";

export default function AboutUs() {
    const [isLoading, setIsLoading] = useState(true);

    const blogPosts = [
        {
            id: 1,
            image: "https://node.oliveapartmentsdelhi.com/get/files/mbanldpd-1gese-CorporateStayinDelhi.png",
            title: "Meet, Work, Relax: Why Olive's...",
            description: "Ideal Corporate Stay in Olive with Customized Corporate Rates, Meal Plans for corporates & exclusive...",
            href: "/blogs/card1detail",
        },
        {
            id: 2,
            image: "https://node.oliveapartmentsdelhi.com/get/files/mbana4fo-8a6mc-OliveServicedApartment.png",
            title: "Find Budget Friendly Summer St...",
            description: "Summer is an ideal season to unwind, discover new places, and embrace a refreshing change of environ...",
            href: "/blogs/card2detail",
        },
        {
            id: 3,
            image: "https://node.oliveapartmentsdelhi.com/get/files/mbario88-no6n7-0.jpeg",
            title: "Why Olive Serviced Apartments ...",
            description: "Discover why Olive Serviced Apartments are better than Hotels. Comfort, space, savings it's all here...",
            href: "/blogs/card3detail",
        }
    ];

    //   if (isLoading) {
    //     return (
    //       <LoadingMutatingDots/>
    //     );
    //   }

    return (
        <>
            <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
                {/* Top Header */}
                <div className="flex flex-col mx-4 my-4 md:flex-row bg-gradient-to-r from-[#719430] to-[#8db33f] text-white py-6 px-6 md:px-10 text-sm md:text-base rounded-lg shadow-lg">
                    <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
                        <span className="text-xl md:text-2xl font-bold tracking-wide">Blogs</span>
                    </div>
                    <div className="w-full sm:w-1/2 text-center sm:text-right">
                        <span className="text-sm md:text-base opacity-90">
                            You are here: Home / Blogs
                        </span>
                    </div>
                </div>

                {/* Main content */}
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                        {blogPosts.map((post) => (
                            <Link href={post.href} key={post.id} className="group">
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-gray-100">
                                    {/* Image Container */}
                                    <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                    
                                    {/* Content Container */}
                                    <div className="p-6 lg:p-7">
                                        <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#719430] transition-colors duration-300 leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm lg:text-base mb-6 line-clamp-3 leading-relaxed">
                                            {post.description}
                                        </p>
                                        
                                        <div className="flex justify-between items-center">
                                            <span className="bg-[#719430] hover:from-[#5a7625] hover:to-[#719430] text-white px-5 py-2.5 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold transition-all duration-300 flex items-center gap-2 group-hover:shadow-lg transform rounded">
                                                Read More
                                                <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Bottom  Animation */}
                                    <div className="h-1 bg-gradient-to-r from-[#719430] to-[#8db33f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/*  Load More  */}
                <div className="flex justify-center pb-12">
                    <button className="bg-white hover:bg-[#719430] hover:text-white text-[#719430] font-semibold py-3 px-8 border-2 border-[#719430] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Load More Articles
                    </button>
                </div>
            </div>

            <ChatPopup />
            <Scroll />
        </>
    );
}