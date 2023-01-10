import { IRepositoryAdapter, INoteDTO, IApi } from "../../../../types";

const API_URL = process.env.REACT_APP_API_URL as string;

export class RepositoryAdapter implements IRepositoryAdapter {
  constructor(private api: IApi) {
    this.api = api;
  }

  async setNote(payload: INoteDTO) {
    try {
      await this.api.post<string, INoteDTO>(`${API_URL}notes`, payload);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getNotes() {
    try {
      return await this.api.get<INoteDTO[]>(`${API_URL}notes`);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getNote(id: string) {
    try {
      return await this.api.get<INoteDTO[]>(`${API_URL}notes/${id}`);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async updateNote(id: string, payload: INoteDTO) {
    try {
      await this.api.put<string, INoteDTO>(`${API_URL}notes/${id}`, payload);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteNote(id: string) {
    try {
      await this.api.delete<string>(`${API_URL}notes/${id}`);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
