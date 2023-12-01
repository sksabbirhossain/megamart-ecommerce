import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/admin/Header/Header";
import { Sidebar } from "../components/admin/Sidebar/Sidebar";

export const AdminLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </>
  );
};
