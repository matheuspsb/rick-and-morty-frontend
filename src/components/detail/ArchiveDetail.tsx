import { EntityDetailPanel } from "./EntityDetailPanel";
import { EntityDetailSkeleton } from "./EntityDetailSkeleton";
import { EmptyEntityDetail } from "./EmptyEntityDetail";
import { EMPTY_ENTITY_DETAIL_MESSAGE } from "../../constants/messages";
import type { Character } from "../../types/character";

interface ArchiveDetailProps {
  submittedEpisodeIds: string | null;
  isLoading: boolean;
  selectedEntity: Character | null;
}

export function ArchiveDetail({ submittedEpisodeIds, isLoading, selectedEntity }: ArchiveDetailProps) {
  if (submittedEpisodeIds !== null && isLoading) {
    return <EntityDetailSkeleton />;
  }

  if (selectedEntity) {
    return <EntityDetailPanel entity={selectedEntity} />;
  }

  return (
    <EmptyEntityDetail title={EMPTY_ENTITY_DETAIL_MESSAGE.title} description={EMPTY_ENTITY_DETAIL_MESSAGE.description} />
  );
}
