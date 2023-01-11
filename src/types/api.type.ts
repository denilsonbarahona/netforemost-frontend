export interface IApi {
  get: <T>(url: string) => Promise<T>;
  post: <T, B>(url: string, body: B) => Promise<T>;
  put: <T, B>(url: string, body: B) => Promise<T>;
  delete: <T>(url: string) => Promise<T>;
}
