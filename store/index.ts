import { atom } from "jotai";

import { baseUrl } from "../config";
import { cat } from "../interface";

export const breedsAtom = atom<cat[] | Promise<cat[]>>(async (get) => {
  const res = await fetch(`${baseUrl}/api/breeds`, {
    headers: { "Content-Type": "application/json" },
  });
  if (res.status === 200) {
    const data = await res.json();
    return data;
  } else {
    return [];
  }
});

export const fourMostSearchedBreedsAtom = atom<cat[]>((get) => {
  return get(breedsAtom)
    .filter((breed) => breed.name.match(/exotic|ragdoll|persian|maine coon/gi))
    .map((breed) => {
      return {
        name: breed.name,
        image: breed.image,
      };
    });
});

export const searchAtom = atom("");

export const getSearchedBreeds = atom<cat[]>((get) => {
  if (get(searchAtom)) {
    return get(breedsAtom)
      .filter((breed) =>
        breed.name.toLowerCase().includes(get(searchAtom).toLowerCase())
      )
      .map((breed) => {
        return {
          name: breed.name,
          id: breed.id,
        };
      });
  } else {
    return [];
  }
});

export const tenMostSearchedBreedsAtom = atom<cat[]>((get) => {
  return get(breedsAtom)
    .filter((breed) =>
      breed.name.match(
        /exotic|ragdoll|persian|maine coon|devon rex|british shorthair|abyssinian|american Shorthair|scottish Fold|sphynx/i
      )
    )
    .map((breed) => {
      return {
        name: breed.name,
        image: breed.image,
        description: breed.description,
      };
    });
});
