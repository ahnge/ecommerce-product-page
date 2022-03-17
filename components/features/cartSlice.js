import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    amountToAdd: 0,
    amountInCart: 0,
  },
  reducers: {
    cartOpener: (state) => {
      state.isOpen = !state.isOpen;
    },
    plusMinus: (state, actions) => {
      if (actions.payload === "+") {
        state.amountToAdd += 1;
      } else {
        state.amountToAdd === 0
          ? (state.amountToAdd = 0)
          : (state.amountToAdd -= 1);
      }
    },
    handleATC: (state) => {
      state.amountInCart += state.amountToAdd;
      state.amountToAdd = 0;
    },
    cartCleaner: (state) => {
      state.amountInCart = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
