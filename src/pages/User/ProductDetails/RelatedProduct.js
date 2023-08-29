import React from "react";
import { useParams } from "react-router-dom";
import { ProductCardSkeleton } from "../../../components/ui/ProductCardSkeleton";
import { ContainerHeader } from "../../../components/user/ContainerHeader";
import { ProductCard } from "../../../components/user/ProductCard";
import { useGetProductByCategoryQuery } from "../../../features/product/productApi";

export const RelatedProduct = ({ categoryId }) => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
  } = useGetProductByCategoryQuery(categoryId);

  const { productId } = useParams();

  let content;
  if (isLoading)
    content = (
      <>
        <ProductCardSkeleton />
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

  if (!isError && !isLoading && isSuccess && products?.length > 0)
    content = products
      ?.filter((product) => product._id !== productId)
      ?.map((product) => <ProductCard key={product.id} product={product} />);

  return (
    <div>
      <ContainerHeader title={"Related Product!"} />
      <div className=" mb-7 grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-5">
        {content}
      </div>
    </div>
  );
};
