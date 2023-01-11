export interface INote {
  setNote: (payload: INoteDTO) => Promise<{
    isSuccess: boolean;
    message: string;
  }>;
  getNotes: () => Promise<INoteDTO[]>;
  getNote: (id: string) => Promise<INoteDTO[]>;
  updateNote: (
    id: string,
    payload: INoteDTO
  ) => Promise<{ isSuccess: boolean; message: string }>;
  deleteNote: (id: string) => Promise<{ isSuccess: boolean; message: string }>;
}

export interface INoteDTO {
  id?: string;
  topic?: string;
  title: string;
  body: string;
  date: Date;
}
