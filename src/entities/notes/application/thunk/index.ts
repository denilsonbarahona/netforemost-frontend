import { createSlice } from "@reduxjs/toolkit";
import { INoteDTO } from "../../../../types";
import { setNotes } from "./action";

const initialState = {
  notesLoading: "idle",
  notesFormSubmitted: "idle",
  notes: [] as INoteDTO[],
  note: [] as INoteDTO[],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setNotes.pending, (state) => {
      state.notesLoading = "loading";
      state.notesFormSubmitted = "idle";
    });
    builder.addCase(setNotes.fulfilled, (state, action) => {
      state.notesLoading = "idle";
      state.notesFormSubmitted = "fulfilled";
      state.notes = action.payload as unknown as INoteDTO[];
    });
    builder.addCase(setNotes.rejected, (state) => {
      state.notesLoading = "idle";
      state.notesFormSubmitted = "idle";
    });
  },
});

export default notesSlice.reducer;
