import React, { useState } from "react";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaAlignRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  selectUserAccessToken,
  selectUserInfo,
} from "../../../features/auth/userAuthSelectors";
import { openCart } from "../../../features/cart/cartOpenSlice";
import { selectCartItems } from "../../../features/cart/cartSelectors";
import { Menu } from "./Menu";
import { MobileMenu } from "./MobileMenu";

export const MainHeader = () => {
  const cartItems = useSelector(selectCartItems);
  const userAccessToken = useSelector(selectUserAccessToken);
  const userInfo = useSelector(selectUserInfo);
  const [searchValue, setSearchValue] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSerach, setMobileSearch] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //cart open handler
  const cartOpenHandler = () => {
    dispatch(openCart(true));
  };

  //search product handler
  const searchHeandler = (e) => {
    e.preventDefault();
    if (searchValue !== "") {
      setMobileSearch(false);
      navigate(`/search?search=${searchValue}`);
    }
  };

  return (
    <div className="w-full h-14 bg-[#f85606] text-gray-100  px-2 sm:px-0 sticky top-0 z-40 shadow-md shadow-gray-400 ">
      <div className="container mx-auto flex w-full h-full items-center justify-between space-x-3 relative">
        <div className="flex items-center space-x-3">
          {/* mobile left side menu */}
          <div
            className="sm:hidden block"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <FaAlignRight />
          </div>
          {/* mobile menu */}
          {mobileMenu && (
            <MobileMenu setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
          )}
          {/* logo area */}
          <div className="xl:min-w-[300px]">
            <Link to="/">
              <h1 className="text-2xl text-white font-semibold">MegaMart</h1>
            </Link>
          </div>
        </div>
        {/* search bar */}
        <form className="hidden sm:block sm:w-full" onSubmit={searchHeandler}>
          <div className="flex items-center  bg-gray-200 rounded-md ring-1 ring-emerald-800">
            <input
              type="search"
              name="search"
              value={searchValue}
              placeholder="Search Product..."
              className="bg-transparent text-black px-2 py-2 focus:outline-none sm:w-full"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" className="pr-3 text-lg text-[#f85606]">
              <BsSearch />
            </button>
          </div>
        </form>

        {/* right side */}
        <div className="flex items-center space-x-3 relative">
          {userAccessToken && userInfo?._id ? (
            <>
              <div className="items-center space-x-2 group hover:cursor-pointer hidden sm:flex">
                <div className="w-7 h-7 ">
                  <img
                    src={
                      userInfo?.profilePic !== null
                        ? userInfo.profilePic
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    }
                    alt="profile"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="whitespace-nowrap leading-4">
                  <p className="text-[12px]">
                    Hello,{userInfo.name.substring(0, 9)}
                  </p>
                  <p className="text-[13px] font-semibold capitalize select-none">
                    Orders & Accout
                  </p>
                </div>
                {/* user account menu */}
                <Menu />
              </div>

              <Link
                to="/checkout"
                className="hidden sm:flex items-center hover:bg-orange-700/50 p-2 rounded-md ease-out duration-100"
              >
                <span className="text-base font-medium mr-0 sm:mr-3">
                  CheckOut
                </span>
              </Link>
            </>
          ) : (
            <div className="hidden sm:flex items-center">
              <Link
                to="/login"
                className="flex hover:bg-orange-700/50 p-2 rounded-md ease-out duration-100"
              >
                <span className="text-2xl text-white pr-1">
                  <AiOutlineUser />
                </span>
                <span className="text-base font-medium">Login</span>
              </Link>
              <span className="px-1"> |</span>
              <Link
                to="/register"
                className=" hover:bg-orange-700/50 p-2 rounded-md ease-out duration-100"
              >
                <span className="text-base font-medium whitespace-nowrap">
                  Sign Up
                </span>
              </Link>
            </div>
          )}

          {/* search icon for small devices */}
          <button
            type="submit"
            className="pr-2 text-lg text-white block sm:hidden"
            onClick={() => setMobileSearch(!mobileSerach)}
          >
            <BsSearch />
          </button>

          {/* cart */}
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={cartOpenHandler}
          >
            <span className="text-4xl text-white sm:pb-1 absolute">
              <AiOutlineShopping />
            </span>
            <p className="relative left-1 bottom-4 w-5 h-5 flex items-center justify-center bg-gray-800 text-white rounded-full">
              <span>{cartItems.length > 0 ? cartItems.length : "0"}</span>
            </p>
          </div>
        </div>
      </div>
      {/* this form for mobile devices */}
      <div className={mobileSerach ? "block" : "hidden"}>
        <form
          className="sm:hidden block w-full absolute top-3 left-0"
          onSubmit={searchHeandler}
        >
          <div className="flex items-center bg-gray-200 rounded-md ring-1 ring-emerald-800 mx-2">
            <input
              type="search"
              name="search"
              value={searchValue}
              placeholder="Search Product..."
              className="bg-transparent text-black px-2 py-2 focus:outline-none"
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <button type="submit" className="pr-3 text-lg text-[#f85606]">
              <BsSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
