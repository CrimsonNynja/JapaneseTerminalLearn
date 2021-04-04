import { assertEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";
import { combineDicts, pullItemAndRemoveFromDict } from '../../src/utils/dictUtils.ts';

Deno.test("combineDicts combines 2 distinct sets", () => {
  const dict = combineDicts([{english: '1', kanamoji: '1'}, {english: '1', kanamoji: '2'}], [{english: '1', kanamoji: '3'}, {english: '1', kanamoji: '4'}]);
  assertEquals(dict, [{english: '1', kanamoji: '1'}, {english: '1', kanamoji: '2'}, {english: '1', kanamoji: '3'}, {english: '1', kanamoji: '4'}]);
});

Deno.test("combineDicts remove duplicates", () => {
  const dict = combineDicts([{english: '1', kanamoji: '1'}, {english: '1', kanamoji: '2'}], [{english: '1', kanamoji: '2'}, {english: '1', kanamoji: '3'}]);
  assertEquals(dict, [{english: '1', kanamoji: '1'}, {english: '1', kanamoji: '2'}, {english: '1', kanamoji: '3'}]);
});

Deno.test("test pullItemAndRemoveFromDict", () => {
  const dict = [
    {kanamoji: '1', english: '1'},
    {kanamoji: '2', english: '2'},
    {kanamoji: '3', english: '3'},
    {kanamoji: '4', english: '4'}
  ];
  const item = pullItemAndRemoveFromDict(dict);
  assertEquals(dict.length, 3);
});
