import { useState } from "react";

interface EntityPortraitProps {
  src: string;
  alt: string;
  aspect: "card" | "detail";
  fallbackLabel: string;
}

const ASPECT_CLASS: Record<EntityPortraitProps["aspect"], string> = {
  card: "aspect-archive-card",
  detail: "aspect-archive-portrait",
};

export function EntityPortrait({ src, alt, aspect, fallbackLabel }: EntityPortraitProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`archive-texture flex items-end justify-center overflow-hidden rounded-archive border border-archive-line ${ASPECT_CLASS[aspect]}`}
    >
      {hasError ? (
        <span className="mb-2 bg-archive-bg px-1.5 py-1 font-mono text-archive-2xs tracking-archive-wide text-archive-neutral">
          {fallbackLabel}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setHasError(true)}
          className="size-full object-cover"
        />
      )}
    </div>
  );
}
