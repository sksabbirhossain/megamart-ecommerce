import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../features/cart/cartSelectors";
import { setTitle } from "../../../utils/setTitle";
import { CheckOutItems } from "./CheckOutItems";
import { CheckOutTotal } from "./CheckOutTotal";

export const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);

  //deside
  let content;
  if (cartItems?.length === 0) content = <>Cart Is Empty!</>;
  if (cartItems?.length > 0)
    content = cartItems?.map((item) => (
      <CheckOutItems key={item._id} item={item} />
    ));

  
  
  //set page title
  setTitle("CheckOut");

  return (
    <div className="container mx-auto my-7">
      <div className="md:grid md:grid-cols-5 md:gap-x-4">
        <div className="shadow-md rounded-md p-3 w-full md:col-span-4">
          <div className=" overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>{content}</tbody>
            </table>
          </div>
        </div>
        <CheckOutTotal/>
      </div>
    </div>
  );
};
