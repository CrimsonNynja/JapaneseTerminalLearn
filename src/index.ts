import { getLine, write } from "./inputOutput/inputOutput.ts";
import { pullItemAndRemoveFromDictionary, createDictionary } from "./dictionary/dictionary.ts";
import { amendReportCard, getLastReport, writeReport, reviewReport, Report } from "./reports/reports.ts";
import { createExam, isAnswerCorrect, askQuestion } from "./sensei/sensei.ts";
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
const exam = createExam(dict, reportCard);
const dateObj = new Date();
const day = ("0" + dateObj.getDate()).slice(-2);
const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
const year = dateObj.getFullYear();
const date = year + "-" + month + "-" + day;

for (let i = 0; i < settings.questionCount; i++) {
  let answeredCorrectly = false;
  while (answeredCorrectly === false) {
    const word = pullItemAndRemoveFromDictionary(exam);
    const question = askQuestion(word);
    write(`enter translation ${question}: `);
    const line = await getLine();
    if (isAnswerCorrect(word.english, line)) {
      write("✅ correct!\n");
      const report: Report = {
        id: word.id,
        marks: 1,
        markedDate: date,
      };
      reportCard = amendReportCard(reportCard, report);
      answeredCorrectly = true;
    } else if (line === "zz") {
      answeredCorrectly = true;
    } else {
      write(`❌ correct answer is ${JSON.stringify(word.english)}\n`);
      const report: Report = {
        id: word.id,
        marks: -1,
        markedDate: date,
      };
      reportCard = amendReportCard(reportCard, report);
    }
  }
}

await writeReport(reportCard);
