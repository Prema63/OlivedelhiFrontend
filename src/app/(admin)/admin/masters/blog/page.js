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

export default function blogAdminPanel() {
  const [openSections, setOpenSections] = useState({ blogList: true });
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingblog, setEditingblog] = useState(null);

  const [blogs, setblogs] = useState([
    {
      id: 1,
      title: "What is included in the rate?",
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", 
      answer:
        "Rentals include Cleaning, linen changes, Water, Cooking Gas, Wi-Fi Internet, TV, Power Backup, and all flat/society maintenance. Fully furnished with cooking utensils. Electricity may be charged separately. GST not included.",
      order: 1,
    },
    {
      id: 2,
      title: "What's the difference between Hotels & Olive Serviced Apartments?",
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", // Added image field
      answer:
        "Serviced apartments offer spacious, fully furnished homes with kitchens, dining, living areas, and personal amenities. Hotels typically don't include these features.",
      order: 2,
    },
  ]);

  const [newblog, setNewblog] = useState({
    title: "",
    image: "",
    answer: "",
    order: blogs.length + 1,
  });

  const filteredblogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSection = (id) =>
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleAddblog = () => {
    if (newblog.title.trim() && newblog.answer.trim()) {
      setblogs([...blogs, { ...newblog, id: Date.now() }]);
      setNewblog({ title: "", image: "", answer: "", order: blogs.length + 2 });
      setShowAddModal(false);
    }
  };

  const handleEditblog = (blog) => {
    setEditingblog(blog);
    setNewblog({ ...blog });
    setShowAddModal(true);
  };

  const handleUpdateblog = () => {
    if (newblog.title.trim() && newblog.answer.trim()) {
      setblogs(blogs.map((f) => (f.id === editingblog.id ? newblog : f)));
      setNewblog({ title: "", image: "", answer: "", order: blogs.length + 1 });
      setShowAddModal(false);
      setEditingblog(null);
    }
  };

  const handleDeleteblog = (id) => setblogs(blogs.filter((blog) => blog.id !== id));

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
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>

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
                  onClick={() => {
                    setEditingblog(null);
                    setNewblog({ title: "", image: "", answer: "", order: blogs.length + 1 });
                    setShowAddModal(true);
                  }}
                  className="px-4 py-2 bg-[#5db64c] text-white rounded"
                >
                  <Plus className="w-4 h-4 inline mr-1" />
                  Add New
                </button>
              </div>
            </div>

            {/* blog Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs">S.No</th>
                    <th className="px-6 py-4 text-left text-xs">Image</th>
                    <th className="px-6 py-4 text-left text-xs">Title</th>
                    <th className="px-6 py-4 text-left text-xs">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredblogs.slice(0, entriesPerPage).map((blog, idx) => (
                    <tr key={blog.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{idx + 1}</td>
                      <td className="px-6 py-4">
                        <img 
                          src={blog.image || "https://via.placeholder.com/50x50"} 
                          alt="blog Image" 
                          className="w-12 h-12 object-cover rounded"
                        />
                      </td>
                      <td className="px-6 py-4">{blog.title}</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button onClick={() => handleEditblog(blog)} className="text-blue-600">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDeleteblog(blog.id)} className="text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredblogs.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No blogs found.
                </div>
              )}
            </div>
          </div>
      </div>

      {/* blog Add/Edit Modal */}
      <FaqModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title={editingblog ? "Edit blog" : "Add blog"}
      >
        <div className="space-y-4">
          <input
            type="text"
            value={newblog.title}
            onChange={(e) => setNewblog({ ...newblog, title: e.target.value })}
            placeholder="Enter Title"
            className="w-full border border-gray-200 px-3 py-2 rounded"
          />
          <input
            type="text"
            value={newblog.image}
            onChange={(e) => setNewblog({ ...newblog, image: e.target.value })}
            placeholder="Enter Image URL"
            className="w-full border border-gray-200 px-3 py-2 rounded"
          />
          <textarea
            rows={5}
            value={newblog.answer}
            onChange={(e) => setNewblog({ ...newblog, answer: e.target.value })}
            placeholder="Enter Answer"
            className="w-full border border-gray-200 px-3 py-2 rounded"
          />
          <input
            type="number"
            value={newblog.order}
            onChange={(e) => setNewblog({ ...newblog, order: parseInt(e.target.value) || 1 })}
            className="w-full border border-gray-200 px-3 py-2 rounded"
          />
          <div className="flex gap-3">
            <button
              onClick={editingblog ? handleUpdateblog : handleAddblog}
              className="px-4 py-2 bg-[#5db64c] text-white rounded"
            >
              {editingblog ? "Update" : "Add"}
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
    </div>
  );
}