import { getLine, write } from "./utils/inputOutput.ts";
import { pullItemAndRemoveFromDict } from "./utils/dictUtils.ts";
import { dictEntryToQuestionAnswer } from "./utils/transformers.ts";
import { createDictionary } from "./dictionary.ts";
import { amendReportCard, getLastReport, writeReport, reviewReport } from "./utils/report.ts";
import { createTest, isAnswerCorrect } from "./utils/sensei.ts";
import { loadSettings } from "./settings/settings.ts";
import { Command, getCommandType, parseCommandLineArgs } from "./interpreter/interpreter.ts";

const settings = await loadSettings();
let reportCard = await getLastReport();

const commandType = getCommandType(parseCommandLineArgs(), settings);

if (commandType === Command.REVIEW) {
  await reviewReport(reportCard);
  Deno.exit(0);
}
if (commandType === Command.QUIT) {
  Deno.exit(0);
}

const dict = createDictionary(settings.includedChapters);
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
      write("✅ correct!\n");
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
