import React from "react";
import { setTitle } from "../../../utils/setTitle";
import { Banner } from "./Banner";
import { ForYouProduct } from "./ForYouProduct";

export const Home = () => {
  //set page title
  setTitle("Home");
  return (
    <>
      <Banner />
      <ForYouProduct/>
    </>
  );
};
