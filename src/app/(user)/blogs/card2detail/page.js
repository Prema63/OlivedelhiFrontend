"use client"

import React from 'react';

const blogSections = [
  {
    title: '2. Set Your Budget for Your Summer Stay',
    content:
      'Start by deciding how much you want to spend on accommodation. Olive offers various apartment sizes and pricing, so setting a budget helps you pick the best option for your wallet. Remember, a well planned budget makes your trip more enjoyable and stress free',
  },
  {
    title: '3. How to Book Olive Serviced Apartment Smartly',
    content:
      "Reserve your accommodation in advance to lock in the lowest prices, or stay alert for last-minute offers on Olive’s official site or reliable booking services. Signing up for newsletters can also get you exclusive offers and discounts. Think of it like catching the freshest fruit at the market before everyone else!",
  },
  {
    title: '4. Enjoy Home Like Comforts at Olive',
    content:
      'Unlike cramped hotel rooms, Olive apartments give you space to breathe, relax, and unwind. With a living room, bedroom, and even a kitchen, you have the freedom to live on your terms perfect for those long summer stays when comfort matters most.',
  },
  {
    title: '5. Cook Your Own Meals with a Fully Equipped Kitchen',
    content:
      'Eating out every day can quickly add up. Olive’s apartments come with fully equipped kitchens, so you can prepare your own meals. Cooking at “home” not only saves money but also lets you enjoy healthy, personalized food anytime.',
  },
  {
    title: '6. Take Advantage of Location Benefits',
    content:
      'Olive Serviced Apartments are usually located close to city centres, transport hubs, or popular attractions. This prime location means you save money and time on transportation, making your summer exploration easier and cheaper',
  },
  {
    title: '7. Flexible Stay Options to Save Money',
    content:
      'Whether you need a few days or a few weeks, Olive offers flexible stay packages that often come with discounted rates for longer stays. Staying longer can be surprisingly affordable when you book the right package.',
  },
  {
    title: '8. Use Loyalty and Membership Discounts',
    content:
      'If you travel frequently, Olive’s loyalty programs or membership deals can help you earn points or discounts for future stays. Think of it as your ticket to more affordable travels every time you visit.',
  },
  {
    title: '9. Make Use of Olive’s Amenities',
    content:
      'From laundry facilities to free Wi Fi and housekeeping services, Olive provides many amenities included in your stay, reducing the need for extra expenses and giving you more value for your money.',
  },
  {
    title: '10. Travel Off Peak to Save More',
    content:
      'Consider visiting during off peak times when Olive may offer better rates. Mid week stays or booking during quieter seasons often come with discounts, making your summer stay even more budget-friendly.',
  },
  {
    title: '11. Plan Local Activities Around Olive',
    content:
      'Use Olive’s central locations to explore local parks, museums, or markets that are either free or low cost. This way, your entertainment budget stays under control without missing out on the local flavour.',
  },
  {
    title: '12. Group Travel Savings at Olive',
    content:
      'Traveling with family or friends? Olive apartments often have multiple bedrooms and common areas to share, making it cost-effective for groups. Splitting the cost makes luxury affordable.',
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="flex flex-col mx-4 my-4 md:flex-row bg-[#719430] text-white py-6 px-6 md:px-10 text-sm md:text-base rounded-lg shadow-lg">
        <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
          <span className="text-xl md:text-2xl font-bold tracking-wide">Blogs</span>
        </div>
        <div className="w-full sm:w-1/2 text-center sm:text-right">
          <span className="text-sm md:text-base opacity-90">
            You are here: Home / Blogs / Find Budget Friendly...
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/*  Image */}
        <div className="overflow-hidden">
          <img
            src="https://node.oliveapartmentsdelhi.com/get/files/mbana4fo-8a6mc-OliveServicedApartment.png"
            alt="Corporate professionals working in Olive Serviced Apartments"
            className="w-96 h-64 md:h-80 object-cover rounded mx-auto"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 text-center leading-tight">
              Find Budget Friendly Summer Stay at Olive Serviced Apartment
            </h1>
          </div>
        </div>

        <div className="p-6 md:p-8 lg:p-10">
          {/* Intro */}
          <div className="mb-8">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Summer is an ideal season to unwind, discover new places, and embrace a refreshing change of environment. But finding a comfortable place to stay without overspending can sometimes feel like searching for a needle in a haystack. What if I told you that Olive Serviced Apartment offers a perfect blend of comfort, convenience, and affordability for your summer stay? Whether you're traveling solo, with family, or for work, Olive provides a budget friendly option that feels like home, with all the perks of a hotel
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Curious how you can enjoy your summer stay at Olive without blowing your budget? Let’s dive into the best tips and ideas to make your summer trip enjoyable, affordable, and hassle free!
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-xs md:text-xl font-semibold text-gray-600 mb-1">
              1. Why Choose Olive Serviced Apartment?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Olive Serviced Apartment is a fantastic choice for travellers looking for a budget friendly summer stay. It combines the comforts of a home with the convenience of hotel services think of it as your cozy nest away from home. Spacious rooms, modern kitchens, and flexible stay options make Olive perfect for longer stays, families, or even solo travellers wanting a comfortable base.
            </p>
          </div>

          {/* Sections 3  */}
          <div className="space-y-10">
            {blogSections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xs md:text-xl font-semibold text-gray-600 mb-1">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Booking  */}
          <div className="text-center mt-12">
            <button className="bg-[#719430] text-white font-medium px-8 py-3 rounded-md hover:bg-[#5f7d29] transition-colors duration-300 text-sm md:text-base">
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
