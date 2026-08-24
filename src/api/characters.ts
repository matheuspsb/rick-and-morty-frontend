import { apiFetch } from "./client";
import type { Character } from "../types/character";

export function getCharacter(id: number) {
  return apiFetch<Character>(`/character/${id}`);
}

export function getCharactersByEpisodes(episodeIds: string) {
  return apiFetch<Character[]>(`/episodes/${episodeIds}/characters`);
}
