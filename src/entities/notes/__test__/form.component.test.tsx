import React from "react";
import { vi, expect, test, describe, beforeAll, afterAll } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import ProviderMock from "../../../__mocks__/redux.mock";
import FormNote from "../infrastructure/components/form.note.component";

describe("FormNote", () => {
  describe("form is submitted", () => {
    const formFn = { onsubmit: () => console.log("submitted") };
    const spy = vi.spyOn(formFn, "onsubmit");
    beforeAll(() => {
      render(
        <ProviderMock>
          <FormNote onSubmit={formFn.onsubmit} />
        </ProviderMock>
      );
    });

    afterAll(() => {
      cleanup();
    });

    test("submit should be called", () => {
      const form = screen.getByRole("form");
      const title = screen.getByPlaceholderText("Title");
      const content = screen.getByPlaceholderText("Text Content");
      const topic = screen.getByRole("combobox");
      const date = screen.getByLabelText("date");
      fireEvent.change(title, { target: { value: "test" } });
      fireEvent.change(content, { target: { value: "test" } });
      fireEvent.change(topic, { target: { value: "test" } });
      fireEvent.change(date, { target: { value: "2021-08-08" } });
      fireEvent.submit(form);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
