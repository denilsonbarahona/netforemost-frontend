import { describe, test, expect } from "vitest";
import { createNotes } from "../../../__mocks__/create-notes";
import NoteDTO from "../core/schema";

describe("NoteDTO class", () => {
  describe("testing success", () => {
    describe("creating a note", () => {
      test("should return a success message", () => {
        const notes = createNotes(1)[0];
        const noteDTO = new NoteDTO();
        const result = noteDTO.create(notes);
        delete notes.id;
        expect(result).toEqual(notes);
      });
    });
  });
});
