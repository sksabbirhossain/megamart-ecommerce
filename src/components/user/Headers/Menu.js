import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLoggedOut } from "../../../features/auth/userAuthSlice";

export const Menu = () => {
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
    <div className="absolute top-9 left-0 max-w-[300px] w-full hidden group-hover:block bg-red-100 text-gray-800 rounded-md px-3 py-2 space-y-1">
      <Link to="/my-order">
        <span className="text-[13px] font-medium hover:font-semibold capitalize duration-150 ease-out">
          My Oders
        </span>
      </Link>
      <p
        className="text-[13px] font-semibold capitalize hover:underline cursor-pointer select-none"
        onClick={logoutHandler}
      >
        Logout account
      </p>
    </div>
  );
};
