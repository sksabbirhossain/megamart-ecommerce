import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "../../../components/common/Heading/Heading";
import { useGetProductsQuery } from "../../../features/product/productApi";
import { setTitle } from "../../../utils/setTitle";
import { ProductTable } from "./ProductTable";

export const AllProducts = () => {
  const { data, isLoading, isSuccess, isError } = useGetProductsQuery() || {};

  const { data: products } = data || {};

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

  if (!isError && !isLoading && isSuccess && products?.length === 0)
    content = (
      <p className="text-center uppercase font-medium">No Product found!</p>
    );
  if (!isError && !isLoading && products?.length > 0)
    content = <ProductTable products={products} />;

  //set page title
  setTitle("All Products");
  return (
    <section className="space-y-4">
      <Heading title="All Products" />
      <div className="flex justify-end shadow-sm py-2 rounded-md">
        <Link
          to="/admin/add-product"
          className=" bg-green-600 px-2 mr-1 py-1 uppercase rounded-md text-gray-50 font-normal"
        >
          Add Product
        </Link>
      </div>
      {/* product table  */}
      {content}
    </section>
  );
};
