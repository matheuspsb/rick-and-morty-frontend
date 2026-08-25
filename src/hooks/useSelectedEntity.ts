import { useCallback, useMemo, useState } from "react";
import type { Character } from "../types/character";

export function useSelectedEntity(entities: readonly Character[]) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedEntity = useMemo(
    () => entities.find((entity) => entity.id === selectedId) ?? entities[0] ?? null,
    [entities, selectedId],
  );

  const select = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  return { selectedEntity, select };
}
