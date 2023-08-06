import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectAdminAccessToken,
  selectAdminInfo,
} from "../../features/auth/authSelectors";

export const PrivateRoute = ({ children }) => {
  const admin = useSelector(selectAdminInfo);

  const accessToken = useSelector(selectAdminAccessToken);
  return admin !== undefined && accessToken !== undefined ? (
    children
  ) : (
    <Navigate to="/admin" />
  );
};
