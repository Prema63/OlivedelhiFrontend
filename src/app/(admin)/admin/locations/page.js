"use client";

import { useState } from "react";
import LocationModal from "../components/locations/LocationModal";
import ConfirmModal from "../global/ui/modals/ConfirmDeleteModal";
import TogglePill from "../global/ui/TogglePill";

// Import icons from react-icons
import { FiPlus as PlusIcon } from "react-icons/fi";
import {
  FiCamera as PhotoIcon,
  FiEdit as PencilIcon,
  FiTrash as TrashIcon,
} from "react-icons/fi";
import {
  FiChevronLeft as ChevronLeftIcon,
  FiChevronRight as ChevronRightIcon,
} from "react-icons/fi";

// Utility to strip HTML tags
const stripHtml = (html) => html?.replace(/<\/?[^>]+(>|$)/g, "");

// Sample Data
const initiallocations = [
  {
    _id: "1",
    title: "Luxury Suite",
    locationName: "Greater Kailash",
    shortDescription: "Beautiful luxury suite with modern amenities",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
    isActive: true,
    order: 1,
  },
  {
    _id: "2",
    title: "Deluxe location",
    locationName: "Green Park",
    shortDescription: "Comfortable deluxe location with garden view",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
    isActive: true,
    order: 2,
  },
  // ... add more locations if needed
];

export default function locations() {
  const [locations, setlocations] = useState(initiallocations);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isAddModal, setIsAddModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  // Toggle Active State
  const handleUpdateActiveStatus = (id, isActive) => {
    setlocations((prev) =>
      prev.map((location) =>
        location._id === id ? { ...location, isActive } : location
      )
    );
    alert("location status updated"); // Replace with toast
  };

  // Filter & Sort
  const filteredlocations = locations
    ?.filter(
      (location) =>
        location.title?.toLowerCase().includes(searchInput.toLowerCase()) ||
        location.locationName
          ?.toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        location.shortDescription
          ?.toLowerCase()
          .includes(searchInput.toLowerCase())
    )
    .sort((a, b) => a.order - b.order);

  const pageCount = Math.ceil(filteredlocations.length / pageSize);
  const paginatedlocations = filteredlocations.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  // CRUD Functions
  const addFunc = (newlocation) => {
    const location = {
      ...newlocation,
      _id: Date.now().toString(),
    };
    setlocations((prev) => [...prev, location]);
    setIsAddModal(false);
    alert("location added successfully");
  };

  const editFunc = (updatedlocation) => {
    setlocations((prev) =>
      prev.map((location) =>
        location._id === selectedItem._id
          ? { ...updatedlocation, _id: selectedItem._id }
          : location
      )
    );
    setIsEditModal(false);
    alert("location updated successfully");
  };

  const deleteFunc = () => {
    setlocations((prev) =>
      prev.filter((location) => location._id !== selectedItem._id)
    );
    setIsDeleteModal(false);
    alert("Location deleted successfully");
  };

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-6 lg:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Locations Management
          </h1>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                setSelectedItem(null);
                setIsAddModal(true);
              }}
              className="flex items-center justify-center bg-[#5db64c]  text-white px-4 py-2 rounded-lg text-sm transition-colors"
            >
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Location
            </button>
          </div>
        </div>

        {/* Search and Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search locations..."
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                setCurrentPage(0);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Show:</label>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(0);
              }}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    S. No.
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location Name
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Description
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Active
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                    Order
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedlocations.map((location, index) => (
                  <tr key={location._id} className="hover:bg-gray-50">
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                      {currentPage * pageSize + index + 1}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      {location.image ? (
                        <img
                          src={location.image}
                          alt={location.title}
                          className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-lg"
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/64x64?text=No+Image";
                          }}
                        />
                      ) : (
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                          <PhotoIcon className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-4 text-sm font-medium text-gray-900">
                      <div className="max-w-xs">
                        <div className="font-medium">{location.title}</div>
                        <div className="text-xs text-gray-500">
                          {location.locationName}
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-600 hidden md:table-cell">
                      <div className="max-w-xs truncate">
                        {stripHtml(location.shortDescription) || "No description"}
                      </div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      {/* Replace checkbox with TogglePill */}
                      <TogglePill
                        checked={location.isActive}
                        onChange={() =>
                          handleUpdateActiveStatus(location._id, !location.isActive)
                        }
                      />
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900 hidden sm:table-cell">
                      {location.order}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            setSelectedItem(location);
                            setIsEditModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-800 p-1"
                          title="Edit"
                        >
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedItem(location);
                            setIsDeleteModal(true);
                          }}
                          className="text-red-600 hover:text-red-800 p-1"
                          title="Delete"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {paginatedlocations.length === 0 && (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-3 py-8 text-center text-gray-500"
                    >
                      <div className="flex flex-col items-center">
                        <PhotoIcon className="w-12 h-12 text-gray-300 mb-2" />
                        <p>No locations found</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="flex items-center px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeftIcon className="w-4 h-4 mr-1" />
            Previous
          </button>

          <span className="text-sm text-gray-600">
            Showing {currentPage * pageSize + 1}-
            {Math.min((currentPage + 1) * pageSize, filteredlocations.length)} of{" "}
            {filteredlocations.length} results
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                prev < pageCount - 1 ? prev + 1 : prev
              )
            }
            disabled={currentPage >= pageCount - 1}
            className="flex items-center px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRightIcon className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Modals */}
      <LocationModal
        isOpen={isAddModal}
        onClose={() => setIsAddModal(false)}
        onSave={addFunc}
        type="Add"
      />

      <LocationModal
        isOpen={isEditModal}
        onClose={() => setIsEditModal(false)}
        onSave={editFunc}
        editItem={selectedItem}
        type="Edit"
      />

      <ConfirmModal
        isOpen={isDeleteModal}
        onClose={() => setIsDeleteModal(false)}
        onConfirm={deleteFunc}
        title="Delete location"
        message={`Are you sure you want to delete "${selectedItem?.title}"? This action cannot be undone.`}
      />
    </div>
  );
}
