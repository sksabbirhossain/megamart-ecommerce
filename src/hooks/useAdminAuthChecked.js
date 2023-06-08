import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { adminLoggedIn } from "../features/auth/authSlice";

export const useAdminAuthChecked = () => {
  const [adminAuth, setAdminAuth] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const localAdminAuth = JSON.parse(localStorage.getItem("adminAuth"));
    if (localAdminAuth?.admin && localAdminAuth?.accessToken) {
      dispatch(adminLoggedIn(localAdminAuth));
      setAdminAuth(true);
    }
    setAdminAuth(true);
  }, [dispatch]);
  return adminAuth;
};
