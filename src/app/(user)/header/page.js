'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);



  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest('.dropdown-container')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const locations = [
    'Greater Kailash',
    'Vasant Vihar',
    'Green Park',
    'New Friends Colony',
    'Central Delhi',
    'Safdarjung Enclave',
    'Defence Colony',
    'Saket',
    'Rohini'
  ];

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/blogs', label: 'Blogs' },
    { 
      href: '/top-locations', 
      label: 'Top Locations',
      hasDropdown: true
    },
    { href: '/faq', label: 'FAQ' },
    { href: '/offers', label: 'Offers' },
    { href: '/rentals', label: 'Pricing' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      <nav className="sticky top-0 z-50 py-3 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img  
                src="https://www.oliveapartmentsdelhi.com/assets/Olive-Service-Apartments-Delhi-logo-BSRsqSW1.png" 
                alt="Olive Serviced Apartments" 
                width={150} 
                height={50} 
                // priority 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                {navigationItems.map(({ href, label, hasDropdown }) => (
                  <li key={href} className="relative dropdown-container">
                    {hasDropdown ? (
                      <div className="relative">
                        <button
                          onClick={toggleDropdown}
                          className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[#7a9b3c] flex items-center gap-1 ${
                            pathname.startsWith('/top-locations') || pathname.startsWith('/location')
                              ? 'text-[#7a9b3c] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#7a9b3c] after:transform after:scale-x-100'
                              : 'text-gray-700 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#7a9b3c] hover:after:transform hover:after:scale-x-100 after:scale-x-0'
                          } after:transition-transform after:duration-300`}
                        >
                          {label}
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              dropdownOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                          <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                            <div className="grid grid-cols-2 gap-1 p-2">
                              {locations.map((location) => (
                                <Link
                                  key={location}
                                  href={`/location/${location.toLowerCase().replace(/\s+/g, '-')}`}
                                  onClick={closeDropdown}
                                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#7a9b3c] rounded-md transition-colors duration-200 text-center border border-gray-100 hover:border-gray-200"
                                >
                                  {location}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={href}
                        className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[#7a9b3c] ${
                          pathname === href
                            ? 'text-[#7a9b3c] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#7a9b3c] after:transform after:scale-x-100'
                            : 'text-gray-700 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#7a9b3c] hover:after:transform hover:after:scale-x-100 after:scale-x-0'
                        } after:transition-transform after:duration-300`}
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#7a9b3c] hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-[#7a9b3c] transition-colors duration-200"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? 'max-h-screen opacity-100 mt-4' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg border border-gray-100">
              {navigationItems.map(({ href, label, hasDropdown }) => (
                <div key={href}>
                  {hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full text-left px-4 py-3 text-base font-medium rounded-md transition-all duration-200 text-gray-700 hover:text-[#7a9b3c] hover:bg-gray-50 flex items-center justify-between"
                      >
                        {label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            dropdownOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {dropdownOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          {locations.map((location) => (
                            <Link
                              key={location}
                              href={`/location/${location.toLowerCase().replace(/\s+/g, '-')}`}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setDropdownOpen(false);
                              }}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-[#7a9b3c] hover:bg-gray-50 rounded-md transition-colors duration-200"
                            >
                              {location}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-base font-medium rounded-md transition-all duration-200 ${
                        pathname === href
                          ? 'text-[#7a9b3c] bg-blue-50 border-l-4 border-[#7a9b3c]'
                          : 'text-gray-700 hover:text-[#7a9b3c] hover:bg-gray-50'
                      }`}
                    >
                      {label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;