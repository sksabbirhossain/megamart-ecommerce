import React from "react";
import { Link } from "react-router-dom";

export const CartItem = ({ item }) => {
  const { _id, name, picture, quantity, price } = item || {};

  //remove cart item handler
  const removeCartItemHandler = (id) => {
    alert(id);
  };
  return (
    <div className="flex shadow-md p-1 mb-1">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link to="/">{name}</Link>
            </h3>
            <p className="ml-4">${price}</p>
          </div>
          {/* <p className="mt-1 text-sm text-gray-500">Salmon</p> */}
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {quantity}</p>

          <div className="flex" onClick={() => removeCartItemHandler(_id)}>
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
