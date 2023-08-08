import React from "react";
import { Link } from "react-router-dom";

export const CategoryCard = () => {
  return (
    <Link to="">
      <div className="max-w-[250px] w-full shadow-md border rounded-md p-3 hover:bg-gray-100 duration-100 ease-linear">
        <img
          src="https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg"
          alt="category"
          className="w-full h-full max-w-[250px] max-h-[250px] object-cover rounded-md"
        />
        <div className="mt-2">
          <h3 className="text-lg capitalize font-medium">Mobile phone</h3>
        </div>
      </div>
    </Link>
  );
};
