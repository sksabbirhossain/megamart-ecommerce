import { configureStore } from "@reduxjs/toolkit";
import sidebarSliceReducer from "../features/sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebarMenu: sidebarSliceReducer,
  },
});
