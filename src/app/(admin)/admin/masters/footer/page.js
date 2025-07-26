"use client"

import React, { useState } from 'react';

const FooterManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apartments, setApartments] = useState([
    { id: 1, title: 'testing', order: 1 },
    { id: 2, title: 'Studio @ Green Park', order: 2 },
    { id: 3, title: 'Studio @ Greater Kailash', order: 3 },
    { id: 4, title: '1 Bedroom Apt @ Defence Colony', order: 4 },
    { id: 5, title: '1 Bedroom Apt @ Green Park', order: 5 },
    { id: 6, title: '1 Bedroom Apt @ Greater Kailash I', order: 6 },
    { id: 7, title: '1 Bedroom Apt @ Saket near MAX', order: 7 },
    { id: 8, title: '3 Bedroom Apt @ Green Park', order: 8 },
    { id: 9, title: '3 BHK in Greater Kailash 1', order: 9 },
    { id: 10, title: '3 Bedroom Apt @ Panchsheel Enclave', order: 10 },
    { id: 11, title: '3 BHK Safdarjung Enclave', order: 11 },
    { id: 12, title: '2 BHK in Greater Kailash I', order: 12 }
  ]);
  
  const [copyrightText, setCopyrightText] = useState('© 2025 Olive Service Apartments Delhi - Short Term Vacation Rentals Flats | Expat Corporate Housing | Holiday Homes');
  const [newApartment, setNewApartment] = useState({ title: '', url: '', order: 13 });

  const handleAddApartment = () => {
    if (newApartment.title && newApartment.url) {
      const newApt = {
        id: apartments.length + 1,
        title: newApartment.title,
        order: newApartment.order
      };
      setApartments([...apartments, newApt]);
      setNewApartment({ title: '', url: '', order: apartments.length + 2 });
      setIsModalOpen(false);
    }
  };

  const handleDeleteApartment = (id) => {
    setApartments(apartments.filter(apt => apt.id !== id));
  };

  const handleEditApartment = (id) => {
    // Edit functionality can be implemented here
    console.log('Edit apartment:', id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Footer Management</h1>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
            Update
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Copyright Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Copyright Section</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">Copyright Text</label>
              <textarea
                value={copyrightText}
                onChange={(e) => setCopyrightText(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows="3"
              />
            </div>
          </div>

          {/* Popular Apartments Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
              <h2 className="text-lg font-semibold text-gray-700">Popular Apartments</h2>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
              >
                + Add Apartment
              </button>
            </div>

            {/* Apartments List */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {apartments.slice(0, 4).map((apartment) => (
                <div key={apartment.id} className="border border-gray-200 rounded-md p-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 mb-1">{apartment.title}</h3>
                      <div className="text-sm text-gray-600">
                        <span>Order: {apartment.order}</span>
                        <span className="mx-2">|</span>
                        <a href="#" className="text-blue-600 hover:underline">View Link</a>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditApartment(apartment.id)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded border text-sm transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteApartment(apartment.id)}
                        className="bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1 rounded border border-red-200 text-sm transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current List Preview */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-6">Current List Preview (Ordered)</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Footer Copyright Preview */}
            <div>
              <h3 className="text-base font-medium text-gray-600 mb-3">Footer Copyright:</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{copyrightText}</p>
            </div>

            {/* Popular Apartments Preview */}
            <div>
              <h3 className="text-base font-medium text-gray-600 mb-3">Popular Apartments:</h3>
              <ol className="space-y-1 text-sm">
                {apartments.map((apartment, index) => (
                  <li key={apartment.id} className="text-gray-700">
                    <span className="font-medium">{index + 1}. </span>
                    <a href="#" className="text-blue-600 hover:underline">{apartment.title}</a>
                    <span className="text-gray-500 ml-2">(Order: {apartment.order})</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0  flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Add New Apartment</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Title</label>
                    <input
                      type="text"
                      value={newApartment.title}
                      onChange={(e) => setNewApartment({...newApartment, title: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter apartment title"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">URL</label>
                    <input
                      type="url"
                      value={newApartment.url}
                      onChange={(e) => setNewApartment({...newApartment, url: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter apartment URL"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Order</label>
                    <input
                      type="number"
                      value={newApartment.order}
                      onChange={(e) => setNewApartment({...newApartment, order: parseInt(e.target.value)})}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="1"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddApartment}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterManagement;