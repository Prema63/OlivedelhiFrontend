"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import sideformImage from '../../../../../public/assets/sideform.jpg';
import { url } from "../../lib/lib";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Sideform = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [formErrors, setFormError] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}`);
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      errors.phone = "Phone number must be exactly 10 digits";
    }

    if (Object.keys(errors).length) {
      setFormError(errors);
      return;
    }

    console.log("Form Submitted:", formData);
    const allData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      title: "Call Me Back",
    };

    setIsLoading(true);
    try {
      const response = await fetch(url + "user/callback-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Form submitted successfully:", result);
        toast.success("Your request has been submitted successfully!");
      } else {
        console.error("Error:", result);
        toast.error("Something went wrong. Please try again later.");
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
      });
      setFormError({});
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="w-full py-3 sticky top-8 z-10">
        {/* Contact Info Section */}
        <div className="mb-4 text-center text-gray-700">
          <p className="text-sm">
            You can also Email us -
            <a
              href={`mailto:${data?.email || "sales@olivedelhi.com"}`}
              className="text-[#587bff] font-bold hover:text-[#587bff] transition-colors"
            >
              {data?.email || "sales@olivedelhi.com"}
            </a>
          </p>
        </div>

        {/* TripAdvisor Image */}
        <div className="text-center  mt-6">
          <Image
            src={sideformImage}
            alt="Tripadvisor Traveller's Choice"
            width={150}
            height={100}
            className="mx-auto object-contain"
            priority={false}
          />
        </div>

        <div className="px-8">
          <div className="text-gray-700 pt-6 space-y-1">
            <p className="font-semibold">CORPORATE OFFICE</p>
            <p>Olive Service Apartments Delhi</p>
            <p>215-216, Rectangle One</p>
            <p>Saket District Centre,</p>
            <p>Saket, New Delhi – 110017</p>
            <p>Landmark: Across DLF Avenue Mall</p>
          </div>
        </div>

      </div>
    </>
  );

};

export default Sideform;