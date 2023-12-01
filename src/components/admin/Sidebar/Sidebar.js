import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { DiAptana } from "react-icons/di";
import {
  FaCartPlus,
  FaChartBar,
  FaMapMarked,
  FaRegPaperPlane,
  FaSignInAlt,
  FaUserFriends,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { adminLoggedOut } from "../../../features/auth/authSlice";

export const Sidebar = () => {
  const [brandDropDown, setBrandDropDown] = useState(false);
  const [categoryDropDown, setCategoryDropDown] = useState(false);
  const [productDropDown, setProductDropDown] = useState(false);

  const { sidebarMenu } = useSelector((state) => state.sidebarMenu);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //logout admin
  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    dispatch(adminLoggedOut());
    toast.success("Logout SuccessFull");
    navigate("/admin");
  };

  return (
    <>
      <aside
        className={`fixed top-16 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarMenu ? "" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/admin/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-200 "
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => setBrandDropDown(!brandDropDown)}
                type="button"
                className="flex items-center w-full p-2 text-gray-900 transition ease-in duration-75 rounded-lg group hover:bg-gray-200"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Brands
                </span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                className={
                  brandDropDown
                    ? "block py-1 space-y-1"
                    : "hidden py-1 space-y-1"
                }
              >
                <li>
                  <NavLink
                    to="/admin/all-brands"
                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-200 "
                  >
                    <span className="ml-9">All Brands</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/add-brand"
                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-200 "
                  >
                    <span className="ml-9">Add Brand</span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => setCategoryDropDown(!categoryDropDown)}
                type="button"
                className="flex items-center w-full p-2 text-gray-900 transition ease-in duration-75 rounded-lg group hover:bg-gray-200"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Categories
                </span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                className={
                  categoryDropDown
                    ? "block py-1 space-y-1"
                    : "hidden py-1 space-y-1"
                }
              >
                <li>
                  <NavLink
                    to="/admin/all-categories"
                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-200 "
                  >
                    <span className="ml-9">All Categories</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/add-category"
                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-200 "
                  >
                    <span className="ml-9">Add Category</span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => setProductDropDown(!productDropDown)}
                type="button"
                className="flex items-center w-full p-2 text-gray-900 transition ease-in duration-75 rounded-lg group hover:bg-gray-200"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Products
                </span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                className={
                  productDropDown
                    ? "block py-1 space-y-1"
                    : "hidden py-1 space-y-1"
                }
              >
                <li>
                  <NavLink
                    to="/admin/all-products"
                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-200 "
                  >
                    <span className="ml-9">All Proudcts</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/add-product"
                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-200 "
                  >
                    <span className="ml-9">Add Product</span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/admin/orders"
                className="flex items-center p-2 group text-gray-900 rounded-lg  hover:bg-gray-200 "
              >
                <span className="text-[20px] text-gray-500 group-hover:text-gray-900 transition duration-75">
                  <FaCartPlus />
                </span>
                <span className="ml-3">Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/customers"
                className="flex items-center p-2 group text-gray-900 rounded-lg  hover:bg-gray-200 "
              >
                <span className="text-[20px] text-gray-500 group-hover:text-gray-900 transition duration-75">
                  <FaUserFriends />
                </span>
                <span className="ml-3">Customers</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/statistics"
                className="flex items-center p-2 group text-gray-900 rounded-lg  hover:bg-gray-200 "
              >
                <span className="text-[20px] text-gray-500 group-hover:text-gray-900 transition duration-75">
                  <FaChartBar />
                </span>
                <span className="ml-3">Statistics</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/sellers"
                className="flex items-center p-2 group text-gray-900 rounded-lg  hover:bg-gray-200 "
              >
                <span className="text-[20px] text-gray-500 group-hover:text-gray-900 transition duration-75">
                  <FaMapMarked />
                </span>
                <span className="ml-3">Sellers</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/hotoffers"
                className="flex items-center p-2 group text-gray-900 rounded-lg  hover:bg-gray-200 "
              >
                <span className="text-[20px] text-gray-500 group-hover:text-gray-900 transition duration-75">
                  <FaRegPaperPlane />
                </span>
                <span className="ml-3">Hot Offers</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/settings"
                className="flex items-center p-2 group text-gray-900 rounded-lg  hover:bg-gray-200 "
              >
                <span className="text-[20px] text-gray-500 group-hover:text-gray-900 transition duration-75">
                  <DiAptana />
                </span>
                <span className="ml-3">Settings</span>
              </NavLink>
            </li>
            <li onClick={handleLogout}>
              <NavLink
                to="/"
                className="flex items-center p-2 group text-gray-900 rounded-lg  hover:bg-gray-200 "
              >
                <span className="text-[20px] text-gray-500 group-hover:text-gray-900 transition duration-75">
                  <FaSignInAlt />
                </span>
                <span className="ml-3">SignOut</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
