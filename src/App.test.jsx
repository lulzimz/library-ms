import { screen } from "@testing-library/react";
import App from "./App";
import { expect, test } from "vitest";
import { render } from "./jest/jest.setup";

test("renders the app component", () => {
  render(<App />);

  expect(screen.getByText("Login")).toBeInTheDocument();
});
