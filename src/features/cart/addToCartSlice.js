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
    increaseQty: (state, action) => {
      const product = state.cartItems.find(
        (item) => item._id === action.payload.id
      );
      product.quantity = action.payload.data;
    },
    decreaseQty: (state, action) => {
      const product = state.cartItems.find(
        (item) => item._id === action.payload.id
      );
      product.quantity = action.payload.data;
    },
    removeCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

export default addToCartSlice.reducer;
export const { addToCart, increaseQty, decreaseQty, removeCart } =
  addToCartSlice.actions;
