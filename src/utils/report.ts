import { normalize } from "https://deno.land/std@0.99.0/path/mod.ts";
import { write } from "./inputOutput.ts";
import { Report, ReportCard, VERSION } from "../types/report.ts";
import { MARKS_NEEDED_FOR_PASS } from "./sensei.ts";

const scriptPath = new URL('.', import.meta.url).pathname;
const reportFilePath: string = normalize(`${scriptPath}../../reportCard.json`);

export const writeReport = async (reportCard: ReportCard) => {
  await Deno.writeTextFile(reportFilePath, JSON.stringify(reportCard));
};

export const getLastReport = async (): Promise<ReportCard> => {
  const file = await Deno.readTextFile(reportFilePath).catch(() => {
    createNewReportCardFile();
  })
  if (file) {
    const reportCard: ReportCard = JSON.parse(file);
    if (reportCard.version !== VERSION) {
      console.log('report card is out of date and needs to be updated!');
      reportCard.version = VERSION;
    }
    return reportCard;
  }
  return {
    version: VERSION,
    reports: [],
  }
};

export const amendReportCard = (reportCard: ReportCard, report: Report) => {
  let amended = false;
  reportCard.reports.forEach((item: Report, index: number) => {
    if (
      item.question.english === report.question.english &&
      item.question.kanamoji === report.question.kanamoji
    ) {
      reportCard.reports[index].marks += report.marks;
      if (reportCard.reports[index].marks < 0) {
        reportCard.reports[index].marks = 0;
      }
      amended = true;
    }
  });
  if (amended === false) {
    if (report.marks < 0) {
      report.marks = 0;
    }
    reportCard.reports.push(report);
  }
  return reportCard;
};

export const reviewReport = (reportCard: ReportCard) => {
  reportCard.reports.forEach((report) => {
    if (report.marks >= MARKS_NEEDED_FOR_PASS) {
      write(`\x1b[42m${JSON.stringify(report.question.kanamoji)}: ${report.marks}\x1b[0m\n`);
    } else if (report.marks === 0) {
      write(`\x1b[41m${JSON.stringify(report.question.kanamoji)}: ${report.marks}\x1b[0m\n`);
    } else {
      write(`${JSON.stringify(report.question.kanamoji)}: ${report.marks}\n`);
    }
  });
};

export const createNewReportCardFile = async () => {
  await Deno.writeTextFile(reportFilePath, JSON.stringify({
    version: VERSION,
    reports: [],
  }));
}
