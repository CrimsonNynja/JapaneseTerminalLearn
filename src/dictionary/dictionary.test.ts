import { assertArrayIncludes, assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { Dictionary, Word, Chapter, pullItemAndRemoveFromDictionary } from "./dictionary.ts";

Deno.test("pullItemAndRemoveFromDictionary", () => {
  const word: Word = { id: '1', english: "a", kanamoji: "ア" };
  const word2: Word = { id: '2', english: "e", kanamoji: "エ" };
  const word3: Word = { id: '3', english: "i", kanamoji: "イ" };
  const chapter: Chapter = {
    name: 'test',
    words: [word, word2, word3],
  };
  const dictionary: Dictionary = [chapter];
  const pulledWord = pullItemAndRemoveFromDictionary(dictionary);
  assertEquals(chapter.words.length, 2);
  assertArrayIncludes([word, word2, word3], [pulledWord.word]);
});
