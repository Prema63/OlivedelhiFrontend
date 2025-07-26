"use client";

import { useRef, useEffect } from "react";

export default function FaqModal({ isOpen, onClose, title, children, overlayStyles }) {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current && overlayRef.current) {
      // Animate in (center position + fade in)
      requestAnimationFrame(() => {
        modalRef.current.style.opacity = "1";
        modalRef.current.style.transform = "translate(-50%, -50%)";
        overlayRef.current.style.opacity = "1";
      });
    }
  }, [isOpen]);

  const handleClose = () => {
    if (!modalRef.current || !overlayRef.current) return;
    // Slide up & fade out
    modalRef.current.style.transform = "translate(-50%, -60%)";
    modalRef.current.style.opacity = "0";
    overlayRef.current.style.opacity = "0";
    setTimeout(() => {
      onClose();
    }, 300); // Wait for animation
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 transition-opacity duration-300 z-40"
        style={overlayStyles}
        onClick={handleClose} // Close on outside click
      ></div>

      {/* Modal */}
      <div
        ref={modalRef}
        className="fixed left-1/2 top-1/2 opacity-0 z-50  bg-white shadow-md rounded-md transition-all duration-300 w-[90vw] max-w-[90vw] max-h-[90vh] overflow-hidden md:min-w-[600px] pb-6 px-2"
        style={{ transform: "translate(-50%, -60%)" }} // Initial position (slightly above)
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-10 -right-10 w-[100px] h-[100px] rounded-full bg-red-400 hover:bg-red-600 flex items-center justify-center z-[60] transition-all duration-300"
        >
          <div className="relative w-6 h-6 ">
            <div className="absolute  top-1/2  left-1/2 w-full h-[3px] bg-white rounded transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <div className="absolute top-1/2 left-1/2 w-full h-[3px] bg-white rounded transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
          </div>
        </button>

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">{children}</div>
      </div>
    </>
  );
}
