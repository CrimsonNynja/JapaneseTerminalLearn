export const dictEntryToQuestionAnswer = (entry: any) => {
  let question = entry.kanji;
  if (!entry.kanji) {
    question = entry.kanamoji;
  }

  return {
    question,
    answer: entry.english,
  };
};
