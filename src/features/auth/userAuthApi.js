import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./userAuthSlice";

export const userAuthApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        body: data,
      }),
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "userAuth",
            JSON.stringify({
              accessToken: result.data.data.accessToken,
              user: result.data.data.user,
            })
          );
          dispatch(
            userLoggedIn({
              accessToken: result.data.data.accessToken,
              user: result.data.data.user,
            })
          );
        } catch (err) {}
      },
    }),
  }),
});

export const { useUserRegisterMutation, useUserLoginMutation } = userAuthApi;
