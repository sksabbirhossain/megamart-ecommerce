import React from "react";
import { CategoryCard } from "../../../components/user/CategoryCard";
import { ContainerHeader } from "../../../components/user/ContainerHeader";

export const BestCategory = () => {
  return (
    <div className="container mx-auto ">
      <ContainerHeader title="Best Categories!" />
      <div className=" mb-7 grid gird-cols-1 justify-center xs:justify-start xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-3">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};
