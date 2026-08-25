import type { UseFormReturn } from "react-hook-form";
import { EpisodeQueryForm } from "../query/EpisodeQueryForm";
import { ArchiveResults } from "../entities/ArchiveResults";
import { ArchiveDetail } from "../detail/ArchiveDetail";
import { usePagination } from "../../hooks/usePagination";
import { useSelectedEntity } from "../../hooks/useSelectedEntity";
import type { useObservedEntities } from "../../hooks/useObservedEntities";
import { ENTITIES_PER_PAGE } from "../../constants/pagination";
import type { EpisodeQueryFormValues, EpisodeQuerySubmitHandler } from "../../hooks/useEpisodeQuery";

interface ArchiveWorkspaceProps {
  form: UseFormReturn<EpisodeQueryFormValues>;
  onSubmit: EpisodeQuerySubmitHandler;
  submittedEpisodeIds: string | null;
  entitiesQuery: ReturnType<typeof useObservedEntities>;
}

export function ArchiveWorkspace({ form, onSubmit, submittedEpisodeIds, entitiesQuery }: ArchiveWorkspaceProps) {
  const entities = entitiesQuery.data ?? [];
  const { page, pageCount, pageItems, goToPage } = usePagination(entities, ENTITIES_PER_PAGE);
  const { selectedEntity, select } = useSelectedEntity(entities);

  return (
    <>
      <main className="border-archive-line px-7 py-6 xl:min-h-0 xl:overflow-y-auto xl:border-r">
        <EpisodeQueryForm form={form} onSubmit={onSubmit} />
        <ArchiveResults
          submittedEpisodeIds={submittedEpisodeIds}
          entitiesQuery={entitiesQuery}
          entities={entities}
          pageItems={pageItems}
          page={page}
          pageCount={pageCount}
          goToPage={goToPage}
          selectedId={selectedEntity?.id}
          onSelect={select}
        />
      </main>

      <aside className="flex flex-col px-6.5 py-6 xl:min-h-0 xl:overflow-y-auto">
        <ArchiveDetail
          submittedEpisodeIds={submittedEpisodeIds}
          isLoading={entitiesQuery.isLoading}
          selectedEntity={selectedEntity}
        />
      </aside>
    </>
  );
}
