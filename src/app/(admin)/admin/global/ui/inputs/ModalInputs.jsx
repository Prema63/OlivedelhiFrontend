"use client"

import React from "react";
import Select from "react-select";



export const ModalInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
  disabled = false,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5db64c] focus:border-[#5db64c] text-sm"
        required={required}
      />
    </div>
  );
};

export const TextArea = ({
  label,
  name,
  value,
  onChange,
  required = false,
  placeholder = "",
}) => {

  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5db64c] focus:border-[#5db64c] text-sm resize-none"
        rows={4}
      />
    </div>
  );
};

export const DateInput = ({
  label,
  name,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type="date"
        name={name}
        id={name}
        value={value ? new Date(value).toISOString().split("T")[0] : ""}
        onChange={(e) => onChange(name, new Date(e.target.value))}
        required={required}
        className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5db64c] focus:border-[#5db64c] text-sm"
      />
    </div>
  );
};

export const ReactSelectInput = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Select
        name={name}
        value={value}
        onChange={(selected) => onChange(name, selected?.value)}
        options={options}
        className="text-sm"
      />
    </div>
  );
};

export const NormalInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
  disabled = false,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5db64c] focus:border-[#5db64c] text-sm"
      />
    </div>
  );
};
