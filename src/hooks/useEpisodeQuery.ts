import { useState, type BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { INVALID_EPISODE_IDS_MESSAGE } from "../constants/messages";
import { isValidEpisodeIds, normalizeEpisodeIds } from "../utils/episodeIds";

export interface EpisodeQueryFormValues {
  episodeIds: string;
}

export type EpisodeQuerySubmitHandler = (event?: BaseSyntheticEvent) => Promise<void>;

export function useEpisodeQuery() {
  const [submittedEpisodeIds, setSubmittedEpisodeIds] = useState<string | null>(null);

  const form = useForm<EpisodeQueryFormValues>({
    defaultValues: { episodeIds: "" },
  });

  const onSubmit = form.handleSubmit(({ episodeIds }) => {
    const normalized = normalizeEpisodeIds(episodeIds);

    if (!isValidEpisodeIds(normalized)) {
      form.setError("episodeIds", {
        type: "pattern",
        message: INVALID_EPISODE_IDS_MESSAGE.description,
      });
      return;
    }

    setSubmittedEpisodeIds(normalized);
  });

  return { form, onSubmit, submittedEpisodeIds };
}
