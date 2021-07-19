import { Chapter } from "../dictionary/dictionary.ts";
import { CYAN, NO_COLOR } from '../utils/constants.ts';

const Locations: Chapter = {
  name: 'Locations',
  words: [
    {
      id: '1',
      english: "tokyo",
      kanji: "東京",
      kanamoji: "とうきょう",
    },
    {
      id: '2',
      english: "kyoto",
      kanji: "京都",
      kanamoji: "きょうと",
    },
    {
      id: '3',
      english: "osaka",
      kanji: "大阪",
      kanamoji: "おおさか",
    },
    {
      id: '4',
      english: "japan",
      kanji: "日本",
      kanamoji: "にほん",
      jlp: 3,
      modifiers: [
        {
          id: '4-1',
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
      id: '5',
      english: "china",
      kanji: "中国",
      kanamoji: "ちゅうごく",
    },
    {
      id: '6',
      english: "south korea",
      kanji: "韓国",
      kanamoji: "かんこく",
    },
  ],
};

export default Locations;
