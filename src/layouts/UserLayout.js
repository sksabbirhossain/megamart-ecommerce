import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/user/Footer";
import { Headers } from "../components/user/Headers/Headers";

export const UserLayout = () => {
  return (
    <>
      <Headers/>
      <Outlet />
      <Footer/>
    </>
  );
};
