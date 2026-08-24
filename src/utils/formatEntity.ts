const ENTITY_CODE_PAD_LENGTH = 3;

export function padEntityId(id: number): string {
  return String(id).padStart(ENTITY_CODE_PAD_LENGTH, "0");
}

export function formatEntityCode(id: number): string {
  return `#${padEntityId(id)}`;
}
