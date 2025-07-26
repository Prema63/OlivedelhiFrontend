"use client";

import { useState } from "react";
import { FiPlus as PlusIcon } from "react-icons/fi";

export default function AddBookingScripts() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [bookingScripts, setBookingScripts] = useState({
    saket: "oliveapartmentssaket.com",
    defenceColony: "oliveapartmentsdefencecolony",
    greenPark: "oliveapartmentsgreenpark",
    safdarjungEnclave: "oliveapartmentssafdurjungenclave",
    greaterKailash: "oliveapartmentsgreaterkailash",
    centralDelhi: "oliveapartmentscentraldelhi",
    vasantVihar: "oliveapartmentsvasantvihar",
    rohini: "oliveapartmentsrohini",
    newFriendsColony: "oliveapartmentsnewfriendscolony"
  });

  // Available locations for dropdown
  const locations = [
    { value: "", label: "-- Select a location --" },
    { value: "saket", label: "Saket" },
    { value: "defenceColony", label: "Defence Colony" },
    { value: "greenPark", label: "Green Park" },
    { value: "safdarjungEnclave", label: "Safdarjung Enclave" },
    { value: "greaterKailash", label: "Greater Kailash" },
    { value: "centralDelhi", label: "Central Delhi" },
    { value: "vasantVihar", label: "Vasant Vihar" },
    { value: "rohini", label: "Rohini" },
    { value: "newFriendsColony", label: "New Friends Colony" }
  ];

  const handleAddLocation = () => {
    if (selectedLocation) {
      alert(`Location ${selectedLocation} added successfully`);
      // Add your logic for  location
      setSelectedLocation("");
    } else {
      alert("Please select a location first");
    }
  };

  const handleScriptChange = (location, value) => {
    setBookingScripts(prev => ({
      ...prev,
      [location]: value
    }));
  };

  const handleSaveChanges = () => {
    alert("Booking scripts updated successfully");
  };

  return (
    <div className="min-h-screen ">
              {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Add Booking Scripts
          </h1>
        </div>
      <div className="container mx-auto px-4 py-6 lg:px-6">


        {/* Add Location Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Add Location</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex-1 max-w-xs">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5db64c] focus:border-[#5db64c]"
              >
                {locations.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleAddLocation}
              className="flex items-center justify-center bg-[#5db64c] hover:bg-[#5db64c] text-white px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Add location
            </button>
          </div>
        </div>

        {/* Location  Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Location Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Saket */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Saket:
              </label>
              <input
                type="text"
                value={bookingScripts.saket}
                onChange={(e) => handleScriptChange('saket', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5db64c] focus:border-[#5db64c]"
              />
            </div>

            {/* Defence Colony */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Defence Colony:
              </label>
              <input
                type="text"
                value={bookingScripts.defenceColony}
                onChange={(e) => handleScriptChange('defenceColony', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5db64c] focus:border-[#5db64c]"
              />
            </div>

            {/* Green Park */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Green Park:
              </label>
              <input
                type="text"
                value={bookingScripts.greenPark}
                onChange={(e) => handleScriptChange('greenPark', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5db64c] focus:border-[#5db64c]"
              />
            </div>

            {/* Safdarjung Enclave */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Safdarjung Enclave:
              </label>
              <input
                type="text"
                value={bookingScripts.safdarjungEnclave}
                onChange={(e) => handleScriptChange('safdarjungEnclave', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5db64c] focus:border-[#5db64c]"
              />
            </div>

            {/* Greater Kailash */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Greater Kailash:
              </label>
              <input
                type="text"
                value={bookingScripts.greaterKailash}
                onChange={(e) => handleScriptChange('greaterKailash', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5db64c] focus:border-[#5db64c]"
              />
            </div>

            {/* Central Delhi */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Central Delhi:
              </label>
              <input
                type="text"
                value={bookingScripts.centralDelhi}
                onChange={(e) => handleScriptChange('centralDelhi', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5db64c] focus:border-[#5db64c]"
              />
            </div>

            {/* Vasant Vihar */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vasant Vihar:
              </label>
              <input
                type="text"
                value={bookingScripts.vasantVihar}
                onChange={(e) => handleScriptChange('vasantVihar', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5db64c] focus:border-[#5db64c]"
              />
            </div>

            {/* Rohini */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rohini:
              </label>
              <input
                type="text"
                value={bookingScripts.rohini}
                onChange={(e) => handleScriptChange('rohini', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5db64c] focus:border-[#5db64c]"
              />
            </div>

            {/* New Friends Colony */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Friends Colony:
              </label>
              <input
                type="text"
                value={bookingScripts.newFriendsColony}
                onChange={(e) => handleScriptChange('newFriendsColony', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5db64c] focus:border-[#5db64c]"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-8">
            <button
              onClick={handleSaveChanges}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}