import { ReportCard, Report, VERSION } from "../reports.ts";

export const updateReport = (reportCard: ReportCard): ReportCard => {
  if (reportCard.version === 1) {
    return oneToTwo(reportCard)
  }
  return reportCard;
};

const oneToTwo = (reportCard: ReportCard): ReportCard => {
  const updatedReport: ReportCard = {
    version: VERSION,
    reports: [],
  };

  reportCard.reports.forEach((report: Report) => {
    let updated = false;
    updatedReport.reports.forEach((report2: Report, index: number) => {
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
