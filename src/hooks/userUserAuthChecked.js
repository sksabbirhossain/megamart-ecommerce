import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/userAuthSlice";
import { useEffect, useState } from "react";

export const useUserAuthChecked = () => {
  const [userAuth, setUserAuth] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const localUserAuth = JSON.parse(localStorage.getItem("userAuth"));
    if (localUserAuth?.user && localUserAuth?.accessToken) {
      dispatch(userLoggedIn(localUserAuth));
      setUserAuth(true);
    }
    setUserAuth(true);
  }, [dispatch]);
  return userAuth;
};
