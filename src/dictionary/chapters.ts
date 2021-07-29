import { Chapter } from "./dictionary.ts"
import Hiragana from "../data/hiragana.ts";
import Katakana from "../data/katakana.ts";
import n5 from "../data/n5.ts";

export const chapters: { [s: string]: Chapter } = {
  Hiragana,
  Katakana,
  n5,
};
