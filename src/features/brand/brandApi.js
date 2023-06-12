import { apiSlice } from "../api/apiSlice";

export const brandApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBrands: builder.query({
      query: () => ({
        url: "/brand/all",
      }),
    }),
    getBrand: builder.query({
      query: (brandId) => ({
        url: `/brand/${brandId}`,
      }),
    }),
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
    updateBrand: builder.mutation({
      query: ({ brandId, data }) => ({
        url: `/brand/update/${brandId}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: brand } = await queryFulfilled;

          // pessimistic updates getAllBrands cache
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllBrands",
              undefined,
              (draft) => {
                const brandIndex = draft?.brands?.findIndex(
                  (brand) => brand?._id === brand._id
                );
                draft.brands[brandIndex] = brand;
              }
            )
          );
          // pessimistic updates getBrand cache
          dispatch(
            apiSlice.util.updateQueryData("getBrand", arg.brandId, (draft) => {
              draft[0] = brand;
            })
          );
        } catch (err) {}
      },
    }),
    updateStatus: builder.mutation({
      query: ({ data, brandid }) => ({
        url: `/brand/update/status/${brandid}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = dispatch(
          apiSlice.util.updateQueryData("getAllBrands", undefined, (draft) => {
            const brandIndex = draft?.brands?.findIndex(
              (brand) => brand?._id === arg.brandid
            );
            draft.brands[brandIndex].status = arg.data.status;
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
  useGetAllBrandsQuery,
  useGetBrandQuery,
  useAddBrandMutation,
  useUpdateBrandMutation,
  useUpdateStatusMutation,
} = brandApi;
