import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import desktopSliderSlice from "../features/desktopSliderSlice";
import menuSlice from "../features/menuSlice";

export const store = configureStore({
  reducer: {
    dss: desktopSliderSlice.reducer,
    cart: cartSlice.reducer,
    menu: menuSlice.reducer,
  },
});
