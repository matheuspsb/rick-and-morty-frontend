import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { FieldArchivePage } from "./FieldArchivePage";
import { characterService } from "../services/characterService.service";
import { ApiError } from "../lib/httpClient";
import { CHARACTER_FIXTURES } from "../test/fixtures";

vi.mock("../services/characterService.service", () => ({
  characterService: {
    getByEpisodes: vi.fn(),
  },
}));

const getByEpisodesMock = vi.mocked(characterService.getByEpisodes);

function renderPage() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <FieldArchivePage />
    </QueryClientProvider>,
  );
}

beforeEach(() => {
  getByEpisodesMock.mockReset();
});

describe("FieldArchivePage", () => {
  it("shows the empty state before any query is submitted", () => {
    renderPage();

    expect(screen.getByText("ARQUIVO PRONTO")).toBeInTheDocument();
    expect(getByEpisodesMock).not.toHaveBeenCalled();
  });

  it("shows an inline validation error and skips the request for invalid input", async () => {
    const user = userEvent.setup();
    renderPage();

    await user.type(screen.getByPlaceholderText("10,28"), "abc");
    await user.click(screen.getByRole("button", { name: "CARREGAR ARQUIVO" }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/identificadores numéricos de episódio/i);
    expect(getByEpisodesMock).not.toHaveBeenCalled();
  });

  it("loads entities, selects the first one by default and switches selection on click", async () => {
    getByEpisodesMock.mockResolvedValue(CHARACTER_FIXTURES);
    const user = userEvent.setup();
    renderPage();

    await user.type(screen.getByPlaceholderText("10,28"), "10,28");
    await user.click(screen.getByRole("button", { name: "CARREGAR ARQUIVO" }));

    await waitFor(() => expect(getByEpisodesMock).toHaveBeenCalledWith("10,28"));

    expect(await screen.findByText("3 PERSONAGENS OBSERVADOS")).toBeInTheDocument();
    expect(screen.getAllByText("Rick Sanchez")).toHaveLength(2);

    await user.click(screen.getByRole("button", { name: /morty smith/i }));

    expect(screen.getAllByText("Morty Smith")).toHaveLength(2);
  });

  it("shows the 404 archive error state when no episode record is found", async () => {
    getByEpisodesMock.mockRejectedValue(new ApiError("Route not found", 404));
    const user = userEvent.setup();
    renderPage();

    await user.type(screen.getByPlaceholderText("10,28"), "9999");
    await user.click(screen.getByRole("button", { name: "CARREGAR ARQUIVO" }));

    expect(await screen.findByText("NENHUM REGISTRO DE EPISÓDIO ENCONTRADO")).toBeInTheDocument();
  });
});
