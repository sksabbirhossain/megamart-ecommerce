import { apiSlice } from "../api/apiSlice";

export const brandApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addBrand: builder.mutation({
      query: (data) => ({
        url: "/brand/add-brand",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          const { brand: brandData } = res.data;

          // pessimistic updates cache
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllBrands",
              undefined,
              (draft) => {
                draft?.brands?.push(brandData);
              }
            )
          );
        } catch {}
      },
    }),
  }),
});

export const {
  useGetAllBrandsQuery,
  useGetBrandQuery,
  useAddBrandMutation,
  useUpdateBrandMutation,
  useUpdateStatusMutation,
  useDeleteBrandMutation,
} = brandApi;
