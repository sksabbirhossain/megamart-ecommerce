import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/product/all",
      }),
    }),
    getProduct: builder.query({
      query: (productId) => ({
        url: `/product/${productId}`,
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
          dispatch(
            apiSlice.util.updateQueryData("getProducts", undefined, (draft) => {
              draft?.push(data);
            })
          );
        } catch (err) { }
      },
    }),
    updateProduct: builder.mutation({
      query: ({ productId, data }) => ({
        url: `/update/update-product/${productId}`,
        method: "PATCH",
        body: data
      })
    }),
    updateProductStatus: builder.mutation({
      query: ({ productId, data }) => ({
        url: `/product/update-product-status/${productId}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = dispatch(
          productApi.util.updateQueryData("getProducts", undefined, (draft) => {
            const productIndex = draft?.findIndex(
              (product) => product._id === arg.productId
            );
            draft[productIndex].status = arg.data.status;
          })
        );
        try {
          await queryFulfilled;
        } catch (err) {
          result.undo();
        }
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/delete-product/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = dispatch(
          apiSlice.util.updateQueryData("getProducts", undefined, (draft) => {
            const products = draft?.filter((product) => product?._id !== arg);
            return products;
          })
        );
        try {
          await queryFulfilled;
        } catch (err) {
          result.undo();
        }
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useUpdateProductStatusMutation,
  useDeleteProductMutation,
} = productApi;
