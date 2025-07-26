"use client"
import React, { useState } from 'react';
import { Bold, Italic, Link, Image, Table, Quote, List, AlignLeft, AlignCenter, AlignRight, Save, Plus, Trash2 } from 'lucide-react';
import { ModalInput, TextArea } from '../../global/ui/inputs/ModalInputs';

export default function AboutUsAdminPanel() {
  const [formData, setFormData] = useState({
    metaTitle: 'About Us - Olive Service Apartments Delhi',
    metaDescription: 'About Us - Olive Serviced Apartments, award-winning Service Apartments in Delhi. Fully Furnished Short Stay Rentals Flats in South Delhi',
    metaKeywords: '',
    title: 'About Us @ Olive Service Apartments Delhi',
    subtitle: 'This is subtitle',
    content: `Olive Service Apartments in Delhi is a multiple award-winning chain of self-catered Fully Furnished & Serviced Apartments, we are considered a leader in the Industry having one of the largest room inventory of fully serviced accommodations in Delhi NCR, Jaipur, Hyderabad, Bangalore, Kolkata & Goa.

Through this website, we market our mix of stand-alone and grouped short-term rental properties spread across Delhi (South & Central) as well as nearby Gurgaon & Noida. These fully furnished properties offer private, independent residential units with Living Rooms and individual furnished Kitchens – much bigger than equivalent hotel rooms.

All Serviced Apartments listed on our website are directly operated and managed by our team, we also have rooms that are managed by us on a Management Contract thereby ensuring the same, consistent hospitality standards of Olive Service apartments across all our properties. Our Service apartments in Delhi are selected after careful inspection by our team who also ensure that they follow the Olive best practices of operations and are audited periodically for its adherence. This has resulted in various brand recognition awards including the Certificate of Excellence on Tripadvisor and other Online Travel Agencies (OTAs) as well as significant media coverage for Best Service Apartments in Delhi.

Our primary business model is short-stay rentals (weekly/monthly) of Serviced apartments where the property is leased out to guests by way of short-term rental contracts, we also have some corporate guest houses that offer rooms by the day & week providing hotel-like facilities in spacious suites for Corporates as well as Vacation Rentals Holiday Homes for leisure travellers.`
  });

    const [pricingListings, setPricingListings] = useState([
    {
      id: 1,
      title: 'Studio Apartments (300 sq ft)',
      layout: 'Layout: Bedroom + Bathroom + Living Room with individual Kitchenette',
      pricing: 'Pricing (Upto 2 Adults): Starting From Rs 3,950/Day',
      order: 1
    }
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePricingListingChange = (id, field, value) => {
    setPricingListings(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

   const removePricingListing = (id) => {
    setPricingListings(prev => prev.filter(item => item.id !== id));
  };


const addPricingListing = () => {
  let maxId = 0;
  let maxOrder = 0;

  pricingListings.forEach(item => {
    if (item.id > maxId) maxId = item.id;
    if (item.order > maxOrder) maxOrder = item.order;
  });

  const newId = maxId + 1;
  const newOrder = maxOrder + 1;

  setPricingListings(prev => [
    ...prev,
    {
      id: newId,
      title: '',
      layout: '',
      pricing: '',
      order: newOrder
    }
  ]);
};


  const handleSubmit = async () => {
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Pricing content updated successfully!');
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
        <h1 className="text-2xl font-semibold text-gray-900 mb-3">Pricing</h1>

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

            {/* Pricing Content Section */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Pricing Content</h2>

              <div className="space-y-6">
                <ModalInput
                  label="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter page title"
                />
                <ModalInput
                  label="Sub Title"
                  name="Sub title"
                  value={formData.subtitle}
                  onChange={handleInputChange}
                  placeholder="Enter page Subtitle"
                />

                {/* Content with Rich Text Editor */}
                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Content
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
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    className="w-full px-3 py-4 border border-gray-300 rounded-b-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5db64c] focus:border-[#5db64c] text-sm resize-vertical border-t-0"
                    placeholder="Enter your content here..."
                    rows={12}
                  />
                </div>
              </div>
            </div>

            
            {/* Pricing Listing Section */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-900">Pricing Listing</h2>
                <button
                  type="button"
                  onClick={addPricingListing}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#5db64c] hover:bg-[#4a9a3b] transition-colors"
                >
                  <Plus size={16} className="mr-1" />
                  Add
                </button>
              </div>

              <div className="space-y-6">
                {pricingListings.map((listing) => (
                  <div key={listing.id} className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex justify-end mb-4">
                      <button
                        type="button"
                        onClick={() => removePricingListing(listing.id)}
                        className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors"
                        title="Remove listing"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="space-y-4">
                      <ModalInput
                        label="Title"
                        value={listing.title}
                        onChange={(e) => handlePricingListingChange(listing.id, 'title', e.target.value)}
                        placeholder="e.g., Studio Apartments (300 sq ft)"
                      />

                      <TextArea
                        label="Layout"
                        value={listing.layout}
                        onChange={(e) => handlePricingListingChange(listing.id, 'layout', e.target.value)}
                        placeholder="e.g., Layout: Bedroom + Bathroom + Living Room with individual Kitchenette"
                        rows={3}
                      />

                      <TextArea
                        label="Pricing"
                        value={listing.pricing}
                        onChange={(e) => handlePricingListingChange(listing.id, 'pricing', e.target.value)}
                        placeholder="e.g., Pricing (Upto 2 Adults): Starting From Rs 3,950/Day"
                        rows={2}
                      />

                      <ModalInput
                        label="Order"
                        value={listing.order}
                        onChange={(e) => handlePricingListingChange(listing.id, 'order', parseInt(e.target.value) || 0)}
                        placeholder="Enter display order"
                        type="number"
                      />
                    </div>
                  </div>
                ))}

                {pricingListings.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No pricing listings added yet. Click "Add" to create your first listing.
                  </div>
                )}
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