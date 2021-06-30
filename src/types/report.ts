export interface Report {
  question: {
    english: string | string[];
    kanamoji: string | string[];
  };
  marks: number;
  markedDate: string;
}

export const VERSION = 1;

export type ReportCard = {
  version: number;
  reports: Report[];
}
