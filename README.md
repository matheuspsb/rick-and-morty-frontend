# Rick and Morty Frontend

Frontend em React para consumir o [rick-morty-backend](../rick-morty-backend).

## Stack

- React + TypeScript (Vite)
- Tailwind CSS
- React Hook Form
- TanStack Query
- Axios (services REST)
- Vitest + Testing Library

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

## Testes

```bash
npm test
npm run test:watch
```

## Estrutura

```
src/
  services/   # services REST por recurso (consomem o httpClient)
  lib/        # configuração de bibliotecas (query client, cliente HTTP axios)
  types/      # tipos compartilhados com o backend
  test/       # setup do ambiente de testes
  App.tsx     # componente raiz
  main.tsx    # entrypoint (providers)
```
