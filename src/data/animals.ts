import { Chapter } from "../dictionary/dictionary.ts";

const Animals: Chapter = {
  name: 'Animals',
  words: [
    {
      id: '1',
      english: "dog",
      kanji: "犬",
      kanamoji: "いぬ",
      jlp: 5,
      modifiers: [
        {
          id: '1-1',
          english: "puppy",
          kanji: "子犬",
          kanamoji: "こいぬ",
        },
      ],
    },
    {
      id: '2',
      english: "bird",
      kanji: "鳥",
      kanamoji: "とり",
      jlp: 5,
    },
    {
      id: '3',
      english: "cat",
      kanji: "猫",
      kanamoji: "ねこ",
      jlp: 5,
      modifiers: [
        {
          id: '3-1',
          english: "kitten",
          kanji: "子猫",
          kanamoji: "こねこ",
        },
      ],
    },
    {
      id: '4',
      english: "fish",
      kanji: "魚",
      kanamoji: "さかな",
      jlp: 5,
    },
  ],
};

export default Animals;
