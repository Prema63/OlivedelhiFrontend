"use client";
import { useState, useEffect } from "react";
import Modal from "../../global/ui/modals/Modal";
import TogglePill from "../../global/ui/TogglePill";


export default function LocationModal({
  isOpen,
  onClose,
  onSave,
  editItem,
  type,
}) {
  const [formData, setFormData] = useState({
    title: "",
    locationName: "",
    shortDescription: "",
    order: 1,
    isActive: true,
    image: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (editItem && type === "Edit") {
        setFormData({
          title: editItem.title || "",
          locationName: editItem.locationName || "",
          shortDescription: editItem.shortDescription || "",
          order: editItem.order || 1,
          isActive: editItem.isActive ?? true,
          image: editItem.image || "",
        });
        setImagePreview(editItem.image || "");
      } else {
        setFormData({
          title: "",
          locationName: "",
          shortDescription: "",
          order: 1,
          isActive: true,
          image: "",
        });
        setImagePreview("");
        setImageFile(null);
      }
    }
  }, [isOpen, editItem, type]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      image: imagePreview || formData.image,
    };
    onSave(submitData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`${type} Room`}>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        {/* Location Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Location Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location Name *
          </label>
          <input
            type="text"
            name="locationName"
            value={formData.locationName}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Location Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Short Description
          </label>
          <textarea
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-2 w-20 h-20 object-cover rounded-md"
            />
          )}
        </div>

        {/* Order Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Order
          </label>
          <input
            type="number"
            name="order"
            value={formData.order}
            onChange={handleInputChange}
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Active Toggle */}
        <div className="flex items-center gap-3">
          <TogglePill
            name="isActive"
            checked={formData.isActive}
            onChange={(checked) =>
              setFormData((prev) => ({ ...prev, isActive: checked }))
            }
          />
          <label className="text-sm text-gray-700">Active</label>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-[#5db64c]  text-white py-2 px-4 rounded-md"
          >
            Save Location
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
