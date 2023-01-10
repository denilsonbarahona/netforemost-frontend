import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  MenuIsVisible: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    hideMenu: (state) => {
      state.MenuIsVisible = false;
    },
    showMenu: (state) => {
      state.MenuIsVisible = true;
    },
  },
});

export default globalSlice.reducer;
export const { hideMenu, showMenu } = globalSlice.actions;
