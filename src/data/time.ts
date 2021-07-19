import { Chapter } from "../dictionary/dictionary.ts";
import { CYAN, NO_COLOR } from "../utils/constants.ts";

const Time: Chapter = {
  name: 'Time',
  words: [
    {
      id: '1',
      english: ["now", "right now", "just now"],
      kanji: "今",
      kanamoji: "いま",
      jlp: 5,
      example: {
        japanese: `${CYAN}今${NO_COLOR}は八時です`,
        english: ["its 8 oclock now", "it's 8 o'clock now", "right now its 8 oclock", "its eight oclock now"],
      }
    },
    {
      id: '2',
      english: ["hour", "o'clock", "oclock"],
      kanji: "時",
      kanamoji: "じ",
      example: {
        japanese: `何${CYAN}時${NO_COLOR}ですか`,
        english: ["what time is it?", "what time is it", "whats the time", "what's the time"],
      }
    },
    {
      id: '3',
      english: ["minute", "minutes"],
      kanji: "分",
      kanamoji: "ふん",
      jlp: 3,
    },
    {
      id: '4',
      english: ["am", "AM", "A.M.", "morning"],
      kanji: "午前",
      kanamoji: "ごぜん",
      jlp: 5,
    },
    {
      id: '5',
      english: ["pm", "PM", "P.M.", "afternoon"],
      kanji: "午後",
      kanamoji: "ごご",
      jlp: 5,
    },
    {
      id: '6',
      english: ["day", "sun"],
      kanji: "日",
      kanamoji: "ひ",
      jlp: 5,
      modifiers: [
        {
          id: '6-1',
          english: "today",
          kanji: "今日",
          kanamoji: "きょう",
          jlp: 5,
        },
      ]
    },
    {
      id: '7',
      english: [":30", "half past"],
      kanji: "半",
      kanamoji: "はん",
      jlp: 5,
    },
  ],
};

export default Time;
