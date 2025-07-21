"use client"

import React from 'react';

const blogSections = [
  {
    title: '2. What Makes Olive Serviced Apartments Stand Out',
    content:
      'Olive Serviced Apartments offer the right balance between professionalism and comfort. These fully furnished spaces include bedrooms, living rooms, kitchens, and dedicated work areas—giving your team more freedom, privacy, and space compared to standard hotels.',
  },
  {
    title: '3. Flexible Stays with Customized Corporate Rates',
    content:
      "Whether it's a short-term project or long-term relocation, Olive offers transparent, flexible pricing with no hidden costs or rigid contracts.",
  },
  {
    title: '4. Corporate Meal Plans: Simple, Healthy, Convenient',
    content:
      'Olive provides curated daily meal plans, delivering home-style, nutritious food—no more hassle of ordering out every day.',
  },
  {
    title: '5. Exclusive Services: Pick & Drop Only for Corporates',
    content:
      'Enjoy seamless commutes with Olive’s exclusive pick & drop services for corporate guests—reliable, safe, and hassle-free.',
  },
  {
    title: '6. Trusted by Top Corporate Names',
    content:
      'Companies like Microsoft, Mankind Pharma, Milora, OLA, KPMG, Philips, Google, and Accenture rely on Olive—proof of unmatched hospitality.',
  },
  {
    title: '7. Fully Equipped Workspaces Inside Apartments',
    content:
      'All units come with ergonomic desks, chairs, and high-speed Wi-Fi—ensuring uninterrupted productivity without needing to leave the apartment.',
  },
  {
    title: '8. Prime Locations for Quick Access to Business Hubs',
    content:
      'Olive Apartments are located near Connaught Place, Nehru Place, and Cyber City—cutting down commute times and maximizing productivity.',
  },
  {
    title: '9. Safe, Secure, and Professional Environment',
    content:
      'With 24/7 staff support, CCTV surveillance, and secure access, Olive ensures a safe, dependable stay for your team.',
  },
  {
    title: '10. A Smart Choice for Hospital Stays and Medical Travel',
    content:
      'Olive’s properties near top hospitals make them ideal for medical stays—offering comfort and convenience for patients and families.',
  },
  {
    title: '11. Long Term Projects or Short Trips — One Solution',
    content:
      'Olive caters to all durations—from one-night business visits to six-month corporate deployments—with flexible terms.',
  },
  {
    title: '12. Final Thoughts: Olive Makes Business Travel Easy',
    content:
      'Olive combines comfort, efficiency, and affordability with services like custom rates and corporate-only amenities—freeing your team to focus on what matters: the work.',
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
            You are here: Home / Meet, work, relax:
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="overflow-hidden">
          <img
            src="https://node.oliveapartmentsdelhi.com/get/files/mbanldpd-1gese-CorporateStayinDelhi.png"
            alt="Corporate professionals working in Olive Serviced Apartments"
            className="w-96 h-64 md:h-80 object-cover rounded mx-auto"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-gray-800 text-center leading-tight">
              Meet, Work, Relax: Why Olive's Serviced Apartments Are Ideal for Corporate Stays
            </h1>
          </div>
        </div>

        <div className="p-6 md:p-8 lg:p-10">
          {/*  Intro */}
          <div className="mb-8">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Ideal Corporate Stay in Olive with Customized Corporate Rates, Meal Plans for corporates & exclusive pick and drop services for business guests.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              When business brings you to Delhi, you need more than just a place to sleep; you need a space to work, rest, and feel at ease. That's where Olive Serviced Apartments steps in, offering a smart solution for companies and professionals looking for a reliable, cost-effective, and flexible corporate stay.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              With a growing list of corporate clients like Mankind Pharma, Milora, and Accenture, Olive is quickly becoming the preferred choice for business travellers. Let's explore why.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-xs md:text-xl font-semibold text-gray-600 mb-1">
              1. The Need for Comfortable Corporate Stays
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Business travel can be tiring. Living out of hotel rooms often disrupts productivity and personal comfort. Corporate teams need spaces that allow them to unwind, work in peace, and settle in as if they're at home.
            </p>
          </div>

          {/* Sections 3  */}
          <div className="space-y-10">
            {blogSections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xs md:text-xl font-semibold text-gray-600 mb-1">
                  {section.title}
                </h2>
                <p className="text-gray-500 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Booking */}
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
