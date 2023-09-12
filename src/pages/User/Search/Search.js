import React from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCardSkeleton } from "../../../components/ui/ProductCardSkeleton";
import { ContainerHeader } from "../../../components/user/ContainerHeader";
import { ProductCard } from "../../../components/user/ProductCard";
import { useSearchProductQuery } from "../../../features/product/productApi";
import { setTitle } from "../../../utils/setTitle";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const searchKey = searchParams.get("search");

  const { data, isLoading, isSuccess, isError } =
    useSearchProductQuery(searchKey) || {};

  const { data: products } = data || {};
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
  setTitle(`${searchKey} - Search `);

  return (
    <div className="container mx-auto ">
      <ContainerHeader title="Search products" />
      <div className=" mb-7 grid gird-cols-1 justify-center xs:justify-start xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-5">
        {content}
      </div>
    </div>
  );
};
