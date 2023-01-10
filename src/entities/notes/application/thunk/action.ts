import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApi, INoteDTO } from "../../../../types";
import { Note } from "../../core/notes";
import { RepositoryAdapter } from "../../infrastructure/services/note.services";
import { showNotification } from "../../../notification/application/action";
import { sort } from "../thunk";
import NoteDTO from "../../core/schema";
import Validator from "../../../../utils/validators";
import Sorting from "../../../../utils/sorting";
import { RootState } from "../../../../store";

const validator = new Validator();

export const setNotes = createAsyncThunk(
  "notes/setNotes",
  async (payload: INoteDTO, thunk) => {
    const api = thunk.extra as IApi;
    const noteDto = new NoteDTO();
    const repository = new RepositoryAdapter(api);
    const DTO = noteDto.create(payload);
    const note = new Note(repository, validator);
    try {
      const response = await note.setNote(DTO);
      thunk.dispatch(
        showNotification({
          message: "Note created successfully",
          type: "success",
        })
      );
      return thunk.fulfillWithValue(response);
    } catch (error) {
      thunk.dispatch(
        showNotification({
          message: (error as Error).message,
          type: "error",
        })
      );
      return thunk.fulfillWithValue({
        isSuccess: false,
        message: (error as Error).message,
      });
    }
  }
);

export const getNotes = createAsyncThunk("notes/getNotes", async (_, thunk) => {
  const api = thunk.extra as IApi;
  const repository = new RepositoryAdapter(api);
  const note = new Note(repository, validator);
  try {
    const response = await note.getNotes();
    return thunk.fulfillWithValue(response);
  } catch (error) {
    thunk.dispatch(
      showNotification({
        message: (error as Error).message,
        type: "error",
      })
    );
    return thunk.fulfillWithValue({
      isSuccess: false,
      message: (error as Error).message,
    });
  }
});

export const getNote = createAsyncThunk(
  "notes/getNote",
  async (payload: string, thunk) => {
    const api = thunk.extra as IApi;
    const repository = new RepositoryAdapter(api);
    const note = new Note(repository, validator);
    try {
      const response = await note.getNote(payload);
      if (response.length > 0) {
        return thunk.fulfillWithValue(response);
      }
      thunk.dispatch(
        showNotification({
          message: "Note not found",
          type: "error",
        })
      );
    } catch (error) {
      thunk.dispatch(
        showNotification({
          message: (error as Error).message,
          type: "error",
        })
      );
      return thunk.fulfillWithValue({
        isSuccess: false,
        message: (error as Error).message,
      });
    }
  }
);

export const updateNote = createAsyncThunk(
  "notes/updateNote",
  async (payload: { id: string; data: INoteDTO }, thunk) => {
    const api = thunk.extra as IApi;
    const noteDto = new NoteDTO();
    const repository = new RepositoryAdapter(api);
    const DTO = noteDto.create(payload.data);
    const note = new Note(repository, validator);
    try {
      const response = await note.updateNote(payload.id, DTO);
      thunk.dispatch(
        showNotification({
          message: "Note updated successfully",
          type: "success",
        })
      );
      return thunk.fulfillWithValue(response);
    } catch (error) {
      thunk.dispatch(
        showNotification({
          message: (error as Error).message,
          type: "error",
        })
      );
      return thunk.fulfillWithValue({
        isSuccess: false,
        message: (error as Error).message,
      });
    }
  }
);

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async (payload: string, thunk) => {
    const api = thunk.extra as IApi;
    const repository = new RepositoryAdapter(api);
    const note = new Note(repository, validator);
    try {
      const response = await note.deleteNote(payload);
      thunk.dispatch(getNotes());
      return thunk.fulfillWithValue(response);
    } catch (error) {
      thunk.dispatch(
        showNotification({
          message: (error as Error).message,
          type: "error",
        })
      );
      return thunk.fulfillWithValue({
        isSuccess: false,
        message: (error as Error).message,
      });
    }
  }
);

export const sortingNotes = createAsyncThunk(
  "notes/sortingNotes",
  async (payload: string, thunk) => {
    const sortClass = new Sorting();
    const api = thunk.extra as IApi;
    const repository = new RepositoryAdapter(api);
    const note = new Note(repository, validator);
    const notes = (thunk.getState() as RootState).note.notes;
    const response = note.sort(sortClass, notes, payload as keyof INoteDTO);
    thunk.dispatch(sort(response));
  }
);
