import { EMPTY_ARCHIVE_MESSAGE } from "../../constants/messages";

export function EmptyArchiveState() {
  return (
    <div className="mt-10 flex flex-col items-center gap-2.5 py-16 text-center">
      <p className="font-display text-archive-2xl tracking-archive-wide">{EMPTY_ARCHIVE_MESSAGE.title}</p>
      <p className="max-w-xs text-archive-base text-archive-muted">{EMPTY_ARCHIVE_MESSAGE.description}</p>
    </div>
  );
}
