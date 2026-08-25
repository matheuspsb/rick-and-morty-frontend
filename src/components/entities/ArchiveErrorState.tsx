import { getArchiveErrorContent } from "../../utils/archiveError";

interface ArchiveErrorStateProps {
  error: unknown;
}

export function ArchiveErrorState({ error }: ArchiveErrorStateProps) {
  const content = getArchiveErrorContent(error);

  return (
    <div role="alert" className="mt-10 flex flex-col items-center gap-2.5 py-16 text-center">
      <p className={`font-display text-archive-2xl tracking-archive-wide ${content.toneClassName}`}>
        {content.title}
      </p>
      <p className="max-w-xs text-archive-base text-archive-muted">{content.description}</p>
      {content.examples && (
        <ul className="mt-1 flex flex-col gap-0.5 font-mono text-archive-base text-archive-ink">
          {content.examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
