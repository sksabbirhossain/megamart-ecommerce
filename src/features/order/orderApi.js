import { apiSlice } from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => ({
        url: "/order/all",
      }),
    }),
  }),
});

export const { useGetAllOrderQuery } = orderApi;
