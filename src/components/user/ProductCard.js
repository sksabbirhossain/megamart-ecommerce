import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/cart/addToCartSlice";
import createSlug from "../../utils/createSlug";
import { toast } from "react-hot-toast";

export const ProductCard = ({ product }) => {
  const { _id, picture, description, price, name, rating } = product || {};

  const dispatch = useDispatch();

  //create product slug
  const productSlug = createSlug(name);

  //add to cart
  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
    toast.success("Product Add To Cart")
  };

  return (
    <div className="max-w-[250px] h-[325px] border-gray-100 border rounded-md hover:shadow-lg duration-100 ease-linear">
      <Link to={`/product-details/${productSlug}/${_id}`}>
        <div className="pt-2">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/uploads/${picture}`}
            alt="product"
            className="w-full h-36 object-contain"
          />
        </div>
      </Link>
      <div className="p-2 space-y-2">
        <div className="flex justify-between pt-2 font-semibold text-base">
          <Link to={`/product-details/${productSlug}/${_id}`}>
            <h3>{name?.substring(0, 17)}</h3>
          </Link>
          <p>${price}</p>
        </div>
        <p className="font-normal text-sm">
          {description?.substring(1, 45)}...
        </p>
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
          <button
            className="bg-green-900 duration-100 ease-linear hover:bg-green-700 text-white/80 w-full rounded-md py-1"
            onClick={() => addToCartHandler(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
