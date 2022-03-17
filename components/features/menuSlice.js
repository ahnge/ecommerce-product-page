import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isOpen: false,
  },
  reducers: {
    menuOpener: (state, actions) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice;
