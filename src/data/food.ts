import { Chapter } from "../dictionary/dictionary.ts";
import { CYAN, NO_COLOR } from '../utils/constants.ts';

const Food: Chapter = {
  name: 'Food',
  words: [
    {
      id: '1',
      english: "meat",
      kanji: "肉",
      kanamoji: "にく",
      jlp: 5,
      modifiers: [
        {
          id: '1-1',
          english: "chicken",
          kanji: "鳥肉",
          kanamoji: "とりにく",
        },
      ],
    },
    {
      id: '2',
      english: "water",
      kanji: "水",
      kanamoji: "みず",
      jlp: 5,
    },
    {
      id: '3',
      english: "vegetable",
      kanji: "野菜",
      kanamoji: "やさい",
      jlp: 5,
    },
    {
      id: '4',
      english: "egg",
      kanji: "卵",
      kanamoji: "たまご",
      jlp: 5,
    },
    {
      id: '5',
      english: "sandwich",
      kanamoji: ["サンド", "サンドイッチ"],
      jlp: 4,
    },
    {
      id: '6',
      english: "apple",
      kanamoji: "りんご",
      example: {
        japanese: `${CYAN}りんご${NO_COLOR}を食べます`,
        english: "I eat an apple",
      },
    },
    {
      id: '7',
      english: "strawberry",
      kanamoji: "いちご",
    },
    {
      id: '8',
      english: "bread",
      kanamoji: "パン",
      jlp: 5,
    },
    {
      id: '9',
      english: "fish",
      kanji: "魚",
      kanamoji: "さかな",
      jlp: 5,
    },
    {
      id: '10',
      english: "tea",
      kanji: "茶",
      kanamoji: "ちゃ",
      jlp: 5,
    },
    {
      id: '11',
      english: ["rice", "meal"],
      kanji: "ご飯",
      kanamoji: "ごはん",
      jlp: 5,
    },
    {
      id: '12',
      english: "sweet",
      kanji: "甘い",
      kanamoji: "あまい",
      jlp: 5,
    },
  ],
};

export default Food;
