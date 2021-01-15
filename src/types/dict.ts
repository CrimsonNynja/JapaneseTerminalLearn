export interface DictWord {
  english: String | String[],
  kanji?: String,
  kanamoji: String | String[],
};

export type Dict = DictWord[];
