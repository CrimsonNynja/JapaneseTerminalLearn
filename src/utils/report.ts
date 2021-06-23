import { Report, ReportCard } from "../types/report.ts";

export const writeReport = async (reportCard: ReportCard) => {
  await Deno.writeTextFile("./reportCard.json", JSON.stringify(reportCard));
};

export const getLastReport = async () => {
  const reportCard = await Deno.readTextFile("./reportCard.json");
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
