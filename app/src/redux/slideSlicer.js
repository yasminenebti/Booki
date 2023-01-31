import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: 0,
  length: 4,
};

export const sliderSlide = createSlice({
  name: "slider",
  initialState,
  reducers: {
    nextSlide(state, action) {
      console.log("action", action.payload);
      console.log("state", state);
      state.value = action.payload > state.length ? 0 : action.payload;
    },
    prevSlide(state, action) {
      console.log("action", action.payload);
      console.log("state", state);
      state.value = action.payload < 0 ? state.length : action.payload;
    },
    thisSlide() {},
  },
});

export const { nextSlide, prevSlide, thisSlide } = sliderSlide.actions;

export default sliderSlide.reducer;
