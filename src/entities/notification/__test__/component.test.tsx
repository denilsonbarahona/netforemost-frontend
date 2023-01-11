import React from "react";
import { expect, test, describe, beforeAll, afterAll } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { BannerNotification } from "../infrastructure/components";

describe("BannerNotification", () => {
  describe("when type is error", () => {
    beforeAll(() => {
      render(<BannerNotification message="message" type="error" />);
    });

    afterAll(() => {
      cleanup();
    });

    test("should render", () => {
      expect(screen.getByRole("alert")).toBeTruthy();
    });

    test("should render message", () => {
      expect(screen.getByText("message")).toBeTruthy();
    });

    test("should render error color", () => {
      expect(screen.getByRole("alert").className).toContain("bg-red-600");
    });
  });

  describe("when type is success", () => {
    beforeAll(() => {
      render(<BannerNotification message="message" type="success" />);
    });
    afterAll(() => {
      cleanup();
    });
    test("should render", () => {
      expect(screen.getByRole("alert")).toBeTruthy();
    });

    test("should render message", () => {
      expect(screen.getByText("message")).toBeTruthy();
    });

    test("should render success color", () => {
      expect(screen.getByRole("alert").className).toContain("bg-lime-500");
    });
  });
});
