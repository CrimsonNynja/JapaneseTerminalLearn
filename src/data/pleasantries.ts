import { Dict } from "../dictionary/dictionary.ts";

const Pleasantries: Dict = [
  {
    id: '1',
    english: ["hello", "hi"],
    kanamoji: "こにちは",
  },
  {
    id: '2',
    english: "welcome",
    kanamoji: "ようこそ",
  },
  {
    id: '3',
    english: ["sorry", "excuse me", "pardon me"],
    kanamoji: ["すいません", "すみません"],
    jlp: 3,
  },
  {
    id: '4',
    english: ["see you", "bye"],
    kanamoji: "じゃあね",
  },
  {
    id: '5',
    english: ["thank you", "thanks"],
    kanamoji: "どうも",
    jlp: 5,
  },
];

export default Pleasantries;
