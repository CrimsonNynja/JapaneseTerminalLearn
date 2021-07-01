import { reviewReport } from "./report.ts";
import { ReportCard } from "../types/report.ts"

const args = Deno.args[0]?.split(' ');

const reviewCommand = 'review';

export const reviewIfRequested = (report: ReportCard) => {
  let reviewed = false;
  args.forEach((arg) => {
    if (arg === reviewCommand) {
      reviewReport(report);
      reviewed = true;
    }
  });
  return reviewed;
};

export const shouldRunOnCommand = (commands: string[]) => {
  if (args === undefined || args[0] === reviewCommand) {
    return true;
  }

  let ret = false;
  commands.forEach((command) => {
    args.forEach((arg) => {
      if (command === arg) {
        ret = true;
      }
    });
  });
  return ret;
}
