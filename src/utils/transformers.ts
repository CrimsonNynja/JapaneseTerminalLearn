import { DictWord } from "../types/dict.ts";

export const dictEntryToQuestionAnswer = (entry: DictWord) => {
  let question: string|string[]|undefined = entry.kanji;
  if (!entry.kanji) {
    question = entry.kanamoji;
  }

  return {
    question,
    answer: entry.english,
    kanamoji: entry.kanamoji,
  };
};
