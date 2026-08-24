import { memo } from "react";
import { StatusIndicator } from "../common/StatusIndicator";
import { EntityPortrait } from "../common/EntityPortrait";
import { STATUS_THEME } from "../../constants/statusTheme";
import { formatEntityCode } from "../../utils/formatEntity";
import type { Character } from "../../types/character";

interface EntityCardProps {
  entity: Character;
  selected: boolean;
  onSelect: (id: number) => void;
}

function EntityCardComponent({ entity, selected, onSelect }: EntityCardProps) {
  return (
    <li>
      <button
        type="button"
        aria-pressed={selected}
        aria-label={`${entity.name} — ${formatEntityCode(entity.id)}, ${STATUS_THEME[entity.status].label}`}
        onClick={() => onSelect(entity.id)}
        className={`block w-full rounded-archive border bg-archive-panel text-left transition-transform duration-150 ease-out hover:-translate-y-px hover:border-archive-ink focus-visible:-translate-y-px focus-visible:border-archive-ink focus-visible:outline-none ${
          selected ? "border-archive-ink" : "border-archive-line"
        }`}
      >
        <EntityPortrait src={entity.image} alt={entity.name} aspect="card" fallbackLabel="portrait / api" />

        <div className="flex flex-col gap-2.5 px-3 py-2.5">
          <p className="font-display text-archive-lg uppercase leading-tight tracking-archive-snug">{entity.name}</p>
          <div className="flex items-center justify-between gap-2">
            <span className="font-display text-archive-base tracking-archive-wide text-archive-muted">
              {formatEntityCode(entity.id)}
            </span>
            <StatusIndicator status={entity.status} />
          </div>
          <div className="flex flex-col gap-1 pt-1 font-mono text-archive-xs tracking-archive-normal uppercase">
            <span>{entity.species}</span>
            <span className="text-archive-muted">{entity.origin.name}</span>
          </div>
        </div>
      </button>
    </li>
  );
}

export const EntityCard = memo(EntityCardComponent);
