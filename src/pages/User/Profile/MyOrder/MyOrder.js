import React from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../../../features/auth/userAuthSelectors";
import { useGetUserOrderQuery } from "../../../../features/order/orderApi";
import { setTitle } from "../../../../utils/setTitle";
import { MyOrderList } from "./MyOrderList";

export const MyOrder = () => {
  const userInfo = useSelector(selectUserInfo);
  const {
    data: orders,
    isLoading,
    isSuccess,
    isError,
  } = useGetUserOrderQuery(userInfo._id) || {};

  // decide what to render
  let content;

  if (isLoading)
    <p className="text-center uppercase font-medium">loading...</p>;
  if (!isLoading && isError)
    content = (
      <h3 className="text-center uppercase font-medium">
        something went wrong!
      </h3>
    );

  if (!isError && !isLoading && isSuccess && orders?.length === 0)
    content = (
      <p className="text-center uppercase font-medium">No Orders found!</p>
    );
  if (!isError && !isLoading && orders?.length > 0)
    content = <MyOrderList orders={orders} />;

  //set page title
  setTitle("My Orders");
  return (
    <div className="container mx-auto my-5">
      <div className="shadow-md py-3 rounded-md">
        <h1 className="text-3xl capitalize ">My Orders</h1>
      </div>
      {/* my orders list */}
      <div className="py-4">{content}</div>
    </div>
  );
};
