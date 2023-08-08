import React from "react";
import { setTitle } from "../../../utils/setTitle";
import { Banner } from "./Banner";
import { ForYouProduct } from "./ForYouProduct";
import { BestCategory } from "./BestCategory";
import { FeaturedProduct } from "./FeaturedProduct";

export const Home = () => {
  //set page title
  setTitle("Home");
  return (
    <>
      <Banner />
      <FeaturedProduct/>
      <BestCategory/>
      <ForYouProduct />
    </>
  );
};
