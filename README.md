# Rick and Morty Frontend

Frontend em React para consumir o [rick-morty-backend](../rick-morty-backend).

## Stack

- React + TypeScript (Vite)
- Tailwind CSS
- React Hook Form
- TanStack Query
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
  api/        # chamadas ao backend (fetch + endpoints)
  lib/        # configuração de bibliotecas (query client)
  types/      # tipos compartilhados com o backend
  test/       # setup do ambiente de testes
  App.tsx     # componente raiz
  main.tsx    # entrypoint (providers)
```
