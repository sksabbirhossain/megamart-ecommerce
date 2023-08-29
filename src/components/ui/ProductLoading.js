import React from "react";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

export const ProductLoading = () => {
  return (
    <div className=" mb-7 grid gird-cols-1 justify-center xs:justify-start xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-5">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
  );
};
