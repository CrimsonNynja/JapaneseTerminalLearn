import { reviewReport } from "./report.ts";

const args = Deno.args[0]?.split(' ');

const reviewCommand = 'review';

const commands = [
  'pwd',
  'brew',
  'code',
  'jtl'
];

export const reviewIfRequested = (report: any) => {
  let reviewed = false;
  args.forEach((arg) => {
    if (arg === reviewCommand) {
      reviewReport(report);
      reviewed = true;
    }
  });
  return reviewed;
};

export const shouldRunOnCommand = () => {
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
