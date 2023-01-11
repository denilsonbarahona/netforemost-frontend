import React from "react";
import { expect, test, describe, beforeAll, afterAll } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProviderMock from "../../../__mocks__/redux.mock";
import ItemNote from "../infrastructure/components/item.note.component";
import { createNotes } from "../../../__mocks__/create-notes";
import { getHyphenDate } from "../../../utils/dates";

describe("ItemNote", () => {
  const note = createNotes(1)[0];

  describe("item is rendered", () => {
    beforeAll(() => {
      render(
        <ProviderMock>
          <ItemNote {...note} />
        </ProviderMock>,
        { wrapper: BrowserRouter }
      );
    });

    afterAll(() => {
      cleanup();
    });

    test("item should be rendered", () => {
      const title = screen.getByText(note.title);
      const topic = screen.getByText(note.topic as string);
      const date = screen.getByText(getHyphenDate(note.date));
      expect(title).toBeTruthy();
      expect(topic).toBeTruthy();
      expect(date).toBeTruthy();
    });
  });
});
