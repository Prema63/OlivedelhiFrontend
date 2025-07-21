"use client";

import { useState, useEffect } from "react";
import Modal from "../modals/Modal";
import { toast } from "react-toastify";
// import { NormalInput, TextArea } from "../../global/ui/inputs/ModalInputs";
import { NormalInput, TextArea } from "../inputs/ModalInputs";
// import TextEditor from "../../global/ui/inputs/TextEditor"; 
import TipTapEditor from "../inputs/TipTapEditor";

export default function MetaDataModal({
  saveFunc,
  setIsModal,
  editItem = {},
  type = "",
}) {
  const [formData, setFormData] = useState({
    title: editItem?.title || "",
    description: editItem?.description || "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    if (!formData.title || !formData.description) {
      toast.error("Please fill all fields");
      return;
    }

    saveFunc(formData);
    setIsModal(false);
  };

  return (
    <Modal title="Edit Meta Data" onClose={() => setIsModal(false)} onSave={handleSave}>
      <NormalInput
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <TipTapEditor
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        rows={8}
      />
    </Modal>
  );
}
