import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import sidebarSliceReducer from "../features/sidebar/sidebarSlice";
import cartOpenSliceReducer from "../features/cart/cartOpenSlice";

export const store = configureStore({
  reducer: {
    sidebarMenu: sidebarSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    adminAuth: authSliceReducer,
    cartOpen: cartOpenSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
