import { assertArrayIncludes, assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { Dict, DictWord, combineDicts, pullItemAndRemoveFromDict } from "./dictionary.ts";

Deno.test("combineDicts test", () => {
  Deno.test("run on 1 data point", () => {
    const word: DictWord = { english: "a", kanamoji: "ア" };
    const chapter: Dict = [word];
    const dict = combineDicts(chapter, chapter);
    assertEquals(dict.length, 1);
    assertArrayIncludes(dict, [word]);
  });

  Deno.test("run on 2 data points", () => {
    const word: DictWord = { english: "a", kanamoji: "ア" };
    const word2: DictWord = { english: "e", kanamoji: "エ" };
    const word3: DictWord = { english: "i", kanamoji: "イ" };
    const word4: DictWord = { english: "tokyo", kanamoji: "東京" };
    const word5: DictWord = { english: "water", kanamoji: "水" };
    const chapter: Dict = [word, word2, word3];
    const chapter2: Dict = [word3, word4, word5];
    const dict = combineDicts(chapter, chapter2);
    assertEquals(dict.length, 5);
    assertArrayIncludes(dict, [word, word2, word3, word4, word5]);
  });
});

Deno.test("pullItemAndRemoveFromDict", () => {
  const word: DictWord = { english: "a", kanamoji: "ア" };
  const word2: DictWord = { english: "e", kanamoji: "エ" };
  const word3: DictWord = { english: "i", kanamoji: "イ" };
  const chapter: Dict = [word, word2, word3];
  const pulledWord = pullItemAndRemoveFromDict(chapter);
  assertEquals(chapter.length, 2);
  assertArrayIncludes([word, word2, word3], [pulledWord]);
});
