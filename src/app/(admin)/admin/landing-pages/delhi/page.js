"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Calendar } from 'lucide-react';

const DelhiTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const enquiriesData = [
    {
      id: 1,
      date: '26-07-2025 06:34 PM',
      location: 'Vasant Vihar',
      fullName: 'Amaal Kaurav',
      email: 'amaalkaurav@gmail.com',
      phone: '7616563123',
      checkIn: 'N/A',
      checkOut: 'N/A',
      guests: '4 Guests',
      message: 'Looking at long term lease options'
    },
    {
      id: 2,
      date: '25-07-2025 04:43 PM',
      location: 'Vasant Vihar',
      fullName: 'Rahul Singh',
      email: 'rahoolra.thakur19@gmail.com',
      phone: '9077612736',
      checkIn: '16/08/2025',
      checkOut: '17/08/2025',
      guests: '2 Guests',
      message: ''
    },
    {
      id: 3,
      date: '25-07-2025 10:49 AM',
      location: 'Greater Kailash',
      fullName: 'Kulsoom Singha',
      email: 'kulsoomsingha29@gmail.com',
      phone: '9643521275',
      checkIn: '30/07/2025',
      checkOut: '30/08/2025',
      guests: '1 Guests',
      message: ''
    },
    {
      id: 4,
      date: '25-07-2025 07:26 AM',
      location: 'Vasant Vihar',
      fullName: 'Ravi Kaila',
      email: 'kala.ravikaila24@gmail.com',
      phone: '9008145748',
      checkIn: '01/08/2025',
      checkOut: '31/10/2025',
      guests: '2 Guests',
      message: ''
    },
    {
      id: 5,
      date: '24-07-2025 06:30 AM',
      location: 'Safdarjung',
      fullName: 'Vinay',
      email: 'vinay.chopra@gmail.com',
      phone: '7018145419',
      checkIn: '31/07/2025',
      checkOut: '03/08/2025',
      guests: '5 Guests',
      message: ''
    },
    {
      id: 6,
      date: '25-07-2025 12:43 AM',
      location: 'Greater Kailash',
      fullName: 'Sandeep Paul',
      email: 'paulsandeep731@gmail.com',
      phone: '9896126534',
      checkIn: '30/07/2025',
      checkOut: '01/08/2025',
      guests: '2 Guests',
      message: ''
    },
    {
      id: 7,
      date: '25-07-2025 10:18 PM',
      location: 'Greater Kailash',
      fullName: 'Mushaan Srivastava',
      email: 'mushaan.srivastava.work@gmail.com',
      phone: '9916734198',
      checkIn: '23/07/2025',
      checkOut: '31/07/2025',
      guests: '2 Guests',
      message: ''
    },
    {
      id: 8,
      date: '25-07-2025 09:32 PM',
      location: 'Shanti Park',
      fullName: 'Poornima Kumari',
      email: 'poornima1023@gmail.com',
      phone: '9837764529',
      checkIn: '27/07/2025',
      checkOut: '30/08/2025',
      guests: '3 Guests',
      message: ''
    },
    {
      id: 9,
      date: '25-07-2025 08:41 PM',
      location: 'Defence Colony',
      fullName: 'Sanjay Singh Tomar',
      email: 'sjr.sanjayraj@gmail.com',
      phone: '9314411193',
      checkIn: '28/07/2025',
      checkOut: '30/07/2025',
      guests: '2 Guests',
      message: ''
    },
    {
      id: 10,
      date: '25-07-2025 08:30 PM',
      location: 'New Friends Colony',
      fullName: 'Dr Shweth',
      email: 'hansishweth12@gmail.com',
      phone: '9574423525',
      checkIn: '25/07/2025',
      checkOut: '21/08/2025',
      guests: '3 Guests',
      message: ''
    }
  ];

  const filteredData = enquiriesData.filter(item =>
    item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="w-full bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">Enquiries</h2>
      </div>

      {/* Controls */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Left side controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Show</span>
              <select 
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                className="border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span className="text-sm text-gray-600">entries</span>
            </div>

            {/* Date filters */}
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <span className="text-sm text-gray-600">From:</span>
              <div className="relative">
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="border border-gray-200 rounded px-3 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              <span className="text-sm text-gray-600">To:</span>
              <div className="relative">
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="border border-gray-200 rounded px-3 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search in Table"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-200 rounded px-3 py-2 pl-10 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Desktop Table with Custom Scrollbars */}
      <div className="hidden lg:block">
        <div 
          className="overflow-auto max-h-96"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none', 
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none; /* Safari and Chrome */
            }
          `}</style>
          <table className="w-full min-w-max">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap border-b border-gray-200">
                  S. No
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap border-b border-gray-200">
                  Enquiry Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap border-b border-gray-200">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap border-b border-gray-200">
                  Full Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap border-b border-gray-200">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap border-b border-gray-200">
                  Phone
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap border-b border-gray-200">
                  Check In
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap border-b border-gray-200">
                  Check Out
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap border-b border-gray-200">
                  Guests
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap border-b border-gray-200">
                  Message
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {currentData.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap font-medium">
                    {startIndex + index + 1}.
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-600 whitespace-nowrap">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-600 whitespace-nowrap">
                    {item.location}
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-600 whitespace-nowrap font-medium">
                    {item.fullName}
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-600 max-w-xs">
                    <div className="truncate" title={item.email}>
                      {item.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-600 whitespace-nowrap">
                    {item.phone}
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-600 whitespace-nowrap">
                    {item.checkIn}
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-600 whitespace-nowrap">
                    {item.checkOut}
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-600 whitespace-nowrap">
                    {item.guests}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                    <div className="truncate" title={item.message || '-'}>
                      {item.message || '-'}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden">
        {currentData.map((item, index) => (
          <div key={item.id} className="border-b border-gray-100 p-6">
            <div className="flex justify-between items-start mb-3">
              <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                #{startIndex + index + 1}
              </span>
              <span className="text-sm text-blue-600 font-medium">{item.date}</span>
            </div>
            
            <div className="space-y-3">
              <div>
                <span className="text-base font-semibold text-gray-900">{item.fullName}</span>
              </div>
              <div className="text-sm text-blue-600 font-medium">{item.location}</div>
              <div className="text-sm text-blue-600 break-all">{item.email}</div>
              <div className="text-sm text-blue-600 font-medium">{item.phone}</div>
              
              {(item.checkIn !== 'N/A' || item.checkOut !== 'N/A') && (
                <div className="flex flex-wrap gap-3 text-sm bg-gray-50 p-3 rounded">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600 font-medium">Check-in:</span>
                    <span className="text-blue-600">{item.checkIn}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600 font-medium">Check-out:</span>
                    <span className="text-blue-600">{item.checkOut}</span>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                  {item.guests}
                </span>
                {item.message && (
                  <span className="text-sm text-gray-600 truncate max-w-xs ml-3" title={item.message}>
                    {item.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-sm text-gray-600 font-medium">
            Showing <span className="font-semibold">{startIndex + 1}</span> to <span className="font-semibold">{Math.min(endIndex, filteredData.length)}</span> of <span className="font-semibold">{filteredData.length}</span> entries
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors font-medium"
            >
              Previous
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 text-sm border rounded-md font-medium transition-colors ${
                    currentPage === page 
                      ? 'bg-blue-500 text-white border-blue-500 shadow-sm' 
                      : 'border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors font-medium"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelhiTable;