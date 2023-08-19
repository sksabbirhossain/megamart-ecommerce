import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const addToCartSlice = createSlice({
  name: "cartOpen",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const productExt = state.cartItems.find(
        (product) => product._id === newItem._id
      );

      if (productExt) {
        productExt.quantity += 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
    },
  },
});

export default addToCartSlice.reducer;
export const { addToCart } = addToCartSlice.actions;
