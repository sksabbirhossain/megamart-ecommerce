import React, { useState } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import {
  useDeleteCategoryMutation,
  useUpdateSatusMutation,
} from "../../../features/category/categoryApi";
import { CategoryModal } from "./CategoryModal";

export const CategoriesTable = ({ categories }) => {
  const [open, setOpen] = useState(false);
  const [categoryId, setCategoryId] = useState(undefined);
  const [updateStatus] = useUpdateSatusMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  //update Status
  const updateStatusHandler = (id, data) => {
    updateStatus({
      id,
      data: {
        status: data,
      },
    });
  };

  //open modal
  const openModal = (categoryId, open) => {
    setCategoryId(categoryId);
    setOpen(open);
  };

  //delete category
  const deleteHandler = (id) => {
    deleteCategory(id);
  };
  return (
    <>
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
            {categories?.map((category) => {
              const { _id, name, picture, status } = category;
              return (
                <tr className="bg-white border-b" key={_id}>
                  <th
                    scope="row"
                    className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <img
                      src={picture}
                      alt="category"
                      className="w-11 h-11 rounded-full ring-2 ring-green-700 p-1"
                    />
                  </th>
                  <td className="px-6 py-3">{name}</td>
                  <td
                    className="px-6 py-3 cursor-pointer"
                    onClick={() => updateStatusHandler(_id, !status)}
                  >
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
                    <button
                      className="text-[16px] text-white bg-green-700 p-1 rounded-md"
                      onClick={() => openModal(_id, true)}
                    >
                      <FaPencilAlt />
                    </button>
                    <button
                      className="text-[16px] text-white bg-red-700 p-1 rounded-md"
                      onClick={() => deleteHandler(_id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {open && <CategoryModal closeModal={setOpen} categoryId={categoryId} />}
    </>
  );
};
