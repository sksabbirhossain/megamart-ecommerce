import { apiSlice } from "../api/apiSlice";

export const brandApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBrands: builder.query({
      query: () => ({
        url: "/brand/all",
      }),
    }),
  }),
});

export const { useGetAllBrandsQuery } = brandApi;
