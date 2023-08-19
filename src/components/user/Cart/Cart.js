import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartOpen } from "../../../features/cart/cartOpenSelector";
import { openCart } from "../../../features/cart/cartOpenSlice";
import { selectCartItems } from "../../../features/cart/cartSelectors";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const cartIsOpen = useSelector(selectCartOpen);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  //deside
  let content;
  if (cartItems?.length === 0) content = <>Cart Is Empty!</>;
  if (cartItems?.length > 0)
    content = cartItems?.map((item) => <CartItem key={item._id} item={item} />);

  return (
    <div
      className={`fixed z-50 right-0 top-0 h-full w-5/6 sm:w-[350px] bg-white shadow-md transform transition-transform duration-300 overflow-y-auto
    ${cartIsOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* cart header */}
      <div className="my-1 flex justify-between shadow-md px-3 py-4 rounded-md">
        <p className="text-xl uppercase">Cart Items</p>
        <button
          className="text-xl text-red-500"
          onClick={() => dispatch(openCart(false))}
        >
          X
        </button>
      </div>

      <div className="mx-2">{content}</div>

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
