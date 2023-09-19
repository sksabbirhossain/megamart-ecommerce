import { apiSlice } from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => ({
        url: "/order/all",
      }),
    }),
    getUserOrder: builder.query({
      query: (userId) => ({
        url: `order/user-order/${userId}`,
      }),
    }),
    updateOrderStatus: builder.mutation({
      query: ({ orderId, data }) => ({
        url: `/order/update-status/${orderId}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = dispatch(
          orderApi.util.updateQueryData("getAllOrder", undefined, (draft) => {
            const orderIndex = draft?.findIndex(
              (order) => order._id === arg.orderId
            );
            draft[orderIndex].orderStatus = arg.data.status;
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

export const { useGetAllOrderQuery,useGetUserOrderQuery, useUpdateOrderStatusMutation } = orderApi;
