import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/category/add",
      }),
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/category/add-category",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          // pessimistic updates cache
          dispatch(
            apiSlice.util.updateQueryData(
              "getCategories",
              undefined,
              (draft) => {
                draft?.push(result);
              }
            )
          );
        } catch {}
      },
    }),
  }),
});

export const { useGetCategoriesQuery, useAddCategoryMutation } = categoryApi;
