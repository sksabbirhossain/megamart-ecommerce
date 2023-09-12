import React from "react";
import { setTitle } from "../../../../utils/setTitle";
import { MyOrderList } from "./MyOrderList";

export const MyOrder = () => {
  //set page title
  setTitle("My Orders");
  return (
    <div className="container mx-auto my-5">
      <div className="shadow-md py-3 rounded-md">
        <h1 className="text-3xl capitalize ">My Orders</h1>
      </div>
      {/* my orders list */}
      <div className="py-4">
        <MyOrderList />
        <MyOrderList />
        <MyOrderList />
        <MyOrderList />
      </div>
    </div>
  );
};
