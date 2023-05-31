import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Heading } from "../../components/common/Heading/Heading";
import { setTitle } from "../../utils/setTitle";

export const AllBrands = () => {
  //set page title
  setTitle("All Brands");
  const status = false;
  return (
    <section className="space-y-4">
      <Heading title="All Brands" />
      <div className="flex justify-end shadow-sm py-2 rounded-md">
        <Link
          to="/add-brand"
          className=" bg-green-600 px-2 mr-1 py-1 rounded-md text-gray-50 font-normal"
        >
          Add Brand
        </Link>
      </div>
      {/* brand table  */}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" class="px-6 py-3">
                Brand Picture
              </th>
              <th scope="col" class="px-6 py-3">
                Brand name
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
              >
                <img
                  src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202110180743"
                  alt="brand"
                  className="w-11 h-11 rounded-full ring-2 p-1"
                />
              </th>
              <td class="px-6 py-3">Apple</td>
              <td class="px-6 py-3 cursor-pointer">
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
              <td class="px-6 py-3 sm:space-x-2 space-x-1">
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
