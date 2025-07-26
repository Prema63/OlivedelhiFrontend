import { useState, useEffect } from "react";
import Modal from "../../global/ui/modals/Modal";
import { validate } from "../../global/utils/ValidateForms";
import { toast } from "react-toastify";
import { NormalInput, TextArea } from "../../global/ui/inputs/ModalInputs";

export default function MetaDataModal({
  saveFunc,
  setIsModal,
  editItem = {},
  type = "",
}) {
  const [modal, setModal] = useState(true);
  const [formData, setFormData] = useState({
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    pageTitle: "",
    pageContent: "",
  });

  const handleSave = (e) => {
    e.preventDefault();
    const verify = validate(formData, requiredFields);
    if (!verify.success) return toast.error(verify.message);
    const newData = {
      ...editItem,
      ...formData,
    };
    saveFunc(newData);
    setIsModal(false);
  };

  const putValues = () => {
    setFormData(editItem);
  };

  const handleSetValue = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    putValues();
  }, []);

  return (
    <Modal
      setIsModal={setIsModal}
      modal={modal}
      modalStyles={{ width: "90vw" }}
    >
      {/* <h2>Edit Meta Data </h2> */}

      <div className="max-h-[80vh] mb-44 overflow-y-auto">
        <form
          onSubmit={handleSave}
          className="flex flex-col gap-6 p-4 sm:p-8 md:text-[14px] text-[12px] text-gray-600 w-full"
        >
          <h4>Meta Data</h4>
          <NormalInput
            label="Meta Title"
            type="text"
            value={formData?.metaTitle}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                metaTitle: e.target.value,
              }))
            }
          />
          <TextArea
            label="Meta Description"
            rows={2}
            value={formData?.metaDescription}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                metaDescription: e.target.value,
              }))
            }
          />
          <TextArea
            label="Meta Keywords (separate each with a comma)"
            rows={2}
            value={formData?.metaKeywords}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                metaKeywords: e.target.value,
              }))
            }
          />

          {type === "ROOM" && (
            <>
              <hr />
              <h3>Rooms Page Content </h3>
              <NormalInput
                label="Title"
                type="text"
                value={formData?.pageTitle}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    pageTitle: e.target.value,
                  }))
                }
              />

              <TiptapEditor
                label="Content"
                value={formData?.pageContent || ""}
                onChange={(name, html) =>
                  setFormData((prev) => ({
                    ...prev,
                    [name]: html,
                  }))
                }
              />
            </>
          )}

          <div className="flex w-[250px] m-auto items-center">
            <button
              type="submit"
              className="p-2 mt-2 bg-blue-500 text  text-white font-bold hover:scale-105 rounded-md transition-all duration-300 flex-1 w-[250px]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

const requiredFields = [
  {
    key: "metaTitle",
    name: "Meta Title",
  },
];
