'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import certificate from '../../../../public/assets/footer.jpg';
import { url } from "../lib/lib";

const Footer = () => {
  const [data, setData] = useState({});
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [formErrors, setFormError] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const locations = [
    "Greater Kailash",
    "Green Park", 
    "Central Delhi",
    "Defence Colony",
    "Rohini",
    "Vasant Vihar",
    "New Friends Colony",
    "Safdarjung Enclave",
    "Saket"
  ];

  const popularApartments = [
    "testing",
    "Studio @ Green Park",
    "Studio @ Greater Kailash",
    "1 Bedroom Apt @ Defence Colony",
    "1 Bedroom Apt @ Green Park",
    "1 Bedroom Apt @ Greater Kailash I",
    "1 Bedroom Apt @ Saket near MAX",
    "3 Bedroom Apt @ Green Park",
    "3 BHK in Greater Kailash I",
    "3 Bedroom Apt @ Panchsheel Enclave",
    "3 BHK Safdarjung Enclave",
    "2 BHK in Greater Kailash I"
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}`);
        const response2 = await axios.get(`${url}`);

        setData(response.data.data);
        setList(response2.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      errors.phone = "Phone number must be exactly 10 digits";
    }

    if (Object.keys(errors).length) {
      setFormError(errors);
      return;
    }

    console.log("Form Submitted:", formData);
    const allData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      title: "Call Me Back",
    };
    setIsLoading(true);
    try {
      const response = await fetch(url + "user/callback-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Form submitted successfully:", result);
        toast.success("Your request has been submitted successfully!");
      } else {
        console.error("Error:", result);
        toast.error("Something went wrong. Please try again later.");
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
      });
      setFormError({});
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full text-white bg-white">
        {/* Main Footer Section */}
        <div className="bg-[#719430] text-white lg:mx-24 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 xl:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Grid Layout - Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              
              {/* Our Locations */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide mb-4 sm:mb-6">
                  OUR LOCATIONS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 sm:gap-3">
                  {locations.map((location, index) => (
                    <div 
                      key={index} 
                      className="text-white hover:text-gray-200 cursor-pointer transition-colors text-sm sm:text-base py-1"
                    >
                      {location}
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Apartments */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide mb-4 sm:mb-6">
                  POPULAR APARTMENTS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 sm:gap-3 max-h-96 overflow-y-auto scrollbar-none" 
                     style={{
                       scrollbarWidth: 'none', /* Firefox */
                       msOverflowStyle: 'none', /* Internet Explorer 10+ */
                     }}>
                  {popularApartments.map((apartment, index) => (
                    <div 
                      key={index} 
                      className="text-white hover:text-gray-200 cursor-pointer transition-colors text-sm sm:text-base py-1 leading-relaxed"
                    >
                      {apartment}
                    </div>
                  ))}
                </div>
                <style jsx>{`
                  /* Hide scrollbar for WebKit browsers */
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
              </div>

              {/* Call Me Back Form */}
              <div className="space-y-4 md:col-span-2 xl:col-span-1">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide mb-4 sm:mb-6">
                  CALL ME BACK
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2 text-sm sm:text-base">
                      Your Name (required)
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 sm:p-3 bg-[#6a8b2c] text-white border border-[#5a7b1c] rounded focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 placeholder-gray-300 text-sm sm:text-base transition-all"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                    />
                    {formErrors.name && (
                      <div className="text-yellow-300 text-xs sm:text-sm mt-1">{formErrors.name}</div>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2 text-sm sm:text-base">
                      Your Email (required)
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 sm:p-3 bg-[#6a8b2c] text-white border border-[#5a7b1c] rounded focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 placeholder-gray-300 text-sm sm:text-base transition-all"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                    />
                    {formErrors.email && (
                      <div className="text-yellow-300 text-xs sm:text-sm mt-1">{formErrors.email}</div>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2 text-sm sm:text-base">
                      Your Phone (required)
                    </label>
                    <input
                      type="tel"
                      className="w-full p-2 sm:p-3 bg-[#6a8b2c] text-white border border-[#5a7b1c] rounded focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 placeholder-gray-300 text-sm sm:text-base transition-all"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                    {formErrors.phone && (
                      <div className="text-yellow-300 text-xs sm:text-sm mt-1">{formErrors.phone}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto bg-white text-[#7a9b3c] font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#7a9b3c] border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      "Send"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Section */}
        <div className="bg-[#719430] lg:mx-24 text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8 xl:px-24">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <Image
                src={certificate}
                alt="Certificate of Excellence"
                width={300}
                height={200}
                className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto"
              />
            </div>
            
            {/* Copyright and Links */}
            <div className="border-t border-white/20 pt-4 sm:pt-6">
              <p className="text-white mb-3 sm:mb-4 text-xs sm:text-sm md:text-base px-2 sm:px-4 leading-relaxed">
                © 2025 Olive Service Apartments Delhi - Short Term Vacation Rentals Flats | Expat Corporate Housing | Holiday Homes
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <Link 
                  href="/" 
                  className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base"
                >
                  Home
                </Link>
                <Link 
                  href="/contact-us" 
                  className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;