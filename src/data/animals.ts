import { Dict } from "../types/dict.ts";

const Animals: Dict = [
  {
    english: "dog",
    kanji: "犬",
    kanamoji: "いぬ",
    jlp: 5,
    modifiers: [
      {
        english: "puppy",
        kanji: "子犬",
        kanamoji: "こいぬ",
      },
    ],
  },
  {
    english: "bird",
    kanji: "鳥",
    kanamoji: "とり",
    jlp: 5,
  },
  {
    english: "cat",
    kanji: "猫",
    kanamoji: "ねこ",
    jlp: 5,
    modifiers: [
      {
        english: "kitten",
        kanji: "子猫",
        kanamoji: "こねこ",
      },
    ],
  },
  {
    english: "fish",
    kanji: "魚",
    kanamoji: "さかな",
    jlp: 5,
  },
];

export default Animals;
