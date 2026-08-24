import { httpClient } from "../lib/httpClient";
import type { Character } from "../types/character";

export const characterService = {
  async getById(id: number) {
    const res = await httpClient.get<Character>(`/character/${id}`);
    return res.data;
  },

  async getByEpisodes(episodeIds: string) {
    const res = await httpClient.get<Character[]>(`/episodes/${episodeIds}/characters`);
    return res.data;
  },
};
