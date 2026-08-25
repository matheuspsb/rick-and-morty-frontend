interface EmptyEntityDetailProps {
  title: string;
  description: string;
}

export function EmptyEntityDetail({ title, description }: EmptyEntityDetailProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2.5 py-16 text-center">
      <p className="font-display text-archive-xl tracking-archive-wide">{title}</p>
      <p className="max-w-64 text-archive-base text-archive-muted">{description}</p>
    </div>
  );
}
