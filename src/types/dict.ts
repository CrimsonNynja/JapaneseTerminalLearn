export interface DictWord {
  english: string | string[];
  kanji?: string;
  kanamoji: string | string[];
  jlp?: number;
  modifiers?: DictWord[];
  example?: {
    japanese: string;
    english: string|string[];
  }
}

export type Dict = DictWord[];
