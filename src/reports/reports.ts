import { normalize } from "https://deno.land/std@0.99.0/path/mod.ts";
import { write } from "../inputOutput/inputOutput.ts";
import { RED, GREEN, NO_COLOR, SCRIPT_PATH } from "../constants/constants.ts";
import { MARKS_NEEDED_FOR_PASS } from "../sensei/sensei.ts";
import { updateReport } from "./updates/updates.ts";
import { chapters } from "../dictionary/chapters.ts";

export interface OldReport {
  question: {
    english: string | string[];
    kanamoji: string | string[];
  };
  marks: number;
  markedDate: string;
}

export interface Report {
  chapter: string;
  id: string;
  marks: number;
  markedDate: string;
}

export const VERSION = 3;

export type OldReportCard = {
  version: number;
  reports: OldReport[];
}

export type ReportCard = {
  version: number;
  reports: Report[];
}

const reportFilePath: string = normalize(`${SCRIPT_PATH}../../reportCard.json`);

const defaultReportCard: ReportCard = {
  version: VERSION,
  reports: [],
};

/**
 * saves the given report card to the file
 * @param {ReportCard} reportCard the reportCard to save
 */
export const writeReport = async (reportCard: ReportCard): Promise<void> => {
  await Deno.writeTextFile(reportFilePath, JSON.stringify(reportCard));
}

/**
 * loads a report card from file, or creates a new one if none exists
 * @returns {Promise<ReportCard} the loaded report card
 */
export const getLastReport = async (): Promise<ReportCard> => {
  const file = await Deno.readTextFile(reportFilePath).catch(() => {
    createNewReportCardFile();
  })
  if (file) {
    const reportCard: ReportCard & OldReportCard = JSON.parse(file);
    if (reportCard.version !== VERSION) {
      await write('report card is out of date and needs to be updated!\n');
      return updateReport(reportCard);
    }
    return <ReportCard>reportCard;
  }
  return defaultReportCard;
}

/**
 * adds the given report to the reportCard
 * @param {ReportCard} reportCard the card to amend
 * @param {Report} report the report to amend
 * @returns {ReportCard} the amended report card
 */
export const amendReportCard = (reportCard: ReportCard, report: Report): ReportCard => {
  let amended = false;
  reportCard.reports.forEach((item: Report, index: number) => {
    if (JSON.stringify(item.id) === JSON.stringify(report.id)) {
      reportCard.reports[index].marks += report.marks;
      amended = true;
      if (reportCard.reports[index].marks < 0) {
        reportCard.reports[index].marks = 0;
      }
    }
  });
  if (amended === false) {
    if (report.marks < 0) {
      report.marks = 0;
    }
    reportCard.reports.push(report);
  }
  return reportCard;
}

/**
 * prints the reportCard with the current mark tally
 * @param { ReportCard }reportCard the card to review
 */
export const reviewReport = async (reportCard: ReportCard): Promise<void> => {
  for (const report of reportCard.reports) {
    const chapterWords = chapters[report.chapter].words;
    const word = chapterWords.find((word) => word.id === report.id);
    if (report.marks >= MARKS_NEEDED_FOR_PASS) {
      await write(`${GREEN}${JSON.stringify(word?.kanamoji)}: ${report.marks}${NO_COLOR}\n`);
    } else if (report.marks === 0) {
      await write(`${RED}${JSON.stringify(word?.kanamoji)}: ${report.marks}${NO_COLOR}\n`);
    } else {
      await write(`${JSON.stringify(word?.kanamoji)}: ${report.marks}\n`);
    }
  }
}

/**
 * creates a new reportCard file at the root of the project with default values
 */
export const createNewReportCardFile = async (): Promise<void> => {
  await Deno.writeTextFile(reportFilePath, JSON.stringify(defaultReportCard));
}
