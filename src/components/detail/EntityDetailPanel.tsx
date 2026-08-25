import { useMemo } from "react";
import { EntityPortrait } from "../common/EntityPortrait";
import { StatusIndicator } from "../common/StatusIndicator";
import { EntityDetailSection } from "./EntityDetailSection";
import { ENTITY_DETAIL_PORTRAIT_GRID_COLS, LABEL_COLUMN_NARROW } from "../../constants/layout";
import { formatEntityCode, padEntityId } from "../../utils/formatEntity";
import type { Character } from "../../types/character";

interface EntityDetailPanelProps {
  entity: Character;
}

export function EntityDetailPanel({ entity }: EntityDetailPanelProps) {
  const sections = useMemo(
    () => [
      {
        title: "ORIGEM",
        rows: [
          { label: "NOME", value: <span className="uppercase">{entity.origin.name}</span> },
        ],
      },
      {
        title: "LOCALIZAÇÃO",
        rows: [
          { label: "NOME", value: <span className="uppercase">{entity.location.name}</span> },
        ],
      },
      {
        title: "EPISÓDIOS",
        rows: [
          { label: "TOTAL", value: entity.episode.length },
        ],
      },
    ],
    [entity],
  );

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-baseline justify-between border-b border-archive-line pb-3">
        <h2 className="font-display text-archive-md tracking-archive-widest">DETALHES DO PERSONAGEM</h2>
        <p className="font-mono text-archive-sm tracking-archive-wide text-archive-muted">
          ID: {padEntityId(entity.id)}
        </p>
      </div>

      <div className={`grid ${ENTITY_DETAIL_PORTRAIT_GRID_COLS} gap-7.5 py-6.5`}>
        <EntityPortrait src={entity.image} alt={entity.name} aspect="detail" fallbackLabel="entity portrait" />

        <div className="flex flex-col">
          <p className="font-display text-archive-5xl font-bold uppercase leading-none tracking-archive-tight">
            {entity.name}
          </p>
          <p className="mt-1 font-display text-archive-4xl tracking-archive-wide text-archive-accent">
            {formatEntityCode(entity.id)}
          </p>

          <div className="my-5 h-px bg-archive-line" />

          <h3 className="font-mono text-archive-xs tracking-archive-widest text-archive-muted">STATUS</h3>
          <div className="mt-1.5">
            <StatusIndicator status={entity.status} size="md" />
          </div>

          <div className="my-4 h-px bg-archive-line" />

          <dl className={`grid ${LABEL_COLUMN_NARROW} gap-y-3 font-mono text-archive-sm tracking-archive-wide`}>
            <div className="contents">
              <dt className="text-archive-muted">SPECIES</dt>
              <dd className="uppercase">{entity.species}</dd>
            </div>
            <div className="contents">
              <dt className="text-archive-muted">TYPE</dt>
              <dd className="uppercase">{entity.type || "—"}</dd>
            </div>
            <div className="contents">
              <dt className="text-archive-muted">GENDER</dt>
              <dd className="uppercase">{entity.gender}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="rounded-archive border border-archive-line">
        {sections.map((section) => (
          <EntityDetailSection key={section.title} title={section.title} rows={section.rows} />
        ))}
      </div>
    </div>
  );
}
