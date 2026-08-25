import type { Character } from "../types/character";

export function buildCharacter(overrides: Partial<Character> = {}): Character {
  return {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: { name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1" },
    location: { name: "Citadel of Ricks", url: "https://rickandmortyapi.com/api/location/3" },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2"],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
    ...overrides,
  };
}

export const CHARACTER_FIXTURES: Character[] = [
  buildCharacter(),
  buildCharacter({
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    origin: { name: "unknown", url: "" },
  }),
  buildCharacter({
    id: 3,
    name: "Noob-Noob",
    status: "Dead",
    species: "Alien",
    origin: { name: "unknown", url: "" },
  }),
];
