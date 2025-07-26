"use client"
import React, { useState } from 'react';
import { Bold, Italic, Link, Image, Table, Quote, List, AlignLeft, AlignCenter, AlignRight, Save, Plus, Trash2 } from 'lucide-react';
import { ModalInput, TextArea } from '../../global/ui/inputs/ModalInputs';

export default function AboutUsAdminPanel() {
  const [formData, setFormData] = useState({
    metaTitle: 'About Us - Olive Service Apartments Delhi',
    metaDescription: 'About Us - Olive Serviced Apartments, award-winning Service Apartments in Delhi. Fully Furnished Short Stay Rentals Flats in South Delhi',
    metaKeywords: '',
    phone: '(+91) 7290029000',
    email: 'sales@olivedelhi.com',
    add: `Olive Service Apartments Delhi
215-216, Rectangle One
Saket District Centre,
Saket, New Delhi – 110017
Landmark: Across DLF Avenue Mall`
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async () => {
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Contact Information content updated successfully!');
      setIsSubmitting(false);
    }, 1500);
  };

  const ToolbarButton = ({ icon: Icon, onClick, title }) => (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded transition-colors"
    >
      <Icon size={16} />
    </button>
  );

  return (
    <div className="min-h-screen  py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-3">Contact Informataion</h1>

        <div className="bg-white rounded-lg shadow-sm">
          {/* Header */}

          <div className="p-6 space-y-8">
            {/* Meta Data */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Meta Data</h2>

              <div className="space-y-6">
                <ModalInput
                  label="Meta Title"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleInputChange}
                  placeholder="Enter meta title"
                />

                <TextArea
                  label="Meta Description"
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleInputChange}
                  placeholder="Enter meta description"
                  rows={3}
                />

                <TextArea
                  label="Meta Keywords (separate each with a comma)"
                  name="metaKeywords"
                  value={formData.metaKeywords}
                  onChange={handleInputChange}
                  placeholder="keyword1, keyword2, keyword3..."
                  rows={4}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Contact Detail</h2>

              <div className="space-y-6">
                <ModalInput
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone"
                />
                <ModalInput
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email"
                />

                {/* Content  */}
                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Address
                  </label>

                  {/* Toolbar */}
                  <div className="border border-gray-300 rounded-t-md bg-white px-3 py-2 flex flex-wrap gap-1 border-b-0">
                    <select className="text-sm border-0 focus:outline-none bg-transparent mr-2">
                      <option>Paragraph</option>
                      <option>Heading 1</option>
                      <option>Heading 2</option>
                      <option>Heading 3</option>
                    </select>

                    <div className="flex flex-wrap gap-1">
                      <ToolbarButton icon={Bold} title="Bold" />
                      <ToolbarButton icon={Italic} title="Italic" />
                      <ToolbarButton icon={Link} title="Insert Link" />
                      <ToolbarButton icon={Image} title="Insert Image" />
                      <ToolbarButton icon={Table} title="Insert Table" />
                      <ToolbarButton icon={Quote} title="Quote" />
                      <ToolbarButton icon={List} title="Bullet List" />
                      <ToolbarButton icon={List} title="Numbered List" />
                      <ToolbarButton icon={AlignLeft} title="Align Left" />
                      <ToolbarButton icon={AlignCenter} title="Align Center" />
                      <ToolbarButton icon={AlignRight} title="Align Right" />
                    </div>
                  </div>

                  <textarea
                    name="Address"
                    value={formData.add}
                    onChange={handleInputChange}
                    className="w-full px-3 py-4 border border-gray-300 rounded-b-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5db64c] focus:border-[#5db64c] text-sm resize-vertical border-t-0"
                    placeholder="Enter your content here..."
                    rows={12}
                  />
                </div>
              </div>
            </div>




            {/* Submit Button */}
            <div className="flex justify-end pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#5db64c] hover:bg-[#4a9a3b] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}