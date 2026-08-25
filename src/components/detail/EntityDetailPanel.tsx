import { useMemo } from "react";
import { EntityPortrait } from "../common/EntityPortrait";
import { StatusIndicator } from "../common/StatusIndicator";
import { EntityDetailSection } from "./EntityDetailSection";
import { ENTITY_DETAIL_PORTRAIT_GRID_COLS, LABEL_COLUMN_NARROW } from "../../constants/layout";
import { formatEntityCode, padEntityId } from "../../utils/formatEntity";
import type { Character } from "../../types/character";

interface EntityDetailPanelProps {
  entity: Character;
  onBack: () => void;
}

export function EntityDetailPanel({ entity, onBack }: EntityDetailPanelProps) {
  const sections = useMemo(
    () => [
      {
        title: "ORIGEM",
        rows: [{ label: "NOME", value: <span className="uppercase">{entity.origin.name}</span> }],
      },
      {
        title: "LOCALIZAÇÃO",
        rows: [{ label: "NOME", value: <span className="uppercase">{entity.location.name}</span> }],
      },
      {
        title: "EPISÓDIOS",
        rows: [{ label: "TOTAL", value: entity.episode.length }],
      },
    ],
    [entity],
  );

  return (
    <div className="flex flex-1 flex-col">
      <button
        type="button"
        onClick={onBack}
        className="mb-3 flex items-center gap-1.5 self-start font-display text-archive-sm tracking-archive-wider text-archive-muted hover:text-archive-ink lg:hidden"
      >
        ← VOLTAR
      </button>

      <div className="flex items-baseline justify-between border-b border-archive-line pb-2.5">
        <h2 className="font-display text-archive-base tracking-archive-widest">DETALHES DO PERSONAGEM</h2>
        <p className="font-mono text-archive-xs tracking-archive-wide text-archive-muted">
          ID: {padEntityId(entity.id)}
        </p>
      </div>

      <div className={`grid ${ENTITY_DETAIL_PORTRAIT_GRID_COLS} gap-4 py-4 lg:gap-5 lg:py-5`}>
        <EntityPortrait src={entity.image} alt={entity.name} aspect="detail" fallbackLabel="entity portrait" />

        <div className="flex flex-col">
          <p className="font-display text-archive-2xl font-bold uppercase leading-tight tracking-archive-tight lg:text-archive-3xl">
            {entity.name}
          </p>
          <p className="mt-0.5 font-display text-archive-lg tracking-archive-wide text-archive-accent lg:text-archive-xl">
            {formatEntityCode(entity.id)}
          </p>

          <div className="my-3 h-px bg-archive-line" />

          <h3 className="font-mono text-archive-2xs tracking-archive-widest text-archive-muted">STATUS</h3>
          <div className="mt-1">
            <StatusIndicator status={entity.status} />
          </div>

          <div className="my-3 h-px bg-archive-line" />

          <dl className={`grid ${LABEL_COLUMN_NARROW} gap-y-2 font-mono text-archive-xs tracking-archive-wide`}>
            <div className="contents">
              <dt className="text-archive-muted">ESPÉCIE</dt>
              <dd className="uppercase">{entity.species}</dd>
            </div>
            <div className="contents">
              <dt className="text-archive-muted">TIPO</dt>
              <dd className="uppercase">{entity.type || "—"}</dd>
            </div>
            <div className="contents">
              <dt className="text-archive-muted">GÊNERO</dt>
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
