import React from "react";
import { expect, test, describe, beforeAll, afterAll } from "vitest";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import ProviderMock from "../../__mocks__/redux.mock";
import { BrowserRouter } from "react-router-dom";
import ViewNotesPage from "../pages/view.notes.page.component";
import fetchMock from "../../__mocks__/fetch.mock";
import { createNotes } from "../../__mocks__/create-notes";
import { getHyphenDate } from "../../utils/dates";

describe("ViewNotesPage", () => {
  describe("success viewing notes", () => {
    const notes = createNotes(5);
    let notesFetch: any[];
    beforeAll(() => {
      notesFetch = notes.map((note) => ({
        ...note,
        date: note.date.toISOString(),
        topic: "onDemand",
      }));
      fetchMock(200, notesFetch);
      render(
        <ProviderMock>
          <ViewNotesPage />
        </ProviderMock>,
        { wrapper: BrowserRouter }
      );
    });

    afterAll(() => {
      cleanup();
    });

    test("First fetched data should be visible", async () => {
      await waitFor(() => {
        const title = screen.getByText(notesFetch[0].title);
        const date = screen.getByText(getHyphenDate(notesFetch[0].date));
        expect(title).toBeTruthy();
        expect(date).toBeTruthy();
      });
    });

    test("last fetched data should be visible", async () => {
      await waitFor(() => {
        const title = screen.getByText(notesFetch[4].title);
        const date = screen.getByText(getHyphenDate(notesFetch[4].date));
        expect(title).toBeTruthy();
        expect(date).toBeTruthy();
      });
    });
  });
});
