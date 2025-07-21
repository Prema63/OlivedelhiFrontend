"use client";
import { useEffect, useRef } from "react";

export default function Modal({
  children,
  setIsModal,
  modalStyles = {},
  overlayStyles = {},
}) {
  const modalRef = useRef();
  const overlayRef = useRef();

  const handleClose = () => {
    if (!modalRef.current || !overlayRef.current) return;
    modalRef.current.style.transform = "translate(-50%, -100%)";
    modalRef.current.style.opacity = "0";
    overlayRef.current.style.opacity = "0";
    setTimeout(() => {
      setIsModal(false);
    },);
  };

  // if (typeof setIsModal === "function") {
  //   setTimeout(() => {
  //     setIsModal(false);
  //   }, 3000);
  // }

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (!modalRef.current || !overlayRef.current) return;
      modalRef.current.style.transform = "translate(-50%, -50%)";
      modalRef.current.style.opacity = "1";
      overlayRef.current.style.opacity = "1";
    }, 0);

    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed w-screen scroll-y-auto h-screen bg-black/30 opacity-0 transition-opacity duration-300"
        style={overlayStyles}
      ></div>

      {/* Modal */}
      <div
        ref={modalRef}
        className="fixed left-1/2 scroll-y-auto pb-6 px-2 opacity-0 z-[1000] mt-9 -translate-y-1/2 bg-white shadow-md rounded-md transition-all duration-300 w-[90vw] max-w-[90vw] max-h-[90vh] overflow-hidden
        md:min-w-[600px]"
        style={modalStyles}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="fixed top-[-50px] right-[-50px] w-[100px] h-[100px] rounded-full bg-red-400 hover:bg-red-600 border-0 z-[1001] transition-all duration-300"
        >
          <div className="relative w-full h-full">
            <div className="absolute top-[70%] left-[30%] w-[20%] h-[3px] bg-white rounded transform -translate-x-1/2 -translate-y-1/2 rotate-45 transition-all duration-300" />
            <div className="absolute top-[70%] left-[30%] w-[20%] h-[3px] bg-white rounded transform -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-all duration-300" />
          </div>
        </button>

        {/* Modal Content */}
        {children}
      </div>
    </>
  );
}
