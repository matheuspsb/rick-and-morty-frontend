import { memo } from "react";
import { STATUS_THEME } from "../../constants/statusTheme";
import type { Character } from "../../types/character";

interface StatusIndicatorProps {
  status: Character["status"];
  size?: "sm" | "md";
}

const TEXT_SIZE: Record<NonNullable<StatusIndicatorProps["size"]>, string> = {
  sm: "text-archive-2xs font-mono",
  md: "text-archive-xl font-display",
};

const DOT_SIZE: Record<NonNullable<StatusIndicatorProps["size"]>, string> = {
  sm: "size-1.5",
  md: "size-2.5",
};

function StatusIndicatorComponent({ status, size = "sm" }: StatusIndicatorProps) {
  const theme = STATUS_THEME[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 tracking-archive-wide ${theme.textClassName} ${TEXT_SIZE[size]}`}
    >
      <span aria-hidden="true" className={`inline-block rounded-full ${theme.dotClassName} ${DOT_SIZE[size]}`} />
      {theme.label}
    </span>
  );
}

export const StatusIndicator = memo(StatusIndicatorComponent);
