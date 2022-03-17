import { createSlice } from "@reduxjs/toolkit";

import productImgOne from "../../public/image-product-1.jpg";
import productImgTwo from "../../public/image-product-2.jpg";
import productImgThree from "../../public/image-product-3.jpg";
import productImgFour from "../../public/image-product-4.jpg";

const desktopSliderSlice = createSlice({
  name: "desktopSlider",
  initialState: {
    value: productImgOne,
    items: [
      {
        src: productImgOne,
        active: true,
      },
      {
        src: productImgTwo,
        active: false,
      },
      {
        src: productImgThree,
        active: false,
      },
      {
        src: productImgFour,
        active: false,
      },
    ],
    popup: false,
  },
  reducers: {
    changeSlide: (state, actions) => {
      state.items.forEach((item) => (item.active = false));
      if (actions.payload === 0) {
        state.value = productImgOne;
        state.items[0].active = true;
      } else if (actions.payload === 1) {
        state.value = productImgTwo;
        state.items[1].active = true;
      } else if (actions.payload === 2) {
        state.value = productImgThree;
        state.items[2].active = true;
      } else {
        state.value = productImgFour;
        state.items[3].active = true;
      }
    },
    updatePopup: (state, actions) => {
      state.popup = !state.popup;
    },
  },
});

export const desltopSliderActions = desktopSliderSlice.actions;

export default desktopSliderSlice;
