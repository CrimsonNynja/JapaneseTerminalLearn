import { ReportCard, OldReportCard, OldReport, VERSION, defaultReportCard } from "../reports.ts";
import { chapters } from "../../dictionary/chapters.ts";
import { write } from "../../inputOutput/inputOutput.ts";

export const updateReport = (reportCard: OldReportCard | ReportCard): ReportCard => {
  let ret: OldReportCard | ReportCard = reportCard;
  if (ret.version === 1) {
    ret = oneToTwo(<OldReportCard>ret);
  }
  if (ret.version === 2) {
    ret = twoToThree(<OldReportCard>ret);
  }
  if (ret.version === 3) {
    ret = defaultReportCard;
  }
  write("updated!\n");
  return <ReportCard>ret;
};

/**
 * converts version 1 to version 2
 * this removed all duplicate entries in the report card, and resolves to the correct marks
 * @param {OldReportCard} reportCard the report card to update to version 2 from version 1
 * @returns {OldReportCard} the updates report card
 */
const oneToTwo = (reportCard: OldReportCard): OldReportCard => {
  const updatedReport: OldReportCard = {
    version: VERSION,
    reports: [],
  };

  reportCard.reports.forEach((report: OldReport) => {
    let updated = false;
    updatedReport.reports.forEach((report2: OldReport, index: number) => {
      if (JSON.stringify(report.question.english) === JSON.stringify(report2.question.english) &&
      JSON.stringify(report.question.kanamoji) === JSON.stringify(report2.question.kanamoji)) {
        updatedReport.reports[index].marks += report.marks;
        updated = true;
      }
    });
    if (updated === false) {
      updatedReport.reports.push(report);
    }
  });

  return updatedReport;
}

const twoToThree = (reportCard: OldReportCard): ReportCard => {
  const updatedReport: ReportCard = {
    version: VERSION,
    reports: [],
  };

  reportCard.reports.forEach((report: OldReport) => {
    for (let [index, chapter] of Object.entries(chapters)) {
      chapter.words.forEach((word) => {
        if (JSON.stringify(word.english) === JSON.stringify(report.question.english)
        && JSON.stringify(word.kanamoji) === JSON.stringify(report.question.kanamoji)) {
          updatedReport.reports.push({
            // chapter: chapter.name,
            id: word.id,
            marks: report.marks,
            markedDate: report.markedDate,
          });
        }
      });
    }
  });

  return updatedReport;
}
