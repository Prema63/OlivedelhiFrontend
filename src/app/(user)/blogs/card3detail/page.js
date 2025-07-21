"use client"

import React from 'react';

const blogSections = [
  {
    title: '2. More Space, More Comfort',
    content:
      "Let’s be honest hotel rooms can feel cramped. Serviced apartments give you room to breathe. You’re not confined to one small area; you’ve got places to lounge, eat, work, and sleep. It's the difference between a shoebox and a suite.",
  },
  {
    title: '3. Feel at Home, Even Away From Home',
    content:
      "Ever miss the feeling of just chilling on your couch or cooking your favourite meal? Serviced apartments offer that homely vibe. They're designed to feel less formal and more relaxed, so you can truly unwind.",
  },
  {
    title: '4. Ideal for Long Term Stays',
    content:
      "If you're planning to stay for more than just a couple of nights, serviced apartments are the way to go. Hotels can get old fast both in terms of cost and comfort. Serviced apartments are built for longevity with features that support daily living.",
  },
  {
    title: '5. Great Value for Money',
    content:
      'Hotels charge extra for just about everything breakfast, laundry, even bottled water. Serviced apartments usually include these perks in the cost. Plus, with the ability to cook and do laundry, you can save significantly on your trip.',
  },
  {
    title: '6. Fully Equipped Kitchens',
    content:
      "Tired of eating out every day? Serviced apartments come with fully equipped kitchens, so you can cook meals just the way you like. It's especially great for people with dietary needs or anyone craving a home cooked meal.",
  },
  {
    title: '7. Privacy and Freedom',
    content:
      'Nobody likes being interrupted at awkward hours by housekeeping. In serviced apartments, you get cleaning on your schedule, not theirs. You also don’t have to deal with crowded lobbies or noisy hallways.',
  },
  {
    title: '8. Perfect for Families and Groups',
    content:
      'Traveling with kids or friends? Hotel rooms mean multiple bookings and less bonding time. Serviced apartments let everyone stay together in one spacious unit fun, affordable, and connected.',
  },
  {
    title: '9. Business Traveller Friendly',
    content:
      'For those traveling on work, serviced apartments are a godsend. With high speed Wi Fi, work desks, and quiet environments, they’re tailor made for productivity. Plus, you can take a break and make a sandwich when Zoom fatigue kicks in.',
  },
  {
    title: '10. Housekeeping Without Intrusion',
    content:
      "You want your space cleaned, but not while you're still in bed. Serviced apartments usually offer scheduled housekeeping that respects your privacy and daily rhythm. It’s cleaning on your term.",
  },
  {
    title: '11. Flexible Check n and Check Out',
    content:
      'Unlike strict hotel schedules, many serviced apartments provide flexible check in and check out times, especially useful for international travellers or those on odd-hour flights.',
  },
  {
    title: '12. Locations That Make Sense',
    content:
      'Serviced apartments are often found in prime residential or business districts, not tourist traps. This means you get an authentic feel of the city and easy access to local markets, parks, and public transport.',
  },
  {
    title: '13. Stay Healthy While Traveling',
    content:
      'From preparing your own meals to having room to exercise or meditate, serviced apartments allow you to stick to your wellness routines better than a typical hotel room.',
  },
  {
    title: '14. Security and Peace of Mind',
    content:
      'Modern serviced apartments often have secure access, CCTV, and 24/7 support. You can sleep soundly knowing you’re safe, without the hustle and bustle of busy hotel corridors.',
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
            You are here: Home / Blogs / Why Olive Serviced A...
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/*  Image */}
        <div className="overflow-hidden">
          <img
            src="https://node.oliveapartmentsdelhi.com/get/files/mbario88-no6n7-0.jpeg"
            alt="Corporate professionals working in Olive Serviced Apartments"
            className="w-96 h-64 md:h-80 object-cover rounded mx-auto"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 text-center leading-tight">
              Why Olive Serviced Apartments Are Better Than Generic Hotels
            </h1>
          </div>
        </div>

        <div className="p-6 md:p-8 lg:p-10">
          {/* Intro */}
          <div className="mb-8">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Discover why Olive Serviced Apartments are better than Hotels. Comfort, space, savings it’s all here. Find out why '' makes serviced stays ideal.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              When you're traveling whether for work, a vacation, or even a longer stay the place you choose to stay in can make or break your experience. Sure, hotels have been the go-to for ages, but times are changing. More and more people are turning to serviced apartments, and for good reason
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Think of it like this: staying in a hotel is like borrowing a tuxedo. It looks nice, it's polished, but it's not truly yours. Staying in a serviced apartment? That’s like slipping into your favourite pair of jeans comfortable, practical, and just right for you
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              But what exactly makes serviced apartments a better choice than generic hotels? Let's dive in.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-xs md:text-xl font-semibold text-gray-600 mb-1">
              1. What Is a Serviced Apartment?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              A serviced apartment is a fully equipped living space that combines the conveniences of a hotel with the comfort and spaciousness of a real home. You get a bedroom, a living area, a kitchen, and more all in one unit. Think of it as a hotel and a home having a smart baby
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
