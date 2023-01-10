import { describe, test, expect, beforeAll } from "vitest";
import fetchMock from "../../../__mocks__/fetch.mock";
import { createNotes } from "../../../__mocks__/create-notes";
import Validator from "../../../utils/validators";
import { Note } from "../core/notes";
import NoteDTO from "../core/schema";
import { FetchApi } from "../../../api/fetch-api";
import { RepositoryAdapter } from "../infrastructure/services/note.services";

describe("Note class", () => {
  describe("setting a new note", () => {
    beforeAll(() => {
      fetchMock(200, { name: "Note created" });
    });

    test("should return a success message", async () => {
      const NoteObj = new Note(
        new RepositoryAdapter(new FetchApi()),
        new Validator()
      );
      const note = createNotes(1)[0];
      const noteDTO = new NoteDTO();
      const payload = noteDTO.create(note);
      const result = await NoteObj.setNote(payload);
      expect(result.message).toBe("Note created");
      expect(result.isSuccess).toBe(true);
    });
  });
});
