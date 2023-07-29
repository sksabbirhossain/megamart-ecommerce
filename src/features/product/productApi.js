import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/product/all",
      }),
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product/add-product",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = productApi;
