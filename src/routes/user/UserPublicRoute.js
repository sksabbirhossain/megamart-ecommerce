import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectUserAccessToken,
  selectUserInfo,
} from "../../features/auth/userAuthSelectors";

export const UserPublicRoute = ({ children }) => {
  const user = useSelector(selectUserInfo);
  const accessToken = useSelector(selectUserAccessToken);

  return user !== undefined && accessToken !== undefined ? (
    <Navigate to="/" />
  ) : (
    children
  );
};
