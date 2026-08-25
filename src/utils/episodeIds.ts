const EPISODE_IDS_PATTERN = /^\d+(,\d+)*$/;

export function normalizeEpisodeIds(rawInput: string): string {
  return rawInput
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean)
    .join(",");
}

export function isValidEpisodeIds(episodeIds: string): boolean {
  return EPISODE_IDS_PATTERN.test(episodeIds);
}

export function formatEpisodeIdsForDisplay(episodeIds: string): string {
  return episodeIds.split(",").join(", ");
}
