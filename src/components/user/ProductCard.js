import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { id, image, description, price, title, rating } = product || {};
  console.log(rating);
  return (
    <div className="max-w-[250px] h-[325px] border-gray-100 border rounded-md ">
      <Link to={`/product-details/${id}`}>
        <div className="pt-2">
          <img
            src={image}
            alt="product"
            className="w-full h-36 object-contain"
          />
        </div>
      </Link>
      <div className="p-2 space-y-2">
        <div className="flex justify-between pt-2 font-semibold text-base">
          <Link to={`/product-details/${id}`}>
            <h3>{title.substring(1, 17)}</h3>
          </Link>
          <p>${price}</p>
        </div>
        <p className="font-normal text-sm">{description.substring(1, 45)}...</p>
        <p className="flex items-center text-green-700">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="text-slate-800 text-sm ml-1">({rating?.count})</span>
        </p>
        <div>
          <button className="bg-green-900 text-white/80 w-full rounded-md py-1">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
