import { useState } from "react";
import Modal from "./Modal";

export default function ConfirmModal({
  setIsModal,
  onConfirm,
  heading,
  modalHeading = "Confirm Deletion",
}) {
    // if (!isOpen) return null;

  const [modal, setModal] = useState(true);

  return (
    <>
      <Modal
        setIsModal={setIsModal}
        modal={modal}
        modalStyles={{
          width: "400px",
          minWidth: "auto",
          top: "80%",
          zIndex: 20000,
        }}
        overlayStyles={{ zIndex: 3000 }}
      >
        <h2 className = "text-lg mt-2  h-40 ">{modalHeading}</h2>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between p-4 text-gray-500 sm:text-base text-[.7rem]">
          <div className="flex gap-4 justify-end flex-grow mt-28 ml-60">
            <button
              type="button"
              className="p-2 bg-gray-200 text-gray-400 font-bold rounded-md hover:bg-gray-400 hover:text-gray-200 border-0 transition-all duration-300"
              onClick={() => setModal(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="p-2 bg-red-100 text-red-400 border-0 hover:text-white font-bold rounded-md hover:bg-red-400 transiton-all duration-300"
              onClick={() => {
                onConfirm();
                setModal(false);
              }}
            >
              Yes
            </button>
          </div>
        </div>

      </Modal>
    </>
  );
}



// import Modal from "./Modal";

// export default function ConfirmModal({
//   isOpen,
//   onClose,
//   onConfirm,
//   title = "Confirm Deletion",
//   message = "Are you sure you want to delete this item?",
// }) {
//   if (!isOpen) return null;

//   return (
//     <Modal isOpen={isOpen} onClose={onClose} title={title}>
//       <div className="p-4">
//         <p className="text-gray-600 text-sm">{message}</p>
//         <div className="flex justify-end gap-3 mt-6">
//           <button
//             type="button"
//             className="px-4 py-2 bg-gray-200 text-gray-600 font-semibold rounded-md hover:bg-gray-300 transition-all"
//             onClick={onClose}
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-all"
//             onClick={() => {
//               onConfirm();
//               onClose();
//             }}
//           >
//             Yes, Delete
//           </button>
//         </div>
//       </div>
//     </Modal>
//   );
// }
