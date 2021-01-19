export interface DictWord {
  english: String | String[],
  kanji?: String,
  kanamoji: String | String[],
  jlp?: number,
  modifiers?: DictWord[],
};

export type Dict = DictWord[];
