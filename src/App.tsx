import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { characterService } from "./services/characterService.service";

interface SearchForm {
  id: string;
}

function App() {
  const { register, handleSubmit, watch } = useForm<SearchForm>({
    defaultValues: { id: "" },
  });

  const submittedId = watch("id");

  const { data, error, isFetching } = useQuery({
    queryKey: ["character", submittedId],
    queryFn: () => characterService.getById(Number(submittedId)),
    enabled: submittedId !== "" && !Number.isNaN(Number(submittedId)),
  });

  const onSubmit = handleSubmit(() => {});

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col gap-6 p-8">
      <h1 className="text-2xl font-bold text-slate-900">
        Rick and Morty
      </h1>

      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          {...register("id")}
          type="number"
          placeholder="ID do personagem"
          className="flex-1 rounded border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
        />
        <button
          type="submit"
          className="rounded bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
        >
          Buscar
        </button>
      </form>

      {isFetching && <p className="text-slate-500">Carregando...</p>}
      {error && <p className="text-red-600">{error.message}</p>}

      {data && (
        <div className="flex items-center gap-4 rounded border border-slate-200 p-4">
          <img
            src={data.image}
            alt={data.name}
            className="h-20 w-20 rounded-full"
          />
          <div>
            <p className="font-semibold text-slate-900">{data.name}</p>
            <p className="text-sm text-slate-500">
              {data.species} · {data.status}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
