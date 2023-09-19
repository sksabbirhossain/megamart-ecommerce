import React from "react";
import { CategoryLoading } from "../../../components/ui/CategorySkeleton/CategoryLoading";
import { CategoryCard } from "../../../components/user/CategoryCard";
import { ContainerHeader } from "../../../components/user/ContainerHeader";
import { useGetCategoriesQuery } from "../../../features/category/categoryApi";

export const BestCategory = () => {
  const {
    data: categories,
    isLoading,
    isError,
    isSuccess,
  } = useGetCategoriesQuery();

  // decide what to render
  let content;

  if (isLoading) return (content = <CategoryLoading />);

  if (!isLoading && isError)
    content = (
      <h3 className=" uppercase container font-medium text-red-600">
        something went wrong!
      </h3>
    );

  if (!isError && !isLoading && isSuccess && categories?.length === 0)
    content = (
      <p className="text-center uppercase font-medium">No Product found!</p>
    );
  if (!isError && !isLoading && categories?.length > 0)
    content = categories
      .slice(0, 10)
      .map((category) => (
        <CategoryCard key={category._id} category={category} />
      ));

  return (
    <div className="container mx-auto ">
      <ContainerHeader title="Best Categories!" />
      <div className=" mb-7 grid gird-cols-1 justify-center xs:justify-start xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-3">
        {content}
      </div>
    </div>
  );
};
