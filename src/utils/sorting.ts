import { ISorting } from "../types";

export default class Sorting implements ISorting {
  sort<T>(payload: T[], key: keyof T) {
    const payloadForSort = [...payload];
    return payloadForSort.sort((a: T, b: T) => {
      const aVal = a[key];
      const bVal = b[key];

      if (typeof aVal === "number" && typeof bVal === "number") {
        return this.sortingByNumber(aVal, bVal);
      }
      if (aVal instanceof Date && bVal instanceof Date) {
        return this.sortingByDate(aVal, bVal);
      }

      if (typeof aVal === "string" && typeof bVal === "string") {
        return this.sortingByString(aVal, bVal);
      }

      return -1;
    });
  }

  sortingByDate(A: Date, B: Date) {
    return new Date(A).getTime() - new Date(B).getTime();
  }

  sortingByNumber(A: number, B: number) {
    return A - B;
  }

  sortingByString(A: string, B: string) {
    return A.localeCompare(B);
  }
}
