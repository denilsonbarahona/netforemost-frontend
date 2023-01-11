import { describe, test, expect, beforeAll } from "vitest";
import fetchMock from "../../../__mocks__/fetch.mock";
import { createNotes } from "../../../__mocks__/create-notes";
import Validator from "../../../utils/validators";
import { Note } from "../core/notes";
import NoteDTO from "../core/schema";
import { FetchApi } from "../../../api/fetch-api";
import { RepositoryAdapter } from "../infrastructure/services/note.services";

describe("Note class", () => {
  describe("testing success", () => {
    describe("setting a new note", () => {
      beforeAll(() => {
        fetchMock(200, {});
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

    describe("getting all notes", () => {
      const notes = createNotes(5);

      beforeAll(() => {
        fetchMock(200, notes);
      });

      test("should return a success message", async () => {
        const NoteObj = new Note(
          new RepositoryAdapter(new FetchApi()),
          new Validator()
        );
        const result = await NoteObj.getNotes();
        expect(result.length).toBe(notes.length);
        expect(result).toEqual(notes);
      });
    });

    describe("getting a note by id", () => {
      const notes = createNotes(1);

      beforeAll(() => {
        fetchMock(200, notes);
      });

      test("should return a success message", async () => {
        const NoteObj = new Note(
          new RepositoryAdapter(new FetchApi()),
          new Validator()
        );
        const result = await NoteObj.getNote(notes[0].id as string);
        expect(result).toEqual(notes);
      });
    });

    describe("updating a note by id", () => {
      beforeAll(() => {
        fetchMock(200, {});
      });

      test("should return a success message", async () => {
        const NoteObj = new Note(
          new RepositoryAdapter(new FetchApi()),
          new Validator()
        );
        const note = createNotes(1)[0];
        const noteDTO = new NoteDTO();
        const payload = noteDTO.create(note);
        const result = await NoteObj.updateNote(note.id as string, payload);
        expect(result.message).toBe("Note updated");
        expect(result.isSuccess).toBe(true);
      });
    });

    describe("deleting a note by id", () => {
      beforeAll(() => {
        fetchMock(200, { name: "Note deleted" });
      });

      test("should return a success message", async () => {
        const NoteObj = new Note(
          new RepositoryAdapter(new FetchApi()),
          new Validator()
        );
        const note = createNotes(1)[0];
        const result = await NoteObj.deleteNote(note.id as string);
        expect(result.message).toBe("Note deleted");
        expect(result.isSuccess).toBe(true);
      });
    });
  });

  describe("testing failure", () => {
    describe("setting a new note", () => {
      beforeAll(() => {
        fetchMock(400, { message: "Error creating note" });
      });

      test("should return a failure message", async () => {
        const NoteObj = new Note(
          new RepositoryAdapter(new FetchApi()),
          new Validator()
        );
        const note = createNotes(1)[0];
        const noteDTO = new NoteDTO();
        const payload = noteDTO.create(note);
        try {
          await NoteObj.setNote(payload);
        } catch (error) {
          expect((error as Error).message).toBe("Error creating note");
        }
      });
    });

    describe("getting all notes", () => {
      beforeAll(() => {
        fetchMock(400, { message: "Error getting notes" });
      });

      test("should return a failure message", async () => {
        const NoteObj = new Note(
          new RepositoryAdapter(new FetchApi()),
          new Validator()
        );
        try {
          await NoteObj.getNotes();
        } catch (error) {
          expect((error as Error).message).toBe("Error getting notes");
        }
      });
    });

    describe("getting a note by id", () => {
      beforeAll(() => {
        fetchMock(400, { message: "Error getting note" });
      });

      test("should return a failure message", async () => {
        const NoteObj = new Note(
          new RepositoryAdapter(new FetchApi()),
          new Validator()
        );
        try {
          await NoteObj.getNote("1");
        } catch (error) {
          expect((error as Error).message).toBe("Error getting note");
        }
      });
    });

    describe("updating a note by id", () => {
      beforeAll(() => {
        fetchMock(400, { message: "Error updating note" });
      });

      test("should return a failure message", async () => {
        const NoteObj = new Note(
          new RepositoryAdapter(new FetchApi()),
          new Validator()
        );
        const note = createNotes(1)[0];
        const noteDTO = new NoteDTO();
        const payload = noteDTO.create(note);
        try {
          await NoteObj.updateNote(note.id as string, payload);
        } catch (error) {
          expect((error as Error).message).toBe("Error updating note");
        }
      });
    });
  });

  describe("testing payload not valid", () => {
    describe("setting a new note", () => {
      beforeAll(() => {
        fetchMock(200, {});
      });

      test("should return a failure message", async () => {
        const NoteObj = new Note(
          new RepositoryAdapter(new FetchApi()),
          new Validator()
        );
        const note = createNotes(1)[0];
        const noteDTO = new NoteDTO();
        const payload = noteDTO.create(note);
        payload.title = "";
        try {
          await NoteObj.setNote(payload);
        } catch (error) {
          expect((error as Error).message).toBe(
            "Please, check the data you are sending"
          );
        }
      });
    });

    describe("updating a note by id", () => {
      beforeAll(() => {
        fetchMock(200, {});
      });

      test("should return a failure message", async () => {
        const NoteObj = new Note(
          new RepositoryAdapter(new FetchApi()),
          new Validator()
        );
        const note = createNotes(1)[0];
        const noteDTO = new NoteDTO();
        const payload = noteDTO.create(note);
        payload.title = "";
        try {
          await NoteObj.updateNote(note.id as string, payload);
        } catch (error) {
          expect((error as Error).message).toBe(
            "Please, check the data you are sending"
          );
        }
      });
    });
  });
});
