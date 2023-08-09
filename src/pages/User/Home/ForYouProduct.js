import React from "react";
import { ContainerHeader } from "../../../components/user/ContainerHeader";
import { ProductCard } from "../../../components/user/ProductCard";
import { useGetProductsQuery } from "../../../features/product/productApi";

export const ForYouProduct = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
  } = useGetProductsQuery();

  // decide what to render
  let content;

  if (isLoading)
    <p className="text-center uppercase font-medium">loading...</p>;
  if (!isLoading && isError)
    content = (
      <h3 className=" uppercase font-medium text-red-600">
        something went wrong!
      </h3>
    );

  if (!isError && !isLoading && isSuccess && products?.length === 0)
    content = (
      <p className="text-center uppercase font-medium">No Product found!</p>
    );
  if (!isError && !isLoading && products?.length > 0)
    content = products.map((proudct) => (
      <ProductCard key={proudct._id} product={proudct} />
    ));

  return (
    <div className="container mx-auto ">
      <ContainerHeader title="product for you!" />
      <div className=" mb-7 grid gird-cols-1 justify-center xs:justify-start xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-5">
        {content}
      </div>
    </div>
  );
};
