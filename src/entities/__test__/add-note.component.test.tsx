import React from "react";
import { expect, test, describe, beforeAll, afterAll } from "vitest";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import ProviderMock from "../../__mocks__/redux.mock";
import AddNote from "../pages/add-note.page.componet";
import fetchMock from "../../__mocks__/fetch.mock";

describe("AddNote", () => {
  const SubmitAction = (...params: string[]) => {
    const title = screen.getByPlaceholderText("Title");
    const content = screen.getByPlaceholderText("Text Content");
    const topic = screen.getByRole("combobox");
    const date = screen.getByLabelText("date");
    const submit = screen.getByRole("button", { name: "Save Note" });
    fireEvent.change(title, { target: { value: params[0] } });
    fireEvent.change(content, { target: { value: params[1] } });
    fireEvent.change(topic, { target: { value: params[2] } });
    fireEvent.change(date, { target: { value: params[3] } });
    fireEvent.click(submit);
  };
  describe("success adding a note", () => {
    beforeAll(() => {
      fetchMock(200, {});
      render(
        <ProviderMock>
          <AddNote />
        </ProviderMock>
      );
    });

    afterAll(() => {
      cleanup();
    });

    test("success banner should be visible after submit", async () => {
      SubmitAction("test", "test", "test", "2021-08-08");
      await waitFor(() => {
        const alert = screen.getByRole("alert");
        expect(alert).toBeDefined();
        expect(screen.getByText(/Note created/i)).toBeDefined();
      });
    });

    test("error banner should be visible when payload is invalid", async () => {
      SubmitAction("", "", "", "");
      await waitFor(() => {
        const alert = screen.getByRole("alert");
        expect(alert).toBeDefined();
        expect(
          screen.getByText(/Please, check the data you are sending/i)
        ).toBeDefined();
      });
    });
  });

  describe("error adding a note", () => {
    beforeAll(() => {
      fetchMock(400, { message: "Error creating note" });
      render(
        <ProviderMock>
          <AddNote />
        </ProviderMock>
      );
    });

    afterAll(() => {
      cleanup();
    });

    test("error banner should be visible when payload is invalid", async () => {
      SubmitAction("", "", "", "");
      await waitFor(() => {
        const alert = screen.getByRole("alert");
        expect(alert).toBeDefined();
        expect(
          screen.getByText(/Please, check the data you are sending/i)
        ).toBeDefined();
      });
    });

    test("error banner should be visible API fails", async () => {
      SubmitAction("test", "test", "test", "2021-08-08");
      await waitFor(() => {
        const alert = screen.getByRole("alert");
        expect(alert).toBeDefined();
        expect(screen.getByText(/Error creating note/i)).toBeDefined();
      });
    });
  });
});
