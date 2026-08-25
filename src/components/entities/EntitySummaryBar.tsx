import { formatEpisodeIdsForDisplay } from "../../utils/episodeIds";

interface EntitySummaryBarProps {
  count: number;
  episodeIds: string;
}

export function EntitySummaryBar({ count, episodeIds }: EntitySummaryBarProps) {
  return (
    <div className="mt-6.5 flex flex-wrap items-baseline gap-8 border-y border-archive-line py-3.5">
      <p className="font-display text-archive-3xl tracking-archive-snug">{count} PERSONAGENS OBSERVADOS</p>
      <div className="flex flex-wrap gap-8 font-mono text-archive-sm tracking-archive-wide text-archive-muted sm:ml-auto">
        <span>EPISÓDIOS: {formatEpisodeIdsForDisplay(episodeIds)}</span>
        <span>RETRIEVED: {count} RECORDS</span>
      </div>
    </div>
  );
}
