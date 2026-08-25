import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, it } from "vitest";
import App from "./App";

function renderApp() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
  );
}

describe("App", () => {
  it("renders the Field Archive shell", () => {
    renderApp();

    expect(screen.getByRole("heading", { name: "FIELD ARCHIVE" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("10,28")).toBeInTheDocument();
  });
});
