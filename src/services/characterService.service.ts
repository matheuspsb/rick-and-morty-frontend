import { httpClient } from "../lib/httpClient";
import type { Character } from "../types/character";

export const characterService = {
  getById: async (id: number): Promise<Character> => {
    const res = await httpClient.get<Character>(`/character/${id}`);
    return res.data;
  },

  getByEpisodes: async (episodeIds: string): Promise<Character[]> => {
    const res = await httpClient.get<Character[]>(`/episodes/${episodeIds}/characters`);
    return res.data;
  },
};
