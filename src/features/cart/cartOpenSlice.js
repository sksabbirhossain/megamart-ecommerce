import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartOpen: false,
};

const cartOpenSlice = createSlice({
  name: "cartOpen",
  initialState,
  reducers: {
    openCart: (state, action) => {
      state.cartOpen = action.payload;
    },
  },
});

export default cartOpenSlice.reducer;
export const { openCart } = cartOpenSlice.actions;
