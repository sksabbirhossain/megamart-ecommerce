import React from "react";

export const Button = ({ name, className, ...rest }) => {
  return (
    <button
      type="submit"
      className={`px-6 py-[5px] flex justify-center  rounded-md bg-[#28a745] text-white border-2 border-[#28a745] focus:ring-2 overflow-hidden hover:bg-green-600 ease-in duration-300 disabled:bg-green-600/70 ${className}`}
      {...rest}
    >
      {name}
    </button>
  );
};
