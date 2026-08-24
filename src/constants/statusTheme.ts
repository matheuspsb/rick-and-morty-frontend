import type { Character } from "../types/character";

interface StatusTheme {
  label: string;
  dotClassName: string;
  textClassName: string;
}

export const STATUS_THEME: Record<Character["status"], StatusTheme> = {
  Alive: {
    label: "ALIVE",
    dotClassName: "bg-status-alive",
    textClassName: "text-status-alive",
  },
  Dead: {
    label: "DEAD",
    dotClassName: "bg-status-dead",
    textClassName: "text-status-dead",
  },
  unknown: {
    label: "UNKNOWN",
    dotClassName: "bg-status-unknown",
    textClassName: "text-status-unknown",
  },
};
