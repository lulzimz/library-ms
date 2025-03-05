import { screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { AppSidebar } from "../app-sidebar";
import { render } from "@/jest/jest.setup";
import { routes } from "@/constants/routes";

test("renders the app component", () => {
  render(<AppSidebar menuItems={routes} />);

  expect(screen.getByText("Dashboard")).toBeInTheDocument();
});
