"use client"

import React, { useState } from 'react';

// First Component - Content Left, Images Right
const Section3ContentLeft = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        'https://node.oliveapartmentsdelhi.com/get/files/m7ulb7oc-i3zjc-appartmentFirst-DWdapWkT.jpg',
    ]

    return (
        <div className="max-w-6xl mx-auto  pt-0 mt-0">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-xl md:text-2xl text-gray-800 mb-2 ">
                    Accommodation @ Olive Service Apartments in Delhi
                </h1>
            </div>

            {/* Main Content */}
            <div className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                    {/* Property Details Section - LEFT */}
                    <div className="space-y-6">
                        <div className="text-[#9c9cb4] leading-relaxed">
                            <p>
                                There are a number of reasons why an increasing number of Business Travellers and even Leisure Travellers are choosing our Olive Service Apartments in Delhi:
                            </p>

                            <br />

                            <ul className="list-disc pl-5 space-y-4">
                                <li>
                                    <span className="font-semibold">Never enough space –</span> If you are staying for more than a week, you will usually struggle with arranging your things including luggage, as most hotels offer limited storage — typically just a small cupboard. You’ll end up living out of a suitcase or creating a mess. In contrast, our serviced apartments feature spacious closets and even overhead storage.
                                </li>

                                <li>
                                    <span className="font-semibold">Missing your favorite food –</span> While eating out is enjoyable for a few days, it becomes tiring when done daily. Most hotels don’t cater to personal meal preferences, but our apartments include private kitchens — so you can cook your favorite meals or customize food to your taste.
                                </li>
                            </ul>

                            <br />
                        </div>

                    </div>

                    {/* Image Gallery Section - RIGHT */}
                    <div className="space-y-4">
                        <div className="h-80 w-full max-w-5xl relative aspect-[4/3]  overflow-hidden bg-gray-200">
                            <img
                                src={images[currentImageIndex]}
                                alt={`Apartment view ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



// Second Component - Images Left, Content Right
const Section3ImageLeft = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        'https://node.oliveapartmentsdelhi.com/get/files/m7ulb7or-qmfby-appartmentSecond-C3SwikGD.jpg',
    ];


    return (
        <div className="max-w-6xl mx-auto pt-0 mt-2">


            {/* Main Content */}
            <div className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                    {/* Image Gallery Section - LEFT */}
                    <div className="space-y-4">
                        <div className="h-80 w-full max-w-5xl relative aspect-[4/3] overflow-hidden bg-gray-200">
                            <img
                                src={images[currentImageIndex]}
                                alt={`Apartment view ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Property Details Section - RIGHT */}
                    <div className="space-y-6">
                        <div className="text-[#9c9cb4] leading-relaxed">
                            <ul className="list-disc pl-5 space-y-4">
                                <li>
                                    <span className="font-semibold">All rooms are the same –</span> This is a common complaint from travelers, as most hotels have uniform room designs. Whether you are in London or Delhi, the setup remains largely the same. In contrast, our serviced accommodations across Delhi are all uniquely designed with different layouts and views, giving you a truly personalized stay.
                                </li>

                                <li>
                                    <span className="font-semibold">Non-availability of good Internet connection –</span> For business travellers, high-speed internet is a critical requirement. Many Delhi hotels offer internet only in public areas, which are noisy and distracting, or charge extra for poor in-room connectivity. All our rental apartments feature dedicated high-speed Wi-Fi ranging from 2MB to 8MB for seamless work and personal use.
                                </li>
                            </ul>
                        </div>

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
        'https://node.oliveapartmentsdelhi.com/get/files/makl5xxq-vhtwj-Photo28-04-23124237PM.jpg',
    ];

    return (
        <div className="max-w-6xl mx-auto pt-0 mt-4">

            {/* Main Content */}
            <div className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                    {/* Property Section - left */}
                    <div className="space-y-6">
                        <div className="text-[#9c9cb4] leading-relaxed">
                            <ul className="list-disc list-inside space-y-4">
                                <li>
                                    <strong>Entertainment options in your accommodation –</strong> Your standard hotels will all have TV sets in their rooms but rarely any additional amenities. Our Vacation Rentals in Delhi usually come with DVD players, stereo systems, home theaters and even X-Box gaming consoles that help you relax after a hard day’s work and decrease stress levels.
                                </li>
                                <li>
                                    <strong>Family accommodation –</strong> Those of you who have stayed in Hotels or Guest Houses in Delhi with families will admit that there is no fun in most hotels for children and even spouses. After all, there is not much one can do in a small room and the other entertainment options in a typical business hotel. Our Service Apartments offer you community living in an informal, relaxing and homely environment.
                                </li>
                            </ul>
                        </div>
                    </div>



                    {/* Image Section - right */}
                    <div className="space-y-4">
                        <div className="h-80 w-full max-w-5xl relative aspect-[4/3] overflow-hidden bg-gray-200">
                            <img
                                src={images[currentImageIndex]}
                                alt={`Apartment view ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-2 mb-3">
                    <button className="px-8 bg-[#719430] hover:cursor-pointer text-white font-semibold py-2 transition-colors">
                        CALL US
                    </button>
                </div>

            </div>
        </div>
    );
};


const App2 = () => {
    return (
        <div>
            <Section3ContentLeft />
            <Section3ImageLeft />
            <LastImageLeft />
        </div>
    );
};

export { App2 };