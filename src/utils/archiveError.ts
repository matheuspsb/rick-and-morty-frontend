import { ApiError } from "../lib/httpClient";
import {
  ARCHIVE_CONNECTION_ERROR_MESSAGE,
  EPISODE_NOT_FOUND_MESSAGE,
  INVALID_EPISODE_IDS_MESSAGE,
} from "../constants/messages";

export interface ArchiveErrorContent {
  title: string;
  description: string;
  examples?: readonly string[];
  toneClassName: string;
}

export function getArchiveErrorContent(error: unknown): ArchiveErrorContent {
  if (error instanceof ApiError && error.status === 400) {
    return { ...INVALID_EPISODE_IDS_MESSAGE, toneClassName: "text-archive-error-400" };
  }

  if (error instanceof ApiError && error.status === 404) {
    return { ...EPISODE_NOT_FOUND_MESSAGE, toneClassName: "text-archive-error-404" };
  }

  return { ...ARCHIVE_CONNECTION_ERROR_MESSAGE, toneClassName: "text-archive-muted" };
}
