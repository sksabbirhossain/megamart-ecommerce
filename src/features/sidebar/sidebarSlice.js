import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarMenu: false,
};

const sidebarSlice = createSlice({
  name: "sidebarMenu",
  initialState,
  reducers: {
    isActive: (state) => {
      state.sidebarMenu = !state.sidebarMenu;
    },
  },
});

export default sidebarSlice.reducer;
export const { isActive } = sidebarSlice.actions;
