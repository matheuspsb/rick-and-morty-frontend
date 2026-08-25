import { EntitySummaryBar } from "./EntitySummaryBar";
import { EntityGrid, EntityGridSkeleton } from "./EntityGrid";
import { ArchivePagination } from "./ArchivePagination";
import { EmptyArchiveState } from "./EmptyArchiveState";
import { ArchiveErrorState } from "./ArchiveErrorState";
import type { useObservedEntities } from "../../hooks/useObservedEntities";
import type { Character } from "../../types/character";

interface ArchiveResultsProps {
  submittedEpisodeIds: string | null;
  entitiesQuery: ReturnType<typeof useObservedEntities>;
  entities: Character[];
  pageItems: Character[];
  page: number;
  pageCount: number;
  goToPage: (page: number) => void;
  selectedId: number | undefined;
  onSelect: (id: number) => void;
}

export function ArchiveResults({
  submittedEpisodeIds,
  entitiesQuery,
  entities,
  pageItems,
  page,
  pageCount,
  goToPage,
  selectedId,
  onSelect,
}: ArchiveResultsProps) {
  if (submittedEpisodeIds === null) {
    return <EmptyArchiveState />;
  }

  if (entitiesQuery.isError) {
    return <ArchiveErrorState error={entitiesQuery.error} />;
  }

  if (entitiesQuery.isLoading) {
    return (
      <>
        <div aria-hidden="true" className="mt-6.5 h-11 animate-pulse rounded-archive bg-archive-line/40" />
        <p role="status" className="sr-only">
          Loading observed entities…
        </p>
        <EntityGridSkeleton />
      </>
    );
  }

  return (
    <>
      <EntitySummaryBar count={entities.length} episodeIds={submittedEpisodeIds} />
      <EntityGrid entities={pageItems} selectedId={selectedId} onSelect={onSelect} />
      <ArchivePagination page={page} pageCount={pageCount} onGoToPage={goToPage} />
    </>
  );
}
