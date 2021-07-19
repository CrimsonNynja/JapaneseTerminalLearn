import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { isAnswerCorrect, askQuestion } from "./sensei.ts";
import { Word } from "../dictionary/dictionary.ts";

Deno.test('isAnswerCorrect', () => {
  assertEquals(isAnswerCorrect('test', 'test'), true);
  assertEquals(isAnswerCorrect(['test', 'test2'], 'test'), true);
  assertEquals(isAnswerCorrect('test', 'test2'), false);
  assertEquals(isAnswerCorrect(['test', 'test3'], 'test2'), false);
});

Deno.test('askQuestion', () => {
  const word: Word = {
    id: '1',
    english: 'english',
    kanamoji: 'kanamoji'
  };
  const word2: Word = {
    id: '1',
    english: 'english',
    kanamoji: 'kanamoji',
    kanji: 'kanji',
  };
  const word3: Word = {
    id: '1',
    english: 'english',
    kanamoji: 'kanamoji',
    example: {
      japanese: 'example',
      english: 'english',
    }
  };

  assertEquals(askQuestion(word), 'kanamoji');
  assertEquals(askQuestion(word2), 'kanji');
  assertEquals(askQuestion(word3), 'example');
});
