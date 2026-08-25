import type { UseFormReturn } from "react-hook-form";
import type { EpisodeQueryFormValues, EpisodeQuerySubmitHandler } from "../../hooks/useEpisodeQuery";

interface EpisodeQueryFormProps {
  form: UseFormReturn<EpisodeQueryFormValues>;
  onSubmit: EpisodeQuerySubmitHandler;
}

const HEADING_ID = "query-episodes-heading";
const DESCRIPTION_ID = "query-episodes-description";
const ERROR_ID = "query-episodes-error";

export function EpisodeQueryForm({ form, onSubmit }: EpisodeQueryFormProps) {
  const {
    register,
    formState: { errors },
  } = form;
  const errorMessage = errors.episodeIds?.message;

  return (
    <form
      onSubmit={(event) => {
        void onSubmit(event);
      }}
      noValidate
    >
      <div className="flex flex-col gap-1">
        <h2 id={HEADING_ID} className="font-display text-archive-md tracking-archive-widest">
          CONSULTAR EPISÓDIOS
        </h2>
        <p id={DESCRIPTION_ID} className="text-archive-base text-archive-muted">
          Digite um ou mais IDs de episódio separados por vírgula
        </p>
      </div>

      <div className="mt-4 flex gap-3.5">
        <input
          {...register("episodeIds")}
          type="text"
          inputMode="numeric"
          placeholder="10,28"
          aria-labelledby={HEADING_ID}
          aria-describedby={errorMessage ? `${DESCRIPTION_ID} ${ERROR_ID}` : DESCRIPTION_ID}
          aria-invalid={errorMessage ? true : undefined}
          className="max-w-107.5 flex-1 rounded-archive border border-archive-line bg-archive-panel px-3.5 py-3 font-mono text-archive-lg text-archive-ink outline-none focus-visible:border-archive-accent"
        />
        <button
          type="submit"
          className="rounded-archive border border-archive-accent bg-archive-accent px-5.5 font-display text-archive-lg tracking-archive-wider text-archive-bg transition-colors hover:border-archive-ink hover:bg-archive-ink"
        >
          CARREGAR ARQUIVO
        </button>
      </div>

      {errorMessage && (
        <p id={ERROR_ID} role="alert" className="mt-2.5 text-archive-base text-archive-error-400">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
