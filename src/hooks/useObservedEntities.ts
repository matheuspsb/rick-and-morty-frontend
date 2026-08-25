import { useQuery } from "@tanstack/react-query";
import { characterService } from "../services/characterService.service";

export function useObservedEntities(episodeIds: string | null) {
  return useQuery({
    queryKey: ["observed-entities", episodeIds],
    queryFn: () => characterService.getByEpisodes(episodeIds as string),
    enabled: episodeIds !== null,
  });
}
