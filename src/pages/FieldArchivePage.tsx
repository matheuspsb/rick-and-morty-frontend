import { ArchiveHeader } from "../components/layout/ArchiveHeader";
import { ArchiveSidebar } from "../components/layout/ArchiveSidebar";
import { ArchiveWorkspace } from "../components/layout/ArchiveWorkspace";
import { ARCHIVE_SHELL_GRID_COLS } from "../constants/layout";
import { useEpisodeQuery } from "../hooks/useEpisodeQuery";
import { useObservedEntities } from "../hooks/useObservedEntities";

export function FieldArchivePage() {
  const { form, onSubmit, submittedEpisodeIds } = useEpisodeQuery();
  const entitiesQuery = useObservedEntities(submittedEpisodeIds);

  return (
    <div className="flex min-h-screen flex-col bg-archive-bg font-sans text-archive-ink lg:h-screen lg:overflow-hidden">
      <ArchiveHeader />
      <div className={`flex flex-col lg:min-h-0 lg:flex-1 lg:grid ${ARCHIVE_SHELL_GRID_COLS}`}>
        <ArchiveSidebar />
        <ArchiveWorkspace
          key={submittedEpisodeIds ?? "idle"}
          form={form}
          onSubmit={onSubmit}
          submittedEpisodeIds={submittedEpisodeIds}
          entitiesQuery={entitiesQuery}
        />
      </div>
    </div>
  );
}
