import { Dict } from "../types/dict.ts";

const Time: Dict = [
  {
    english: ["now", "right now", "just now"],
    kanji: "今",
    kanamoji: "いま",
    jlp: 5.,
  },
  {
    english: ["hour", "o'clock", "oclock"],
    kanji: "時",
    kanamoji: "じ",
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
];

export default Time;
