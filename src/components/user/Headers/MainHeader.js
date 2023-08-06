import React from "react";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

export const MainHeader = () => {
  return (
    <div className="w-full h-14 bg-gray-100 px-1 sm:px-0">
      <div className="container mx-auto flex w-full h-full items-center justify-between">
        <div className="">
          <h1 className="text-2xl text-green-900 font-semibold">MegaMart</h1>
        </div>
        <div className="flex items-center space-x-3">
          <form action="" className="hidden sm:block">
            <div className="flex items-center bg-gray-200 rounded-md">
              <input
                type="search"
                name="search"
                placeholder="Search Product..."
                className="bg-transparent px-2 py-1 focus:outline-none"
              />
              <button type="submit" className="pr-2 text-lg text-green-900">
                <BsSearch />
              </button>
            </div>
          </form>
          <Link to="/login" className="hidden sm:flex items-center  ">
            <span className="text-2xl text-green-800">
              <AiOutlineUser />
            </span>
            <span className="text-base font-medium">Account</span>
          </Link>
          {/* search icon for small devices */}
          <button
            type="submit"
            className="pr-2 text-lg text-green-900 block sm:hidden"
          >
            <BsSearch />
          </button>
          <p className="flex items-center cursor-pointer select-none">
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
