import { Dict } from "../types/dict.ts";
import { CYAN, NO_COLOR } from "../utils/constants.ts";

const Time: Dict = [
  {
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
    english: ["hour", "o'clock", "oclock"],
    kanji: "時",
    kanamoji: "じ",
    example: {
      japanese: `何${CYAN}時${NO_COLOR}ですか`,
      english: ["what time is it?", "what time is it", "whats the time", "what's the time"],
    }
  },
  {
    english: ["minute", "minutes"],
    kanji: "分",
    kanamoji: "ふん",
    jlp: 3,
  },
  {
    english: ["am", "AM", "A.M.", "morning"],
    kanji: "午前",
    kanamoji: "ごぜん",
    jlp: 5,
  },
  {
    english: ["pm", "PM", "P.M.", "afternoon"],
    kanji: "午後",
    kanamoji: "ごご",
    jlp: 5,
  },
  {
    english: ["day", "sun"],
    kanji: "日",
    kanamoji: "ひ",
    jlp: 5,
    modifiers: [
      {
        english: "today",
        kanji: "今日",
        kanamoji: "きょう",
        jlp: 5,
      },
    ]
  },
];

export default Time;
