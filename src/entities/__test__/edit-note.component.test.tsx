import React from "react";
import { expect, test, describe, beforeAll, afterAll } from "vitest";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import ProviderMock from "../../__mocks__/redux.mock";
import EditNotePage from "../pages/edit.note.page.component";
import fetchMock from "../../__mocks__/fetch.mock";
import { createNotes } from "../../__mocks__/create-notes";
import { getHyphenDate } from "../../utils/dates";

describe("EditNotePage", () => {
  describe("success editing a note", () => {
    const notes = createNotes(1)[0];
    beforeAll(() => {
      fetchMock(200, [
        { ...notes, date: notes.date.toISOString(), topic: "onDemand" },
      ]);
      render(
        <ProviderMock>
          <EditNotePage />
        </ProviderMock>
      );
    });

    afterAll(() => {
      cleanup();
    });

    test("fetched data should be visible", async () => {
      await waitFor(() => {
        const title = screen.getByLabelText("title");
        const content = screen.getByLabelText("body");
        const topic = screen.getByLabelText("topic");
        const date = screen.getByLabelText("date");
        expect((title as HTMLInputElement).value).toBe(notes.title);
        expect((content as HTMLTextAreaElement).value).toBe(notes.body);
        expect((topic as HTMLSelectElement).value).toBe("onDemand");
        expect((date as HTMLInputElement).value).toBe(
          getHyphenDate(notes.date)
        );
      });
    });
  });
});
