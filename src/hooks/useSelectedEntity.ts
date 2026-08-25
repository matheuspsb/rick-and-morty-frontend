import { useCallback, useMemo, useState } from "react";
import type { Character } from "../types/character";

export function useSelectedEntity(entities: readonly Character[]) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedEntity = useMemo(
    () => entities.find((entity) => entity.id === selectedId) ?? null,
    [entities, selectedId],
  );

  const select = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  const clear = useCallback(() => {
    setSelectedId(null);
  }, []);

  return { selectedEntity, select, clear };
}
