import { chapters } from "./chapters.ts";

export interface DictWord {
  english: string | string[];
  kanji?: string;
  kanamoji: string | string[];
  jlp?: number;
  modifiers?: DictWord[];
  example?: {
    japanese: string;
    english: string|string[];
  }
}

export type Dict = DictWord[];

export const combineDicts = (dict1: Dict, dict2: Dict): Dict => {
  const dict: Dict = [
    ...dict1,
    ...dict2,
  ];

  return dict.filter((word: DictWord, index: number, self: DictWord[]) =>
    index === self.findIndex((word2: DictWord) => (
      word2.kanamoji === word.kanamoji
    ))
  );
};

export const pullItemAndRemoveFromDict = (dict: Dict): DictWord => {
  const item: DictWord = dict[Math.floor(Math.random() * dict.length)];

  const index = dict.indexOf(item);
  if (index !== -1) {
    dict.splice(index, 1);
  }

  return item;
};

export const createDictionary = (chaptersToAdd: string[]): Dict => {
  let dictionary: Dict = [];
  chaptersToAdd.forEach((chapter: string) => {
    dictionary = combineDicts(dictionary, chapters[chapter]);
  });
  return dictionary;
};
