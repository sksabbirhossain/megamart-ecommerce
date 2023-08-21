import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItems } from "../../../features/cart/cartSelectors";

export const CheckOutTotal = () => {
  const cartItems = useSelector(selectCartItems);

  const dalevaryCharge = 0;

  //subtotal calcutation
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  //total price
  const totalPrice = subtotal + dalevaryCharge;

  return (
    <div className="shadow-md rounded-md p-3">
      <div className="shadow py-3 rounded-md px-1">
        <h3 className="text-xl"> Order Summary</h3>
      </div>
      <div className="px-1 py-2">
        <div className="flex justify-between py-2">
          <p>SubTotal:</p> <p>${subtotal}</p>
        </div>
        <div className="flex justify-between py-2">
          <p>Dalevary Charge:</p> <p>${dalevaryCharge}</p>
        </div>

        <div className="flex flex-col  py-2">
          <p className="border"></p>
          <p className="flex justify-between">
            Total:<span>${totalPrice}</span>{" "}
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <Link to="/order">
            <button className="px-6 py-2 rounded-md text-white bg-green-700">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
