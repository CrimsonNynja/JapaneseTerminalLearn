export interface Report {
  question: {
    english: string | string[];
    kanamoji: string | string[];
  };
  marks: number;
  markedDate: string;
}

export type ReportCard = Report[];
