import React from "react";
import { CategorySkeleton } from "./CategorySkeleton";

export const CategoryLoading = () => {
  return (
    <div className="container mx-auto mb-7 grid gird-cols-1 justify-center xs:justify-start xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-3">
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
    </div>
  );
};
