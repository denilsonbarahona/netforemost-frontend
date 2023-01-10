/* eslint-disable @typescript-eslint/promise-function-async */
import { vi } from "vitest";

export default (status: number, resolved: any) => {
  window.fetch = vi.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: status,
      status,
      json: () => Promise.resolve(resolved),
    });
  });
};
