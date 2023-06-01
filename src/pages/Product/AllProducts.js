import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Heading } from "../../components/common/Heading/Heading";
import { setTitle } from "../../utils/setTitle";

export const AllProducts = () => {
  const status = false;

  //set page title
  setTitle("All Products");
  return (
    <section className="space-y-4">
      <Heading title="All Products" />
      <div className="flex justify-end shadow-sm py-2 rounded-md">
        <Link
          to="/add-product"
          className=" bg-green-600 px-2 mr-1 py-1 uppercase rounded-md text-gray-50 font-normal"
        >
          Add Product
        </Link>
      </div>
      {/* product table  */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Picture
              </th>
              <th scope="col" className="px-6 py-3">
                name
              </th>
              <th scope="col" className="px-6 py-3">
                price
              </th>
              <th scope="col" className="px-6 py-3">
                stock
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
                  src="https://static.gadgetandgear.com/tmp/product/20221013_1665649900_129385.jpeg"
                  alt="brand"
                  className="w-11 h-11 rounded-full ring-2 ring-green-700 p-1"
                />
              </th>
              <td className="px-6 py-3 capitalize">iphone 14 pro max</td>
              <td className="px-6 py-3 capitalize">$1199</td>
              <td className="px-6 py-3 capitalize">10</td>
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
