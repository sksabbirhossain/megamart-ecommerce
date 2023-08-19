import React from "react";
import { toast } from "react-hot-toast";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaAccusoft, FaBus, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  selectUserAccessToken,
  selectUserInfo,
} from "../../../features/auth/userAuthSelectors";
import { userLoggedOut } from "../../../features/auth/userAuthSlice";
import { openCart } from "../../../features/cart/cartOpenSlice";
import { selectCartItems } from "../../../features/cart/cartSelectors";

export const MainHeader = () => {
  const cartItems = useSelector(selectCartItems);
  const userAccessToken = useSelector(selectUserAccessToken);
  const userInfo = useSelector(selectUserInfo);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //cart open handler
  const cartOpenHandler = () => {
    dispatch(openCart(true));
  };

  //user logout hanlder
  const logoutHandler = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("userAuth");
    toast.success("User LogOut SuccessFull");
    navigate("/login");
  };

  return (
    <div className="w-full h-14 bg-gray-300 px-1 sm:px-0 sticky top-0 z-40">
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
          {userAccessToken && userInfo?._id ? (
            <p
              className="cursor-pointer select-none flex"
              onClick={logoutHandler}
            >
              <span className="text-2xl text-green-800">
                <FaSignOutAlt />
              </span>
              <span className="text-base font-medium">LogOut</span>
            </p>
          ) : (
            <Link to="/login" className="hidden sm:flex items-center  ">
              <span className="text-3xl text-green-800">
                <AiOutlineUser />
              </span>
              <span className="text-base font-medium">Account</span>
            </Link>
          )}
          <Link to="/checkout" className="hidden sm:flex items-center  ">
            <span className="text-3xl text-green-800">
              <FaAccusoft />
            </span>
            <span className="text-base font-medium">CheckOut</span>
          </Link>
          <Link to="/my-oder" className="hidden sm:flex items-center  ">
            <span className="text-2xl text-green-800">
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
            <span className="text-3xl text-green-800 absolute">
              <AiOutlineShopping />
            </span>
            <p className="relative left-3 bottom-3 w-5 h-5 flex items-center justify-center bg-green-800 text-white rounded-full">
              <span>{cartItems.length > 0 ? cartItems.length : "0"}</span>
            </p>
            <span className="text-base font-medium ml-2">Cart</span>
          </p>
        </div>
      </div>
    </div>
  );
};
