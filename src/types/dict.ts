export interface DictWord {
  english: string | string[];
  kanji?: string;
  kanamoji: string | string[];
  jlp?: number;
  modifiers?: DictWord[];
}

export type Dict = DictWord[];
