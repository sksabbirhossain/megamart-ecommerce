import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { admin, accessToken } = useSelector((state) => state.adminAuth);
  return admin !== undefined && accessToken !== undefined ? (
    <Navigate to="/admin/dashboard" />
  ) : (
    children
  );
};
