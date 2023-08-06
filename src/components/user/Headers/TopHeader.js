import React from "react";
import {
  AiOutlineCar,
  AiOutlinePhone,
  AiOutlineRadarChart,
} from "react-icons/ai";

export const TopHeader = () => {
  return (
    <div className="w-full h-6 bg-green-950 text-white/70 text-sm">
      <div className="container mx-auto flex h-full items-center justify-between">
        <p>Welcome to worldwide MegaMart!</p>
        <div className="flex space-x-2">
          <p className="flex items-center">
            <AiOutlinePhone /> <span className="ps-1">+880 1982658413</span>
          </p>
          <p className="flex items-center">
            <AiOutlineCar /> <span className="ps-1">Rrack Your Order</span>
          </p>
          <p className="flex items-center">
            <AiOutlineRadarChart /> <span className="ps-1">All Offer</span>
          </p>
        </div>
      </div>
    </div>
  );
};
