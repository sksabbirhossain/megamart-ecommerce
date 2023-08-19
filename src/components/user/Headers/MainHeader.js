import React from "react";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaBus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openCart } from "../../../features/cart/cartOpenSlice";

export const MainHeader = () => {
  const dispatch = useDispatch();

  //cart open handler
  const cartOpenHandler = () => {
    dispatch(openCart(true));
  };
  return (
    <div className="w-full h-14 bg-gray-300 px-1 sm:px-0 sticky top-0 z-50">
      <div className="container mx-auto flex w-full h-full items-center justify-between space-x-3">
        <div className="md:min-w-[300px]">
          <Link to="/">
            <h1 className="text-2xl text-green-900 font-semibold">MegaMart</h1>
          </Link>
        </div>
        <form className="hidden sm:block sm:w-full">
          <div className="flex items-center bg-gray-200 rounded-md ring-1 ring-green-600/50">
            <input
              type="search"
              name="search"
              placeholder="Search Product..."
              className="bg-transparent px-2 py-2 focus:outline-none   sm:w-full"
            />
            <button type="submit" className="pr-2 text-lg text-green-900">
              <BsSearch />
            </button>
          </div>
        </form>
        <div className="flex items-center space-x-3">
          <Link to="/login" className="hidden sm:flex items-center  ">
            <span className="text-2xl text-green-800">
              <AiOutlineUser />
            </span>
            <span className="text-base font-medium">Account</span>
          </Link>

          <Link to="/login" className="hidden sm:flex items-center  ">
            <span className="text-1xl text-green-800">
              <FaBus />
            </span>
            <span className="text-base ml-1 font-medium">Oder</span>
          </Link>
          {/* search icon for small devices */}
          <button
            type="submit"
            className="pr-2 text-lg text-green-900 block sm:hidden"
          >
            <BsSearch />
          </button>
          <p
            className="flex items-center cursor-pointer select-none"
            onClick={cartOpenHandler}
          >
            <span className="text-2xl text-green-800">
              <AiOutlineShopping />
            </span>
            <span className="text-base font-medium">Cart</span>
          </p>
        </div>
      </div>
    </div>
  );
};
