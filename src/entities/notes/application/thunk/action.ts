import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApi, INoteDTO } from "../../../../types";
import { Note } from "../../core/notes";
import { RepositoryAdapter } from "../../infrastructure/services/note.services";
import { showNotification } from "../../../notification/application/action";
import NoteDTO from "../../core/schema";
import Validator from "../../../../utils/validators";

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
