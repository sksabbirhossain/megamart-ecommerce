import { apiSlice } from "../api/apiSlice";
import { adminLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (data) => ({
        url: "/admin/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "adminAuth",
            JSON.stringify({
              accessToken: result.data.data.accessToken,
              admin: result.data.data.admin,
            })
          );
          dispatch(
            adminLoggedIn({
              accessToken: result.data.data.accessToken,
              admin: result.data.data.admin,
            })
          );
        } catch (err) {}
      },
    }),
  }),
});

export const { useAdminLoginMutation } = authApi;
