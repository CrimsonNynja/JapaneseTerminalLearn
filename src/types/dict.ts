export interface DictWord {
  english: String | String[],
  kanji?: String,
  kanamoji: String | String[],
  jlp?: number,
};

export type Dict = DictWord[];
