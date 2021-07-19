import { chapters } from "./chapters.ts";

export interface Word {
  id: string;
  english: string | string[];
  kanji?: string;
  kanamoji: string | string[];
  jlp?: number;
  modifiers?: Word[];
  example?: {
    japanese: string;
    english: string|string[];
  }
}

export type Chapter = {
  name: string;
  words: Word[];
}

export type Dictionary = Chapter[];

export const pullItemAndRemoveFromDictionary = (dictionary: Dictionary): { word: Word, chapter: string } => {
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

  return {
    chapter: dictionary[chapter].name,
    word,
  };
};

export const createDictionary = (chaptersToAdd: string[]): Dictionary => {
  const dictionary: Dictionary = [];
  chaptersToAdd.forEach((chapter: string) => {
    dictionary.push(chapters[chapter]);
  });
  return dictionary;
};
