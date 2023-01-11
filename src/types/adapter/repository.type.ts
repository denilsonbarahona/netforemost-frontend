import { INoteDTO } from "../notes/notes.type";

export interface IRepositoryAdapter {
  setNote: (payload: INoteDTO) => void;
  getNotes: () => Promise<INoteDTO[]>;
  getNote: (id: string) => Promise<INoteDTO[]>;
  updateNote: (id: string, payload: INoteDTO) => void;
  deleteNote: (id: string) => void;
}
