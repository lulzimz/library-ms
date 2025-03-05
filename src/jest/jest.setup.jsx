import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import "@testing-library/jest-dom";

import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

export function customRender(ui, extendedRenderOptions = {}) {
  const { ...renderOptions } = extendedRenderOptions;

  const Wrapper = ({ children }) => (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <ThemeProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

// re-export everything
export * from "@testing-library/react";

export { customRender as render };

Object.defineProperty(window, "matchMedia", {
  value: () => {
    return {
      matches: false,
      addEventListener: () => {},
      removeEventListener: () => {},
    };
  },
});
