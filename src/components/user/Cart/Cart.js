import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const [isOpen, setIsopen] = useState(true);

  return (
    <div
      className={`fixed z-20 right-0 top-0 h-full w-5/6 sm:w-[350px] bg-white shadow-md transform transition-transform duration-300 overflow-y-auto
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* cart header */}
      <div className="my-1 flex justify-between shadow-md px-3 py-4 rounded-md">
        <p className="text-xl uppercase">Cart Items</p>
        <button
          className="text-xl text-red-500"
          onClick={() => setIsopen(false)}
        >
          X
        </button>
      </div>

      <div className="mx-2">
        <CartItem />
        <CartItem />
      </div>

      <div className=" m-3 flex justify-center shadow-md px-3 py-4 rounded-md">
        <Link to="/checkout">
          <button className="bg-green-800 text-white py-2 px-6 rounded-md">
            CheckOut
          </button>
        </Link>
      </div>
    </div>
  );
};
