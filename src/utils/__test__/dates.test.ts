import { describe, test, expect } from "vitest";
import { getHyphenDate } from "../dates";
import { faker } from "@faker-js/faker";

describe("getHyphenDate", () => {
  test("should return date with hyphen", () => {
    const date = faker.date.past();
    const result = getHyphenDate(date);
    expect(result).toEqual(date.toJSON().slice(0, 10));
  });

  test("should fail with invalid date", () => {
    const result = getHyphenDate(undefined);
    expect(result).toEqual("Invalid Date");
  });

  test("when sending a word should fail with invalid date", () => {
    const result = getHyphenDate("word");
    expect(result).toEqual("Invalid Date");
  });
});
