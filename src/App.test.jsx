import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect, test } from "vitest";

test("renders the app component", () => {
  render(<App />);

  expect(screen.getByText("Library MS")).toBeInTheDocument();
});
