import { chapters } from "./chapters.ts";

type ID = string;

export interface Word {
  id: ID;
  kanji?: string;
  kanamoji: string|string[];
  english: string[];
  kunyomi?: string[];
  onyomi?: string[];
  jlpt?: number;
  example?: string;
  contains?: ID[];
}

export type Chapter = {
  words: Word[];
}

export type Dictionary = Chapter[];

export const pullItemAndRemoveFromDictionary = (dictionary: Dictionary): Word => {
  const chapter = Math.floor(Math.random() * dictionary.length);
  const words = dictionary[chapter].words;
  const word = words[Math.floor(Math.random() * words.length)];

  const index = dictionary[chapter].words.indexOf(word);
  if (index !== -1) {
    dictionary[chapter].words.splice(index, 1);
    if (dictionary[chapter].words.length === 0) {
      dictionary.splice(chapter, 1);
    }
  }

  return word;
};

export const createDictionary = (chaptersToAdd: string[]): Dictionary => {
  const dictionary: Dictionary = [];
  chaptersToAdd.forEach((chapter: string) => {
    dictionary.push(chapters[chapter]);
  });
  return dictionary;
};
