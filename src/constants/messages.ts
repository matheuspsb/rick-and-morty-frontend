export const EMPTY_ARCHIVE_MESSAGE = {
  title: "FIELD ARCHIVE READY",
  description: "Enter one or more episode IDs to retrieve observed entities.",
} as const;

export const INVALID_EPISODE_IDS_MESSAGE = {
  title: "INVALID EPISODE IDENTIFIER",
  description: "The archive accepts only numeric episode identifiers.",
  examples: ["10", "28", "10,28"],
} as const;

export const EPISODE_NOT_FOUND_MESSAGE = {
  title: "NO EPISODE RECORD FOUND",
  description: "None of the supplied episode IDs exist in the archive.",
} as const;

export const ARCHIVE_CONNECTION_ERROR_MESSAGE = {
  title: "ARCHIVE CONNECTION ERROR",
  description: "The archive could not be reached. Try again in a moment.",
} as const;

export const EMPTY_ENTITY_DETAIL_MESSAGE = {
  title: "NO ENTITY SELECTED",
  description: "Select an observed entity from the archive to view its record.",
} as const;
