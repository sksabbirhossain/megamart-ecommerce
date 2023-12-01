import React from "react";
import { Link } from "react-router-dom";

export const CategoryCard = ({ category }) => {
  const { _id, name, picture } = category || {};

  return (
    <Link to={`/${name}/${_id}`}>
      <div className="max-w-[250px] w-full text-center shadow-md border rounded-md p-3 hover:bg-gray-100 hover:text-orange-600 duration-100 ease-linear">
        <img
          src={picture}
          alt="category"
          className="w-[200px] h-[120px] mx-auto object-cover rounded-md"
        />
        <div className="mt-2">
          <h3 className="text-lg capitalize font-medium">{name}</h3>
        </div>
      </div>
    </Link>
  );
};
