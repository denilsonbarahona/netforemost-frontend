import { describe, test, expect } from "vitest";
import Sorting from "../sorting";

describe("testing sort", () => {
  describe("sorting by number", () => {
    test("sort by number", () => {
      const sorting = new Sorting();
      const result = sorting.sort(
        [{ id: 1 }, { id: 3 }, { id: 20 }, { id: 5 }, { id: 2 }],
        "id"
      );
      expect(result).toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 5 },
        { id: 20 },
      ]);
    });
  });

  describe("sorting by date", () => {
    test("sort by date", () => {
      const sorting = new Sorting();
      const result = sorting.sort(
        [
          { date: new Date("2021-01-01") },
          { date: new Date("2021-01-01") },
          { date: new Date("2019-01-01") },
          { date: new Date("2025-01-01") },
          { date: new Date("2021-01-02") },
        ],
        "date"
      );
      expect(result).toEqual([
        { date: new Date("2019-01-01") },
        { date: new Date("2021-01-01") },
        { date: new Date("2021-01-01") },
        { date: new Date("2021-01-02") },
        { date: new Date("2025-01-01") },
      ]);
    });
  });

  describe("sorting by string", () => {
    test("sort by string", () => {
      const sorting = new Sorting();
      const result = sorting.sort(
        [
          { name: "a" },
          { name: "z" },
          { name: "ax" },
          { name: "ba" },
          { name: "w" },
          { name: "c" },
        ],
        "name"
      );
      expect(result).toEqual([
        { name: "a" },
        { name: "ax" },
        { name: "ba" },
        { name: "c" },
        { name: "w" },
        { name: "z" },
      ]);
    });
  });
});
