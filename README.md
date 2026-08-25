# Rick and Morty Frontend

![Rick and Morty Field Archive](./src/assets/homepage.png)

Frontend em React para o [rick-morty-backend](../rick-morty-backend).

## Stack

- React + TypeScript (Vite)
- Tailwind CSS v4 (tema centralizado via `@theme` em [src/index.css](./src/index.css))
- React Hook Form
- TanStack Query
- Axios (services REST)
- Vitest + Testing Library
- ESLint (`typescript-eslint`, type-checked)

> **Nota de versão:** o `typescript` deste projeto está fixado em `^6.0.x`. A versão `7.x` (usada no backend) ainda
> não é suportada pelo `typescript-eslint` ([issue #10940](https://github.com/typescript-eslint/typescript-eslint/issues/10940)),
> e o lint com checagem de tipos é um requisito deste projeto.

## Instalação

```bash
npm install
cp .env.example .env
```

## Rodando

```bash
npm run dev
```

Por padrão espera o backend em `http://localhost:3000` (variável `VITE_API_URL`).

## Rodando com Docker

O [Dockerfile](Dockerfile) faz build multi-stage: compila o Vite (com `VITE_API_URL` embutida via `--build-arg`, já que a variável é resolvida em build time) e serve o resultado estático com nginx.

```bash
docker build -t rick-morty-frontend --build-arg VITE_API_URL=http://localhost:3000 .
docker run -p 5173:80 rick-morty-frontend
```

Pra subir frontend **e** backend juntos com um comando só (via [docker-compose.yml](docker-compose.yml)), os dois repositórios precisam estar clonados **lado a lado, na mesma pasta pai**:

```
algum-diretorio/
├── rick-and-morty-backend/
└── rick-and-morty-frontend/    (este repositório)
```

```bash
git clone https://github.com/matheuspsb/rick-and-morty-backend.git
git clone https://github.com/matheuspsb/rick-and-morty-frontend.git
cd rick-and-morty-frontend
docker compose up --build
```

> O `docker-compose.yml` referencia o backend pelo caminho relativo `../rick-and-morty-backend` — se a pasta tiver outro nome, o build falha. O mesmo arquivo existe em ambos os repositórios, então `docker compose up` funciona de dentro de qualquer um dos dois.

## Testes e qualidade

```bash
npm test         # vitest
npm run test:watch
npm run lint      # eslint (type-checked)
npm run build     # tsc -b && vite build
```

## Deploy (Vercel)

Projeto Vite padrão — a Vercel detecta o preset automaticamente (`npm run build`, output `dist`). Nenhum `vercel.json` é necessário: não há rotas client-side (sem router), então não há necessidade de rewrite para SPA.

Configure na Vercel (Project Settings → Environment Variables):

| Variável       | Valor                                              |
|----------------|-----------------------------------------------------|
| `VITE_API_URL` | URL do [rick-morty-backend](../rick-morty-backend) publicado (ex.: `https://seu-backend.vercel.app`) |

`VITE_API_URL` é embutida no bundle **em build time** — se o backend mudar de URL, é preciso refazer o deploy do frontend (redeploy), não basta reiniciar.

## Estrutura

```
src/
  constants/  # tokens não-visuais: paginação, mensagens, grid templates, tema de status
  utils/      # funções puras (validação de IDs, paginação, formatação) — testadas isoladamente
  hooks/      # useEpisodeQuery, useObservedEntities, usePagination, useSelectedEntity
  services/   # services REST por recurso (consomem o httpClient)
  lib/        # configuração de bibliotecas (query client, cliente HTTP axios)
  types/      # tipos compartilhados com o backend
  components/
    common/     # StatusIndicator, EntityPortrait
    layout/     # ArchiveHeader, ArchiveSidebar, ArchiveWorkspace
    query/      # EpisodeQueryForm
    entities/   # grid, card, skeleton, paginação, estados vazio/erro
    detail/     # painel de detalhe da entidade selecionada
  pages/
    FieldArchivePage.tsx  # composition root da tela
  test/       # setup do ambiente de testes e fixtures
  App.tsx     # monta a página
  main.tsx    # entrypoint (providers)
```
