import React from "react";
import toast from "react-hot-toast";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  selectUserAccessToken,
  selectUserInfo,
} from "../../../features/auth/userAuthSelectors";
import { userLoggedOut } from "../../../features/auth/userAuthSlice";

export const MobileMenu = ({ mobileMenu, setMobileMenu }) => {
  const userAccessToken = useSelector(selectUserAccessToken);
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //user logout hanlder
  const logoutHandler = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("userAuth");
    toast.success("User LogOut SuccessFull");
    navigate("/login");
  };
  return (
    <aside
      className={`fixed top-0 -left-3 z-50 h-screen w-60  bg-white text-black transition-transform transform ${
        mobileMenu
          ? "translate-x-0 transition ease-in-out duration-1000"
          : "-translate-x-full"
      }`}
    >
      <div className="shadow-md">
        <div className="flex items-center justify-between p-3">
          <p className="text-xl">MegaMart</p>
          <button className="text-red-500" onClick={() => setMobileMenu(false)}>
            X
          </button>
        </div>
      </div>

      <div className=" space-x-3">
        {userAccessToken && userInfo?._id ? (
          <>
            <div className="items-center space-x-2 p-3 group hover:cursor-pointer flex">
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
              </div>
            </div>

            <div className="block space-y-2">
              <p>
                <Link
                  to="/checkout"
                  className=" hover:bg-orange-700/50 p-2 rounded-md ease-out duration-100"
                >
                  <span className="text-base font-medium">CheckOut</span>
                </Link>
              </p>

              <p>
                <Link
                  to="/my-order"
                  className=" hover:bg-orange-700/50 p-2 rounded-md ease-out duration-100"
                >
                  <span className="text-base font-medium ">My Orders</span>
                </Link>
              </p>

              <p
                className="pl-2 rounded-md ease-out duration-100"
                onClick={logoutHandler}
              >
                <span className="text-base font-medium "> Logout account</span>
              </p>
            </div>
          </>
        ) : (
          <div className="w-full p-3">
            <Link
              to="/login"
              className="flex items-center w-full hover:bg-orange-700/50 p-2 rounded-md ease-out duration-100"
            >
              <span className="text-2x pr-1">
                <AiOutlineUser />
              </span>
              <span className="text-base font-medium">Login</span>
            </Link>
            <Link
              to="/register"
              className="flex items-center w-full hover:bg-orange-700/50 p-2 rounded-md ease-out duration-100"
            >
              <span className="text-2x pr-1">
                <AiOutlineUser />
              </span>
              <span className="text-base font-medium whitespace-nowrap">
                Sign Up
              </span>
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
};
