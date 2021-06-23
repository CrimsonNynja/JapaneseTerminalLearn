import { getLine, write } from "./utils/inputOutput.ts";
import { pullItemAndRemoveFromDict } from "./utils/dictUtils.ts";
import { dictEntryToQuestionAnswer } from "./utils/transformers.ts";
import { createDictionary } from "./dictionary.ts";
import { ReportCard } from "./types/report.ts";
import { amendReportCard, getLastReport, writeReport } from "./utils/report.ts";

const isAnswerCorrect = (answer: string | string[], given: string) => {
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

const dict = createDictionary([
  "Food",
  "House",
  "Hiragana",
  "Katakana",
  "Locations",
  "Numbers",
  "Family",
  "Animals",
  "Pleasantries",
  "Education",
  "Time",
  "Places",
]);

let reportCard: ReportCard = await getLastReport();
const dateObj = new Date();
const day = ("0" + dateObj.getDate()).slice(-2);
const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
const year = dateObj.getFullYear();
const date = year + "-" + month + "-" + day;

let answeredCorrectly = false;
while (answeredCorrectly === false) {
  const { question, answer } = dictEntryToQuestionAnswer(
    pullItemAndRemoveFromDict(dict),
  );
  write("enter translation " + question + ": ");
  const line = await getLine();
  if (isAnswerCorrect(answer, line)) {
    console.log("✅");
    const report = {
      question: {
        english: answer,
        kanamoji: question,
      },
      marks: 1,
      markedDate: date,
    };
    reportCard = amendReportCard(reportCard, report);
    answeredCorrectly = true;
  } else if (line === "zz") {
    answeredCorrectly = true;
  } else {
    console.log("❌ correct answer is " + JSON.stringify(answer));
    const report = {
      question: {
        english: answer,
        kanamoji: question,
      },
      marks: -1,
      markedDate: date,
    };
    reportCard = amendReportCard(reportCard, report);
  }
}

await writeReport(reportCard);
