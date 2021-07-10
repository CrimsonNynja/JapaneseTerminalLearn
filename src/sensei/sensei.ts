import { ReportCard } from "../reports/reports.ts";
import { Dict, DictWord } from "../types/dict.ts";

export const MARKS_NEEDED_FOR_PASS = 5;
export const MARKS_NEEDED_FOR_EXAMPLES = 3;

export const createExam = (dictionary: Dict, reportCard: ReportCard): Dict => {
  dictionary.forEach((word: DictWord, index: number) => {
    reportCard.reports.forEach((report) => {
      if (
        word.english === report.question.english &&
        word.kanamoji === report.question.kanamoji
      ) {
        if (report.marks >= MARKS_NEEDED_FOR_PASS) {
          dictionary.splice(index, 1);
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

export const askQuestion = (word: DictWord): string|string[] => {
  let question = word.kanji ? word.kanji : word.kanamoji;
  if (word.example) {
    question = word.example.japanese;
  }
  return question;
};
