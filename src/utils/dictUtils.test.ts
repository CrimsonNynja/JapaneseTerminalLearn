import {
  assertArrayIncludes,
  assertEquals,
} from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { combineDicts } from "./dictUtils.ts";
import { Dict, DictWord } from "../types/dict.ts";

Deno.test("combineDicts test", () => {
  Deno.test("run on 1 data point", () => {
    const word: DictWord = { english: "a", kanamoji: "ア" };
    const chapter: Dict = [word];
    const dict = combineDicts(chapter, chapter);
    assertEquals(dict.length, 1);
    assertArrayIncludes(dict, [word]);
  });
});
