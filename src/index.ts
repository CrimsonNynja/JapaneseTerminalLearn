import { getLine, write } from "./utils/inputOutput.ts";
import { pullItemAndRemoveFromDict } from "./utils/dictUtils.ts";
import { dictEntryToQuestionAnswer } from "./utils/transformers.ts";
import { createDictionary } from "./dictionary.ts";
import { amendReportCard, getLastReport, writeReport } from "./utils/report.ts";
import { createTest, isAnswerCorrect } from "./utils/sensei.ts";
import { shouldRunOnCommand, reviewIfRequested } from "./utils/terminalCommands.ts";
import { loadSettings } from "./utils/settings.ts";

if (shouldRunOnCommand() === false) {
  Deno.exit(0);
}

const settings = await loadSettings();
let reportCard = await getLastReport();

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

reviewIfRequested(reportCard);
const test = createTest(dict, reportCard);

const dateObj = new Date();
const day = ("0" + dateObj.getDate()).slice(-2);
const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
const year = dateObj.getFullYear();
const date = year + "-" + month + "-" + day;

for (let i = 0; i < settings.questionCount; i++) {
  let answeredCorrectly = false;
  while (answeredCorrectly === false) {
    const { question, answer, kanamoji } = dictEntryToQuestionAnswer(pullItemAndRemoveFromDict(test));
    write("enter translation " + question + ": ");
    const line = await getLine();
    if (isAnswerCorrect(answer, line)) {
      write("✅");
      const report = {
        question: {
          english: answer,
          kanamoji: kanamoji,
        },
        marks: 1,
        markedDate: date,
      };
      reportCard = amendReportCard(reportCard, report);
      answeredCorrectly = true;
    } else if (line === "zz") {
      answeredCorrectly = true;
    } else {
      write(`❌ correct answer is ${JSON.stringify(answer)}\n`);
      const report = {
        question: {
          english: answer,
          kanamoji: kanamoji,
        },
        marks: -1,
        markedDate: date,
      };
      reportCard = amendReportCard(reportCard, report);
    }
  }
}

await writeReport(reportCard);
