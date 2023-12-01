import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "../../../components/common/Heading/Heading";
import { setTitle } from "../../../utils/setTitle";
import { useGetCategoriesQuery } from "../../../features/category/categoryApi";
import { CategoriesTable } from "./CategoriesTable";

export const AllCategories = () => {
  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
  } = useGetCategoriesQuery();


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

  if (!isError && !isLoading && isSuccess && categories?.length === 0)
    content = (
      <p className="text-center uppercase font-medium">No Categories found!</p>
    );
  if (!isError && !isLoading && categories?.length > 0)
    content = <CategoriesTable categories={categories} />;


  //set page title
  setTitle("All Categories");
  return (
    <section className="space-y-4">
      <Heading title="All Categories" />
      <div className="flex justify-end shadow-sm py-2 rounded-md">
        <Link
          to="/admin/add-category"
          className=" bg-green-600 px-2 mr-1 py-1 uppercase rounded-md text-gray-50 font-normal"
        >
          Add Category
        </Link>
      </div>
      {/* categories table  */}
      {content}
    </section>
  );
};
