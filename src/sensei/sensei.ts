import { ReportCard } from "../reports/reports.ts";
import { Dictionary, Chapter, Word } from "../dictionary/dictionary.ts";

export const MARKS_NEEDED_FOR_PASS = 5;
export const MARKS_NEEDED_FOR_EXAMPLES = 3;

export const createExam = (dictionary: Dictionary, reportCard: ReportCard): Dictionary => {
  dictionary.forEach((chapter: Chapter, index: number) => {
    reportCard.reports.forEach((report) => {
      const word = chapter.words.find((item) => item.id === report.id);
      if (word && word?.id === report.id) {
        if (report.marks >= MARKS_NEEDED_FOR_PASS) {
          dictionary[index].words.splice(chapter.words.indexOf(word), 1)
          if (dictionary[index].words.length === 0) {
            dictionary.splice(index, 1);
          }
        }
      }
    });
  });

  return dictionary;
};

export const isAnswerCorrect = (answer: string | string[], given: string): boolean => {
  if (Array.isArray(answer)) {
    if (answer.includes(given)) {
      return true;
    }
  } else {
    if (answer === given) {
      return true;
    }
  }
  return false;
};

export const askQuestion = (word: Word): string|string[] => {
  let question = word.kanji ? word.kanji : word.kanamoji;
  if (word.example) {
    question = word.example.japanese;
  }
  return question;
};
