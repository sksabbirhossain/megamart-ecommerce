import React from "react";
import { Heading } from "../../components/common/Heading/Heading";
import { setTitle } from "../../utils/setTitle";

export const AllBrands = () => {
  //set page title
  setTitle("All Brands");
  return (
    <section>
      <Heading title="All Brands" />
      {/* brand table  */}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202110180743"
                  alt="brand"
                  className="w-12 h-12 rounded-full ring-2 p-2"
                />
              </th>
              <td class="px-6 py-4">Apple MacBook Pro 17"</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
