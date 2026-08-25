import { ENTITY_GRID_COLS } from "../../constants/layout";
import { ENTITIES_PER_PAGE } from "../../constants/pagination";
import { EntityCard } from "./EntityCard";
import { EntityCardSkeleton } from "./EntityCardSkeleton";
import type { Character } from "../../types/character";

interface EntityGridProps {
  entities: Character[];
  selectedId: number | undefined;
  onSelect: (id: number) => void;
}

export function EntityGrid({ entities, selectedId, onSelect }: EntityGridProps) {
  return (
    <ul className={`grid ${ENTITY_GRID_COLS} mt-5.5 gap-5`}>
      {entities.map((entity) => (
        <EntityCard key={entity.id} entity={entity} selected={entity.id === selectedId} onSelect={onSelect} />
      ))}
    </ul>
  );
}

export function EntityGridSkeleton() {
  return (
    <ul aria-hidden="true" className={`grid ${ENTITY_GRID_COLS} mt-5.5 gap-5`}>
      {Array.from({ length: ENTITIES_PER_PAGE }, (_, index) => (
        <EntityCardSkeleton key={index} />
      ))}
    </ul>
  );
}
