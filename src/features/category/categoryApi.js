import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/category/all",
      }),
    }),
    getCategory: builder.query({
      query: (id) => ({
        url: `/category/${id}`,
      }),
    }),
    getCategoriesByBrand: builder.query({
      query: (brandId) => ({
        url: `/category/get-category/${brandId}`,
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
    updateCategory: builder.mutation({
      query: ({ categoryId, data }) => ({
        url: `/category/update/${categoryId}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data: category } = await queryFulfilled;
          // pessimistic updates getAllBrands cache
          dispatch(
            apiSlice.util.updateQueryData(
              "getCategories",
              undefined,
              (draft) => {
                const categoryIndex = draft?.findIndex(
                  (data) => data?._id === category._id
                );
                draft[categoryIndex] = category;
              }
            )
          );
          // pessimistic updates getcategory cache
          dispatch(
            apiSlice.util.updateQueryData(
              "getCategory",
              arg.categoryId,
              (draft) => {
                draft[0] = category;
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
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/delete/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = dispatch(
          apiSlice.util.updateQueryData("getCategories", undefined, (draft) => {
            const category = draft?.filter((category) => category._id !== arg);
            return category;
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
  useGetCategoryQuery,
  useGetCategoriesByBrandQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useUpdateSatusMutation,
  useDeleteCategoryMutation,
} = categoryApi;
