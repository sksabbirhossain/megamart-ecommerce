import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "../../../components/common/Heading/Heading";
import { useGetAllBrandsQuery } from "../../../features/brand/brandApi";
import { setTitle } from "../../../utils/setTitle";
import { BrandTable } from "./BrandTable";

export const AllBrands = () => {
  const {
    data: allBrands,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllBrandsQuery();

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

  if (!isError && !isLoading && isSuccess && allBrands?.length === 0)
    content = (
      <p className="text-center uppercase font-medium">No Brand found!</p>
    );
  if (!isError && !isLoading && allBrands?.length > 0)
    content = <BrandTable brands={allBrands} />;

  //set page title
  setTitle("All Brands");

  return (
    <section className="space-y-4">
      <Heading title="All Brands" />
      <div className="flex justify-end shadow-sm py-2 rounded-md">
        <Link
          to="/admin/add-brand"
          className=" bg-green-600 px-2 mr-1 py-1 uppercase rounded-md text-gray-50 font-normal"
        >
          Add Brand
        </Link>
      </div>
      {/* brand table  */}
      {content}
    </section>
  );
};
