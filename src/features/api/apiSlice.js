import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { adminLoggedOut } from "../auth/authSlice";
import { userLoggedOut } from "../auth/userAuthSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const adminToken = getState()?.adminAuth?.accessToken;
    const userToken = getState()?.userAuth?.accessToken;

    if (adminToken) {
      headers.set("Authorization", `Bearer ${adminToken}`);
    }
    if (userToken) {
      headers.set("Authorization", `Bearer ${userToken}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 401) {
      // call refresh token Api
      api.dispatch(adminLoggedOut());
      api.dispatch(userLoggedOut());
    }
    return result;
  },
  tagTypes: [],
  endpoints: (builder) => ({}),
});
