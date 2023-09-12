import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectUserAccessToken,
  selectUserInfo,
} from "../../features/auth/userAuthSelectors";

export const UserPrivateRoute = ({ children }) => {
  const user = useSelector(selectUserInfo);
  const accessToken = useSelector(selectUserAccessToken);

  return user !== undefined && accessToken !== undefined ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};
