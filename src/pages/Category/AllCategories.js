import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Heading } from "../../components/common/Heading/Heading";
import { setTitle } from "../../utils/setTitle";

export const AllCategories = () => {
  const status = false;

  //set page title
  setTitle("All Categories");
  return (
    <section className="space-y-4">
      <Heading title="All Categories" />
      <div className="flex justify-end shadow-sm py-2 rounded-md">
        <Link
          to="/add-category"
          className=" bg-green-600 px-2 mr-1 py-1 uppercase rounded-md text-gray-50 font-normal"
        >
          Add Category
        </Link>
      </div>
      {/* brand table  */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Category Picture
              </th>
              <th scope="col" className="px-6 py-3">
                Category name
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
              >
                <img
                  src="https://www.bdprice.com.bd/wp-content/uploads/2020/11/Apple-iPhone-13-Blue-Price-in-Bangladesh.jpg"
                  alt="brand"
                  className="w-11 h-11 rounded-full ring-2 ring-green-700 p-1"
                />
              </th>
              <td className="px-6 py-3">iphone</td>
              <td className="px-6 py-3 cursor-pointer">
                {status ? (
                  <span className="text-white font-semibold px-3 py-1 rounded-md bg-green-700">
                    Active
                  </span>
                ) : (
                  <span className="text-white font-semibold px-3 py-1 rounded-md bg-red-600">
                    Inactive
                  </span>
                )}
              </td>
              <td className="px-6 py-3 sm:space-x-2 space-x-1">
                <button className="text-[16px] text-white bg-green-700 p-1 rounded-md">
                  <FaPencilAlt />
                </button>
                <button className="text-[16px] text-white bg-red-700 p-1 rounded-md">
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
