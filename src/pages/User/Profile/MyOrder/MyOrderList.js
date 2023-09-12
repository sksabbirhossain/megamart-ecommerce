import React from "react";
import { Link } from "react-router-dom";

export const MyOrderList = () => {
  return (
    <div className=" shadow-md rounded-md  py-2 px-4">
      <h1 className="font-semibold py-2">
        TrId: <span className="text-orange-600">43534543</span>
      </h1>
      <div className="flex justify-between gap-5">
        <div className="">
          <img
            src="http://localhost:5000/api/uploads/d2020h-01-500x500-1692378880168.webp"
            alt=""
            className="w-11 h-11 rounded-full ring-2 p-1"
          />
        </div>
        <div>
          <h1 className="max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            accusamus nihil, temporibus aliquid distinctio
          </h1>
        </div>
        <div className="">
          <span>Quantity: 1</span>
        </div>
        <div>
          <span className="bg-green-600 text-gray-800 p-1 rounded-md">
            completed
          </span>
        </div>
        <div className="">
          <span>12 jan 2024</span>
        </div>
      </div>
    </div>
  );
};
