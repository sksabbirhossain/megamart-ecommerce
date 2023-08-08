import React from "react";
import { Outlet } from "react-router-dom";
import { Cart } from "../components/user/Cart/Cart";
import { Footer } from "../components/user/Footer";
import { Headers } from "../components/user/Headers/Headers";

export const UserLayout = () => {
  return (
    <>
      <Headers />
      <Cart />
      <Outlet />
      <Footer />
    </>
  );
};
