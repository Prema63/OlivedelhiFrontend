"use client"

import { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Users, Award, MapPin, Calendar, Phone } from 'lucide-react';

export default function HomepageAccordion() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const AccordionSection = ({ id, title, children, defaultOpen = false }) => {
    const isOpen = openSections[id] ?? defaultOpen;

    return (
      <div className="bg-green-100 rounded-lg mb-4 overflow-hidden border border-green-200 shadow-sm">
        <button
          onClick={() => toggleSection(id)}
          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-green-150 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          <span className="text-gray-800 font-medium text-lg">{title}</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>

        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="px-6 pb-6">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen ">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Home Page</h1>

      <div className="max-w-4xl mx-auto px-4">

        <div className="space-y-4">
          <AccordionSection id="meta" title="Meta Data">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Website Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Page Title</label>
                  <input
                    type="text"
                    placeholder="Enter page title"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Meta Description</label>
                  <textarea
                    placeholder="Enter meta description"
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>
              </div>
            </div>
          </AccordionSection>

          <AccordionSection id="topImage" title="Top Image Section">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Hero Section</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-3xl font-bold mb-2">Welcome to Our Platform</h2>
                    <p className="text-lg opacity-90">Discover amazing experiences with us</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Upload Image
                  </button>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Edit Content
                  </button>
                </div>
              </div>
            </div>
          </AccordionSection>

          <AccordionSection id="about" title="About Section">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">About Us</h3>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  We are a dedicated team of professionals committed to delivering exceptional services
                  and creating meaningful experiences for our clients. Our journey began with a simple
                  mission: to bridge the gap between innovation and practicality.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Expert Team</h4>
                    <p className="text-sm text-gray-600">Skilled professionals</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Quality Service</h4>
                    <p className="text-sm text-gray-600">Premium solutions</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Top Rated</h4>
                    <p className="text-sm text-gray-600">Customer satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionSection>

          <AccordionSection id="topSellers" title="Top Sellers Section">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Featured Products</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-br from-green-400 to-blue-500 h-32 rounded-lg mb-3"></div>
                    <h4 className="font-semibold text-gray-800 mb-2">Premium Service {item}</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      High-quality solution designed for modern businesses
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.{8 + item}</span>
                      </div>
                      <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AccordionSection>

          <AccordionSection id="testimonials" title="Testimonials Section">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What Our Clients Say</h3>
              <div className="space-y-6">
                {[
                  { name: "Sarah Johnson", role: "CEO, TechCorp", content: "Outstanding service and exceptional attention to detail. The team exceeded our expectations." },
                  { name: "Michael Chen", role: "Marketing Director", content: "Professional, reliable, and innovative. They delivered exactly what we needed on time." },
                  { name: "Emily Rodriguez", role: "Business Owner", content: "The results speak for themselves. Our productivity increased significantly after working with them." }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 mb-2">"{testimonial.content}"</p>
                        <div>
                          <p className="font-semibold text-gray-800">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AccordionSection>

          <AccordionSection id="stayExperience" title="Stay Experience Section">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Experience</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <h4 className="text-xl font-semibold">Luxury Locations</h4>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Unforgettable Experiences</h4>
                  <p className="text-gray-600 mb-4">
                    Discover premium accommodations and exceptional service in stunning locations
                    around the world. Every detail is crafted for your comfort and enjoyment.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <div>
                      <h5 className="font-medium text-gray-800">Flexible Booking</h5>
                      <p className="text-sm text-gray-600">Easy reservation system</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                    <div>
                      <h5 className="font-medium text-gray-800">24/7 Support</h5>
                      <p className="text-sm text-gray-600">Always here to help</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Star className="w-6 h-6 text-yellow-600" />
                    <div>
                      <h5 className="font-medium text-gray-800">Premium Amenities</h5>
                      <p className="text-sm text-gray-600">Luxury at every turn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionSection>
        </div>
      </div>
    </div>
  );
}