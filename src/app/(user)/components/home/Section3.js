"use client"

import React, { useState } from 'react';

// Second Component - Content Left, Images Right
const Section3ContentLeft = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        'https://node.oliveapartmentsdelhi.com/get/files/m7rmboa1-kpjiy-first-BJ0DL5iO.jpg',
        'https://node.oliveapartmentsdelhi.com/get/files/m7rmboaa-2994q-defSecond-DSpN6v-T.jpg',
        'https://node.oliveapartmentsdelhi.com/get/files/m7rmboam-3w3o3-second-5zLWU-48.jpg',
        'https://node.oliveapartmentsdelhi.com/get/files/m7rmbob4-e86nf-third-zvqULtW4.jpg',
        'https://node.oliveapartmentsdelhi.com/get/files/m7rmbobh-9to0c-defSixth-LLKBs9zI.jpg'
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="max-w-6xl mx-auto pt-0 mt-0">

            {/* Main Content */}
            <div className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                    {/* Property Details Section - LEFT */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xs md:text-xl text-green-700 mb-2">
                                Olive Service Apartments - Defence Colony
                            </h2>
                        </div>

                        <div className="text-[#9c9cb4] leading-relaxed">
                            <p>
                                Serviced apartments in Defence Colony are a favourite and top choice of our expat & foreign guests looking for a stay in this vibrant, centrally located area. Situated right behind the famous Defence Colony main market, our Defence Colony Apartments are spread across this upmarket area in South Delhi.
                            </p>
                            <br />
                            <p>
                                Units Available: Studio, One Bedroom, Two & Three Bedroom Apartments.
                                <br />
                                Neighbourhood: Defence Colony market is a home to around twenty restaurants and coffee shops, high-end shops, and boutiques. Attractions nearby include Connaught Place, Greater Kailash, South Extension, Khan Market, and Green Park.
                            </p>
                        </div>


                        <button className="ml-[420px] mt-2 px-4 bg-[#719430] hover:cursor-pointer text-white font-semibold py-2 transition-colors">
                            Explore
                        </button>
                    </div>

                    {/* Image Gallery Section - RIGHT */}
                    <div className="space-y-4">
                        <div className="h-80 w-full max-w-5xl relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                            <img
                                src={images[currentImageIndex]}
                                alt={`Apartment view ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex space-x-4 ml-22 w-full max-w-5xl h-15">
                            {images.slice(0, 5).map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToImage(index)}
                                    className={`h-full aspect-square rounded-md overflow-hidden border transition-all p-1 ${currentImageIndex === index
                                        ? 'border-[#719430] ring-1 ring-green-200'
                                        : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                >
                                    <div className="w-full h-full rounded overflow-hidden">
                                        <img
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover rounded"
                                        />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



// First Component - Images Left, Content Right
const Section3ImageLeft = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        'https://node.oliveapartmentsdelhi.com/get/files/m7rmynbe-up7y6-delhiFirst-EEdy4_cA.jpeg',
        'https://node.oliveapartmentsdelhi.com/get/files/m7rmynbk-bjyrm-delhiSecond-Dnkluq4E.jpeg',
        'https://node.oliveapartmentsdelhi.com/get/files/m7rmynbp-2a161-delhiThird-B37OP4Mp.jpeg',
        'https://node.oliveapartmentsdelhi.com/get/files/m7rmynbw-y0w1s-delhiFourth-wu_raQDp.jpeg',
        'https://node.oliveapartmentsdelhi.com/get/files/m7rmynby-pyua5-delhiFifth-B7M6UU_u.jpeg'
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-50 ">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-xl md:text-2xl text-gray-700 mb-2 border-b-1 border-gray-200 inline-block pb-1">
                    Top Sellers @ Olive Service Apartments Delhi
                </h1>
            </div>

            {/* Main Content */}
            <div className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                    {/* Image Gallery Section - LEFT */}
                    <div className="space-y-4">
                        <div className="h-80 w-full max-w-5xl relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                            <img
                                src={images[currentImageIndex]}
                                alt={`Apartment view ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex space-x-4 ml-14 w-full max-w-5xl h-15">
                            {images.slice(0, 5).map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToImage(index)}
                                    className={`h-full aspect-square rounded-md overflow-hidden border transition-all p-1 ${currentImageIndex === index
                                        ? 'border-[#719430] ring-1 ring-green-200'
                                        : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                >
                                    <div className="w-full h-full rounded overflow-hidden">
                                        <img
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover rounded"
                                        />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Property Details Section - RIGHT */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xs md:text-xl text-green-700 mb-2">
                                Olive Service Apartments - Central Delhi
                            </h2>
                        </div>

                        <div className="text-[#9c9cb4] leading-relaxed">
                            <p>
                                Olive Service Apartments - BLK and Ganga Ram Hospital are a short
                                drive from both these hospitals - BL Kapoor Hospital & Gangaram
                                Hospital in Delhi. The central location of Inder Puri makes them ideal for
                                those wanting to stay near City Centre Delhi. We rent out these units as
                                fully furnished, self-catered Serviced Residences with individual Kitchens
                                that are ideal for Short/Long Stay Rentals in Inderpuri near famous New
                                Rajinder Nagar area, a very upscale neighbourhood.
                            </p>
                        </div>

                        <button className="ml-[420px] mt-2 px-4 bg-[#719430] hover:cursor-pointer text-white font-semibold py-2 transition-colors">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};



// Third Component
const LastImageLeft = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        'https://node.oliveapartmentsdelhi.com/get/files/m7rmk2da-4swe4-first-Cg-ARwuR.jpg',
        'https://node.oliveapartmentsdelhi.com/get/files/m7rmk2dc-25rnr-saketSeond-8u46hRTb.jpg',
        'https://node.oliveapartmentsdelhi.com/get/files/m7rmk2dk-3i926-saketThird-B-6ccRLN.jpg',
        'https://node.oliveapartmentsdelhi.com/get/files/m7rmk2dn-42mjx-third-SOXr56TJ.jpg',
        'https://node.oliveapartmentsdelhi.com/get/files/m7rmk2dr-84k0v-fourth-CZqH14eD.jpg'
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="max-w-6xl mx-auto">


            {/* Main Content */}
            <div className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                    {/* Image Gallery Section - LEFT */}
                    <div className="space-y-4">
                        <div className="h-80 w-full max-w-5xl relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                            <img
                                src={images[currentImageIndex]}
                                alt={`Apartment view ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex space-x-4 ml-14 w-full max-w-5xl h-15">
                            {images.slice(0, 5).map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToImage(index)}
                                    className={`h-full aspect-square rounded-md overflow-hidden border transition-all p-1 ${currentImageIndex === index
                                        ? 'border-[#719430] ring-1 ring-green-200'
                                        : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                >
                                    <div className="w-full h-full rounded overflow-hidden">
                                        <img
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover rounded"
                                        />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Property Details Section - RIGHT */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xs md:text-xl text-green-700 mb-2">
                                Olive Service Apartments - Saket
                            </h2>
                        </div>

                        <div className="text-[#9c9cb4] leading-relaxed">
                            <p>
                                Olive Service Apartments - BLK and Ganga Ram Hospital are a short drive from both these hospitals - BL Kapoor Hospital & Gangaram Hospital in Delhi. The central location of Inder Puri makes them ideal for those wanting to stay near City Centre Delhi. We rent out these units as fully furnished, self-catered Serviced Residences with individual Kitchens that are ideal for Short/Long Stay Rentals in Inderpuri near famous New Rajinder Nagar area, a very upscale neighbourhood.
                            </p>
                        </div>

                        <button className="ml-[420px] mt-2 px-4 bg-[#719430] hover:cursor-pointer text-white font-semibold py-2 transition-colors">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main App Component showing both layouts
const App = () => {
    return (
        <div>
            <Section3ImageLeft />
            <Section3ContentLeft />
            <LastImageLeft />
        </div>
    );
};

export { App };