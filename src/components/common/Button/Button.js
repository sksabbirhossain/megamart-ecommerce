import React from "react";

export const Button = ({ name, className, ...rest }) => {
  return (
    <button
      type="submit"
      className={`px-6 py-[5px] flex justify-center  rounded-md bg-[#28a745] text-white border-2 border-[#28a745] focus:ring-2 overflow-hidden hover:bg-green-700 ease-in duration-300 disabled:bg-gray-500 disabled:border-gray-500 disabled:text-gray-300 ${className}`}
      {...rest}
    >
      {name}
    </button>
  );
};
