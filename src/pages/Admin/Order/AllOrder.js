import React from "react";
import { Heading } from "../../../components/common/Heading/Heading";
import { useGetAllOrderQuery } from "../../../features/order/orderApi";
import { setTitle } from "../../../utils/setTitle";
import { OrderTable } from "./OrderTable";

export const AllOrder = () => {
  const {
    data: orders,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllOrderQuery() || {};

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
    content = <OrderTable orders={orders} />;

  //set page title
  setTitle("All Orders");
  return (
    <section className="space-y-4">
      <Heading title="All Orders" />
      <div className="mt-4" />
      {/* product table  */}
      {content}
    </section>
  );
};
