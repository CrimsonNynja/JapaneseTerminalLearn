import { normalize } from "https://deno.land/std@0.99.0/path/mod.ts";
import { write } from "./inputOutput.ts";
import { Report, ReportCard } from "../types/report.ts";

const scriptPath = new URL('.', import.meta.url).pathname;
const reportFilePath: string = normalize(`${scriptPath}../../reportCard.json`);

export const writeReport = async (reportCard: ReportCard) => {
  await Deno.writeTextFile(reportFilePath, JSON.stringify(reportCard));
};

export const getLastReport = async () => {
  const reportCard = await Deno.readTextFile(reportFilePath);
  return JSON.parse(reportCard);
};

export const amendReportCard = (reportCard: ReportCard, report: Report) => {
  let amended = false;
  reportCard.forEach((item: Report, index: number) => {
    if (
      item.question.english === report.question.english &&
      item.question.kanamoji === report.question.kanamoji
    ) {
      reportCard[index].marks += report.marks;
      if (reportCard[index].marks < 0) {
        reportCard[index].marks = 0;
      }
      amended = true;
    }
  });
  if (amended === false) {
    if (report.marks < 0) {
      report.marks = 0;
    }
    reportCard.push(report);
  }
  return reportCard;
};

export const reviewReport = (reportCard: ReportCard) => {
  reportCard.forEach((report) => {
    write(`${JSON.stringify(report.question.kanamoji)}: ${report.marks}\n`);
  });
};
