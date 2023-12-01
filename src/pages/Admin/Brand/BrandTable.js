import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import {
  useDeleteBrandMutation,
  useUpdateStatusMutation,
} from "../../../features/brand/brandApi";
import { UpdateModal } from "./UpdateModal";

export const BrandTable = ({ brands }) => {
  const [open, setOpen] = useState(false);
  const [brandId, setBrandId] = useState(undefined);
  const [updateStatus, { isLoading }] = useUpdateStatusMutation();
  const [deleteBrand] = useDeleteBrandMutation();

  if (isLoading) <p>loading..</p>;

  //open modal
  const openModal = (brandId, open) => {
    setBrandId(brandId);
    setOpen(open);
  };

  //update status
  const updateStatusHandler = (brandId, data) => {
    updateStatus({
      brandid: brandId,
      data: {
        status: data,
      },
    });
    toast.success("Update Status");
  };

  //delete brand
  const handleDelete = (brandId) => {
    deleteBrand(brandId);
    toast.success("Deleted Brand Successfully");
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Brand Picture
              </th>
              <th scope="col" className="px-6 py-3">
                Brand name
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
            {brands?.map((brand) => {
              const { _id, name, picture, status } = brand;
              return (
                <tr className="bg-white border-b" key={_id}>
                  <th
                    scope="row"
                    className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <img
                      src={picture}
                      alt="brand"
                      className="w-11 h-11 rounded-full ring-2 ring-green-700 p-1"
                    />
                  </th>
                  <td className="px-6 py-3">{name}</td>
                  <td
                    className="px-6 py-3 cursor-pointer"
                    onClick={() => updateStatusHandler(_id, !status)}
                  >
                    <span
                      className={`text-white font-semibold px-3 py-1 rounded-md ${
                        status ? "bg-green-700" : "bg-red-600"
                      }`}
                    >
                      {status ? "active" : "inactive"}
                    </span>
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
                      onClick={() => handleDelete(_id)}
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
      {open && <UpdateModal closeModal={setOpen} brandId={brandId} />}
    </>
  );
};
