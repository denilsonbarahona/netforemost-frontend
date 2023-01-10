import { describe, test, expect, beforeAll } from "vitest";
import { FetchApi } from "../fetch-api";
import fetchMock from "../../__mocks__/fetch.mock";

describe("fetch api implementation", () => {
  describe("returning data", () => {
    beforeAll(() => {
      fetchMock(200, { name: "test" });
    });

    test("get should return data", async () => {
      const Api = new FetchApi();
      const result = await Api.get<{ name: string }>("/test");
      expect(result.name).toBe("test");
    });

    test("post should return data", async () => {
      const Api = new FetchApi();
      const result = await Api.post<{ name: string }, { name: string }>(
        "/test",
        {
          name: "test",
        }
      );
      expect(result.name).toBe("test");
    });

    test("put should return data", async () => {
      const Api = new FetchApi();
      const result = await Api.put<{ name: string }, { name: string }>(
        "/test",
        {
          name: "test",
        }
      );
      expect(result.name).toBe("test");
    });

    test("delete should return data", async () => {
      const Api = new FetchApi();
      const result = await Api.delete<{ name: string }>("/test");
      expect(result.name).toBe("test");
    });
  });

  describe("throwing error 400", () => {
    beforeAll(() => {
      fetchMock(400, { name: "test" });
    });

    test("get should throw error", async () => {
      const Api = new FetchApi();
      try {
        await Api.get<{ name: string }>("/test");
      } catch (error) {
        expect((error as Error).message).toBe("Bad Request");
      }
    });

    test("post should throw error", async () => {
      const Api = new FetchApi();
      try {
        await Api.post<{ name: string }, { name: string }>("/test", {
          name: "test",
        });
      } catch (error) {
        expect((error as Error).message).toBe("Bad Request");
      }
    });

    test("put should throw error", async () => {
      const Api = new FetchApi();
      try {
        await Api.put<{ name: string }, { name: string }>("/test", {
          name: "test",
        });
      } catch (error) {
        expect((error as Error).message).toBe("Bad Request");
      }
    });

    test("delete should throw error", async () => {
      const Api = new FetchApi();
      try {
        await Api.delete<{ name: string }>("/test");
      } catch (error) {
        expect((error as Error).message).toBe("Bad Request");
      }
    });
  });

  describe("throwing error 500", () => {
    beforeAll(() => {
      fetchMock(500, { name: "test" });
    });

    test("get should throw error", async () => {
      const Api = new FetchApi();
      try {
        await Api.get<{ name: string }>("/test");
      } catch (error) {
        expect((error as Error).message).toBe("Internal Server Error");
      }
    });

    test("post should throw error", async () => {
      const Api = new FetchApi();
      try {
        await Api.post<{ name: string }, { name: string }>("/test", {
          name: "test",
        });
      } catch (error) {
        expect((error as Error).message).toBe("Internal Server Error");
      }
    });

    test("put should throw error", async () => {
      const Api = new FetchApi();
      try {
        await Api.put<{ name: string }, { name: string }>("/test", {
          name: "test",
        });
      } catch (error) {
        expect((error as Error).message).toBe("Internal Server Error");
      }
    });

    test("delete should throw error", async () => {
      const Api = new FetchApi();
      try {
        await Api.delete<{ name: string }>("/test");
      } catch (error) {
        expect((error as Error).message).toBe("Internal Server Error");
      }
    });
  });
});
