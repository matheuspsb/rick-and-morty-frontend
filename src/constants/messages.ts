export const EMPTY_ARCHIVE_MESSAGE = {
  title: "ARQUIVO PRONTO",
  description: "Digite um ou mais IDs de episódio para consultar os personagens observados.",
} as const;

export const INVALID_EPISODE_IDS_MESSAGE = {
  title: "IDENTIFICADOR DE EPISÓDIO INVÁLIDO",
  description: "O arquivo aceita apenas identificadores numéricos de episódio.",
  examples: ["10", "28", "10,28"],
} as const;

export const EPISODE_NOT_FOUND_MESSAGE = {
  title: "NENHUM REGISTRO DE EPISÓDIO ENCONTRADO",
  description: "Nenhum dos IDs de episódio informados existe no arquivo.",
} as const;

export const ARCHIVE_CONNECTION_ERROR_MESSAGE = {
  title: "ERRO DE CONEXÃO COM O ARQUIVO",
  description: "Não foi possível conectar ao arquivo. Tente novamente em instantes.",
} as const;

export const EMPTY_ENTITY_DETAIL_MESSAGE = {
  title: "NENHUM PERSONAGEM SELECIONADO",
  description: "Selecione um personagem observado no arquivo para ver seu registro.",
} as const;
