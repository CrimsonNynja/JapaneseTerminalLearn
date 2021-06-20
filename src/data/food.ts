import { Dict } from '../types/dict.ts';

const Food: Dict = [
  {
    english: 'meat',
    kanji: '肉',
    kanamoji: 'にく',
    jlp: 5,
    modifiers: [
      {
        english: 'chicken',
        kanji: '鳥肉',
        kanamoji: 'とりにく',
      },
    ],
  },
  {
    english: 'water',
    kanji: '水',
    kanamoji: 'みず',
    jlp: 5,
  },
  {
    english: 'vegetable',
    kanji: '野菜',
    kanamoji: 'やさい',
    jlp: 5,
  },
  {
    english: 'egg',
    kanji: '卵',
    kanamoji: 'たまご',
    jlp: 5,
  },
  {
    english: 'sandwich',
    kanamoji: ['サンド', 'サンドイッチ'],
    jlp: 4,
  },
  {
    english: 'apple',
    kanamoji: 'りんご',
  },
  {
    english: 'strawberry',
    kanamoji: 'いちご',
  },
  {
    english: 'bread',
    kanamoji: 'パン',
    jlp: 5,
  },
  {
    english: 'fish',
    kanji: '魚',
    kanamoji: 'さかな',
    jlp: 5,
  },
];

export default Food;
