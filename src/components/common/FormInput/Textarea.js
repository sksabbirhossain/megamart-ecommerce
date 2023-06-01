import React from "react";

export const Textarea = ({ label, name, placeholder, className, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor="email" className="text-lg font-normal">
        {label}
      </label>
      <textarea
        rows="5"
        name={name}
        placeholder={placeholder}
        className={`py-2 px-1 mt-1 w-full rounded-md border-2 border-gray-200 focus:outline-green-600 ${className}`}
        {...rest}
      ></textarea>
    </div>
  );
};
