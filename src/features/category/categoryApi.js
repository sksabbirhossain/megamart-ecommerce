import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/category/all",
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
          const { data } = await queryFulfilled;
          // pessimistic updates cache
          dispatch(
            apiSlice.util.updateQueryData(
              "getCategories",
              undefined,
              (draft) => {
                draft?.push(data);
              }
            )
          );
        } catch {}
      },
    }),
    updateSatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/category/update/status/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = dispatch(
          apiSlice.util.updateQueryData("getCategories", undefined, (draft) => {
            const categoryIndex = draft?.findIndex(
              (category) => category._id === arg.id
            );
            draft[categoryIndex].status = arg.data.status;
          })
        );
        try {
          await queryFulfilled;
        } catch {
          result.undo();
        }
      },
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useUpdateSatusMutation,
} = categoryApi;
