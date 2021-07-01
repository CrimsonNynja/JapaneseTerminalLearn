import { Dict } from "../types/dict.ts";
import { CYAN, NO_COLOR } from '../utils/constants.ts';

const Locations: Dict = [
  {
    english: "tokyo",
    kanji: "東京",
    kanamoji: "とうきょう",
  },
  {
    english: "kyoto",
    kanji: "京都",
    kanamoji: "きょうと",
  },
  {
    english: "osaka",
    kanji: "大阪",
    kanamoji: "おおさか",
  },
  {
    english: "japan",
    kanji: "日本",
    kanamoji: "にほん",
    jlp: 3,
    modifiers: [
      {
        english: "japanese",
        kanji: "日本語",
        kanamoji: "にほんご",
        example: {
          japanese: `${CYAN}日本語${NO_COLOR}が話せいますか`,
          english: ["can you speak japanese?", "can you speak japanese"],
        },
      },
    ],
  },
  {
    english: "china",
    kanji: "中国",
    kanamoji: "ちゅうごく",
  },
];

export default Locations;
