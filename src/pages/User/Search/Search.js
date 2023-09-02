import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchProductQuery } from "../../../features/product/productApi";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const searchKey = searchParams.get("search");

  const { data, isLoading, isSuccess, isError } =
    useSearchProductQuery(searchKey) || {};

  const { data: products } = data || {};

  console.log(products);
  return (
    <div className="container mx-auto my-5">
      <h2 className="text-3xl">{searchKey}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima velit
        nemo modi suscipit exercitationem ab provident sapiente numquam quos?
        Illo nobis molestiae a architecto sed consequatur tempora ut vero
        adipisci?
      </p>
    </div>
  );
};
