import React from "react";

export const SelectBox = ({ label, name, children, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor="brand" className="text-lg font-normal">
        {label}
      </label>
      <select
        name={name}
        className="py-2 px-1 mt-1 w-full rounded-md border-2 border-gray-200 focus:outline-green-600"
        {...rest}
      >
        {children}
      </select>
    </div>
  );
};
