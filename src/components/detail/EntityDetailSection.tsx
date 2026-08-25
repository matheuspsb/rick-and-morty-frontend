import { memo, type ReactNode } from "react";
import { LABEL_COLUMN_WIDE } from "../../constants/layout";

interface DetailRow {
  label: string;
  value: ReactNode;
}

interface EntityDetailSectionProps {
  title: string;
  rows: DetailRow[];
  bordered?: boolean;
}

function EntityDetailSectionComponent({ title, rows, bordered = true }: EntityDetailSectionProps) {
  return (
    <div className={bordered ? "border-b border-archive-line px-4 py-3.5 last:border-b-0" : "px-4 py-3.5"}>
      <h3 className="mb-3 font-display text-archive-lg tracking-archive-wider">{title}</h3>
      <dl className={`grid ${LABEL_COLUMN_WIDE} gap-y-2.5 font-mono text-archive-sm tracking-archive-normal`}>
        {rows.map((row) => (
          <div key={row.label} className="contents">
            <dt className="text-archive-muted">{row.label}</dt>
            <dd className="min-w-0">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export const EntityDetailSection = memo(EntityDetailSectionComponent);
