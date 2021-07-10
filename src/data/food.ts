import { Dict } from "../dictionary/dictionary.ts";
import { CYAN, NO_COLOR } from '../utils/constants.ts';

const Food: Dict = [
  {
    english: "meat",
    kanji: "肉",
    kanamoji: "にく",
    jlp: 5,
    modifiers: [
      {
        english: "chicken",
        kanji: "鳥肉",
        kanamoji: "とりにく",
      },
    ],
  },
  {
    english: "water",
    kanji: "水",
    kanamoji: "みず",
    jlp: 5,
  },
  {
    english: "vegetable",
    kanji: "野菜",
    kanamoji: "やさい",
    jlp: 5,
  },
  {
    english: "egg",
    kanji: "卵",
    kanamoji: "たまご",
    jlp: 5,
  },
  {
    english: "sandwich",
    kanamoji: ["サンド", "サンドイッチ"],
    jlp: 4,
  },
  {
    english: "apple",
    kanamoji: "りんご",
    example: {
      japanese: `${CYAN}りんご${NO_COLOR}を食べます`,
      english: "I eat an apple",
    },
  },
  {
    english: "strawberry",
    kanamoji: "いちご",
  },
  {
    english: "bread",
    kanamoji: "パン",
    jlp: 5,
  },
  {
    english: "fish",
    kanji: "魚",
    kanamoji: "さかな",
    jlp: 5,
  },
  {
    english: "tea",
    kanji: "茶",
    kanamoji: "ちゃ",
    jlp: 5,
  },
  {
    english: ["rice", "meal"],
    kanji: "ご飯",
    kanamoji: "ごはん",
    jlp: 5,
  },
  {
    english: "sweet",
    kanji: "甘い",
    kanamoji: "あまい",
    jlp: 5,
  },
];

export default Food;
