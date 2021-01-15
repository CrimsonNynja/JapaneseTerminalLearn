import { DictWord, Dict } from '../types/dict.ts';

export const combineDicts = (dict1: Dict, dict2: Dict) => {
  const dict: Dict = [
    ...dict1,
    ...dict2,
  ];

  return dict.filter((word, index, self) =>
    index === self.findIndex((word2) => (
      word2.kanamoji === word.kanamoji
    )),
  );
};

export const pullItemAndRemoveFromDict = (dict: Dict) => {
  const item: DictWord = dict[Math.floor(Math.random() * dict.length)];

  let index = dict.indexOf(item);
  if(index !== -1) {
    dict.splice(index, 1);
  }

  return item;
};
