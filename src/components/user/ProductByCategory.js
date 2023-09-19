import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByCategoryQuery } from "../../features/product/productApi";
import { setTitle } from "../../utils/setTitle";
import { ProductCardSkeleton } from "../ui/ProductCardSkeleton";
import { ContainerHeader } from "./ContainerHeader";
import { ProductCard } from "./ProductCard";

export const ProductByCategory = () => {
  const { categoryName, categoryId } = useParams();

  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
  } = useGetProductByCategoryQuery(categoryId) || {};

  // decide what to render
  let content;

  if (isLoading)
    content = (
      <>
        <ProductCardSkeleton /> <ProductCardSkeleton /> <ProductCardSkeleton />
        <ProductCardSkeleton /> <ProductCardSkeleton />
      </>
    );

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

  //set page title
  setTitle(`${categoryName} - Search `);

  return (
    <div className="container mx-auto ">
      <ContainerHeader title={`Search products for ${categoryName}`} />
      <div className=" mb-7 grid gird-cols-1 justify-center xs:justify-start xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-5">
        {content}
      </div>
    </div>
  );
};
