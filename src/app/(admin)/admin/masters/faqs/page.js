"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Plus,
  Edit,
  Trash2,
  Search,
  Settings,
} from "lucide-react";
import FaqModal from "../../components/Faq/FaqModal";

export default function FAQAdminPanel() {
  const [openSections, setOpenSections] = useState({ faqList: true });
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [showMetaModal, setShowMetaModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingFAQ, setEditingFAQ] = useState(null);

  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "What is included in the rate?",
      answer:
        "Rentals include Cleaning, linen changes, Water, Cooking Gas, Wi-Fi Internet, TV, Power Backup, and all flat/society maintenance. Fully furnished with cooking utensils. Electricity may be charged separately. GST not included.",
      order: 1,
    },
    {
      id: 2,
      question: "What's the difference between Hotels & Olive Serviced Apartments?",
      answer:
        "Serviced apartments offer spacious, fully furnished homes with kitchens, dining, living areas, and personal amenities. Hotels typically don’t include these features.",
      order: 2,
    },
  ]);

  const [newFAQ, setNewFAQ] = useState({
    question: "",
    answer: "",
    order: faqs.length + 1,
  });

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSection = (id) =>
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleAddFAQ = () => {
    if (newFAQ.question.trim() && newFAQ.answer.trim()) {
      setFaqs([...faqs, { ...newFAQ, id: Date.now() }]);
      setNewFAQ({ question: "", answer: "", order: faqs.length + 2 });
      setShowAddModal(false);
    }
  };

  const handleEditFAQ = (faq) => {
    setEditingFAQ(faq);
    setNewFAQ({ ...faq });
    setShowAddModal(true);
  };

  const handleUpdateFAQ = () => {
    if (newFAQ.question.trim() && newFAQ.answer.trim()) {
      setFaqs(faqs.map((f) => (f.id === editingFAQ.id ? newFAQ : f)));
      setNewFAQ({ question: "", answer: "", order: faqs.length + 1 });
      setShowAddModal(false);
      setEditingFAQ(null);
    }
  };

  const handleDeleteFAQ = (id) => setFaqs(faqs.filter((faq) => faq.id !== id));

  const AccordionSection = ({ id, title, children, defaultOpen }) => {
    const isOpen = openSections[id] ?? defaultOpen;

    return (
      <div className="bg-green-100 rounded-lg mb-4 border border-green-200 shadow-sm">
        <button
          onClick={() => toggleSection(id)}
          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-green-150 transition-colors"
        >
          <span className="text-gray-800 font-medium text-lg">{title}</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>
        {isOpen && <div className="px-6 pb-6">{children}</div>}
      </div>
    );
  };

  return (
    <div className="min-h-screen  p-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">FAQs</h1>

      <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm">
            {/* Header Controls */}
            <div className="p-6 border-b border-gray-200 flex flex-wrap justify-between gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm">Show</label>
                <select
                  value={entriesPerPage}
                  onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                  className="px-2 py-1 border rounded border-gray-200"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                </select>
                <label className="text-sm">entries</label>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={searchTerm}
                  placeholder="Search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border rounded-lg border-gray-200"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowMetaModal(true)}
                  className="px-4 py-2 bg-[#5db64c] text-white rounded"
                >
                  <Settings className="w-4 h-4 inline mr-1" />
                  Meta Data
                </button>
                <button
                  onClick={() => {
                    setEditingFAQ(null);
                    setNewFAQ({ question: "", answer: "", order: faqs.length + 1 });
                    setShowAddModal(true);
                  }}
                  className="px-4 py-2 bg-[#5db64c] text-white rounded"
                >
                  <Plus className="w-4 h-4 inline mr-1" />
                  Add New
                </button>
              </div>
            </div>

            {/* FAQ Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs">S.No</th>
                    <th className="px-6 py-4 text-left text-xs">Question</th>
                    <th className="px-6 py-4 text-left text-xs">Answer</th>
                    <th className="px-6 py-4 text-left text-xs">Order</th>
                    <th className="px-6 py-4 text-left text-xs">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFAQs.slice(0, entriesPerPage).map((faq, idx) => (
                    <tr key={faq.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{idx + 1}</td>
                      <td className="px-6 py-4">{faq.question}</td>
                      <td className="px-6 py-4">
                        {faq.answer.length > 100
                          ? faq.answer.slice(0, 100) + "..."
                          : faq.answer}
                      </td>
                      <td className="px-6 py-4">{faq.order}</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button onClick={() => handleEditFAQ(faq)} className="text-blue-600">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDeleteFAQ(faq.id)} className="text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredFAQs.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No FAQs found.
                </div>
              )}
            </div>
          </div>
      </div>

      {/* FAQ Add/Edit Modal */}
      <FaqModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title={editingFAQ ? "Edit FAQ" : "Add FAQ"}
      >
        <div className="space-y-4">
          <input
            type="text"
            value={newFAQ.question}
            onChange={(e) => setNewFAQ({ ...newFAQ, question: e.target.value })}
            placeholder="Enter Question"
            className="w-full border border-gray-200 px-3 py-2 rounded"
          />
          <textarea
            rows={5}
            value={newFAQ.answer}
            onChange={(e) => setNewFAQ({ ...newFAQ, answer: e.target.value })}
            placeholder="Enter Answer"
            className="w-full border border-gray-200 px-3 py-2 rounded"
          />
          <input
            type="number"
            value={newFAQ.order}
            onChange={(e) => setNewFAQ({ ...newFAQ, order: parseInt(e.target.value) || 1 })}
            className="w-full border border-gray-200 px-3 py-2 rounded"
          />
          <div className="flex gap-3">
            <button
              onClick={editingFAQ ? handleUpdateFAQ : handleAddFAQ}
              className="px-4 py-2 bg-[#5db64c] text-white rounded"
            >
              {editingFAQ ? "Update" : "Add"}
            </button>
            <button
              onClick={() => setShowAddModal(false)}
              className="px-4 py-2 border border-gray-200 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </FaqModal>

      {/* Meta Data Modal */}
      <FaqModal
        isOpen={showMetaModal}
        onClose={() => setShowMetaModal(false)}
        title="Meta Data"
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Page Title"
            className="w-full border border-gray-200 px-3 py-2 rounded"
          />
          <textarea
            rows={3}
            placeholder="Meta Description"
            className="w-full border border-gray-200 px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Meta Keywords"
            className="w-full border border-gray-200 px-3 py-2 rounded"
          />
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-[#5db64c] text-white rounded">
              Save
            </button>
            <button
              onClick={() => setShowMetaModal(false)}
              className="px-4 py-2 border border-gray-200 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </FaqModal>
    </div>
  );
}
