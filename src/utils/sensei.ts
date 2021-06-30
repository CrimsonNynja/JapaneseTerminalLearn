import { ReportCard } from "../types/report.ts";
import { Dict, DictWord } from "../types/dict.ts";

const MARKS_NEEDED_FOR_PASS = 5;

export const createTest = (dictionary: Dict, reportCard: ReportCard) => {
  dictionary.forEach((word: DictWord, index: number) => {
    reportCard.reports.forEach((report) => {
      if (
        word.english === report.question.english &&
        word.kanamoji === report.question.kanamoji
      ) {
        if (report.marks >= MARKS_NEEDED_FOR_PASS) {
          console.log("should exclude: ", report.question.english);
          dictionary.splice(index, 1);
        }
      }
    });
  });

  return dictionary;
};

// export const askQuestion = (test: Dict): DictWord => {

// };
