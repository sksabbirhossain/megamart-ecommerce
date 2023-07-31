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
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(
            apiSlice.util.updateQueryData("getProducts", undefined, (draft) => {
              draft?.push(data);
            })
          );
        } catch (err) {}
      },
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = productApi;
