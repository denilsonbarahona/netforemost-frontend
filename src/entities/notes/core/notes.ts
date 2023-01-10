import {
  INote,
  INoteDTO,
  IValidate,
  IRepositoryAdapter,
  IValidator,
  IWithSorting,
  ISorting,
} from "../../../types";

export class Note implements INote, IValidate, IWithSorting {
  constructor(
    private repository: IRepositoryAdapter,
    private validator: IValidator
  ) {
    this.repository = repository;
    this.validator = validator;
  }

  sort<INoteDTO>(sorting: ISorting, payload: INoteDTO[], key: keyof INoteDTO) {
    return sorting.sort(payload, key);
  }

  async validate<T extends object>(payload: T) {
    const response = await this.validator.validation(payload);
    if (response) {
      return { isSuccess: true, message: "Payload validated" };
    }
    throw new Error("Please, check the data you are sending");
  }

  async setNote(payload: INoteDTO) {
    const { isSuccess, message } = await this.validate<INoteDTO>(payload);
    if (isSuccess) {
      await this.repository.setNote(payload);
      return { isSuccess, message };
    }
    return { isSuccess, message };
  }

  async getNotes() {
    return await this.repository.getNotes();
  }

  async getNote(id: string) {
    return await this.repository.getNote(id);
  }

  async updateNote(id: string, payload: INoteDTO) {
    const { isSuccess, message } = await this.validate<INoteDTO>(payload);
    if (isSuccess) {
      await this.repository.updateNote(id, payload);
      return { isSuccess, message };
    }
    return { isSuccess, message };
  }

  async deleteNote(id: string) {
    await this.repository.deleteNote(id);
  }
}
