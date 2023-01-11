import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { INotification } from "../../../types";

const initialState: INotification = {
  isVisible: false,
  message: "",
  type: "success",
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    hideNotification: (state) => {
      state.isVisible = false;
      state.message = "";
      state.type = "success";
    },
    showNotification: (state, action: PayloadAction<INotification>) => {
      state.isVisible = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
  },
});

export default notificationSlice.reducer;
export const { hideNotification, showNotification } = notificationSlice.actions;
