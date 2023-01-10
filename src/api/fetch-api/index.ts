import { IApi } from "../../types";

export class FetchApi implements IApi {
  async post<T, B>(url: string, body: B) {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return (await response.json()) as T;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async put<T, B>(url: string, body: B) {
    try {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return (await response.json()) as T;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async delete<T>(url: string) {
    try {
      const data = await fetch(url, {
        method: "DELETE",
      });
      return (await data.json()) as T;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async get<T>(url: string) {
    try {
      const data = await fetch(url);
      return (await data.json()) as T;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
