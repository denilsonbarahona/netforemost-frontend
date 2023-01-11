import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INoteDTO } from "../../../../types";
import { setNotes, getNotes, getNote, updateNote, deleteNote } from "./action";

const initialState = {
  notesLoading: "idle",
  notesFormSubmitted: "idle",
  notes: [] as INoteDTO[],
  note: [] as INoteDTO[],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    sort: (state, action: PayloadAction<INoteDTO[]>) => {
      state.notes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setNotes.pending, (state) => {
      state.notesLoading = "loading";
      state.notesFormSubmitted = "idle";
    });
    builder.addCase(setNotes.fulfilled, (state) => {
      state.notesLoading = "idle";
      state.notesFormSubmitted = "fulfilled";
    });
    builder.addCase(setNotes.rejected, (state) => {
      state.notesLoading = "idle";
      state.notesFormSubmitted = "idle";
    });
    builder.addCase(getNotes.pending, (state) => {
      state.notesLoading = "fetching";
      state.notesFormSubmitted = "idle";
    });
    builder.addCase(getNotes.fulfilled, (state, action) => {
      state.notesLoading = "idle";
      state.notes = action.payload as unknown as INoteDTO[];
    });
    builder.addCase(getNotes.rejected, (state) => {
      state.notesLoading = "idle";
    });
    builder.addCase(getNote.pending, (state) => {
      state.notesLoading = "fetching";
      state.notesFormSubmitted = "idle";
    });
    builder.addCase(getNote.fulfilled, (state, action) => {
      state.note = action.payload as unknown as INoteDTO[];
      state.notesLoading = "idle";
    });
    builder.addCase(getNote.rejected, (state) => {
      state.notesLoading = "idle";
    });
    builder.addCase(updateNote.pending, (state) => {
      state.notesLoading = "loading";
      state.notesFormSubmitted = "idle";
    });
    builder.addCase(updateNote.fulfilled, (state) => {
      state.notesLoading = "idle";
      state.notesFormSubmitted = "idle";
    });
    builder.addCase(updateNote.rejected, (state) => {
      state.notesLoading = "idle";
      state.notesFormSubmitted = "idle";
    });
    builder.addCase(deleteNote.pending, (state) => {
      state.notesLoading = "deleting";
    });
    builder.addCase(deleteNote.fulfilled, (state) => {
      state.notesLoading = "idle";
    });
    builder.addCase(deleteNote.rejected, (state) => {
      state.notesLoading = "idle";
    });
  },
});

export default notesSlice.reducer;
export const { sort } = notesSlice.actions;
