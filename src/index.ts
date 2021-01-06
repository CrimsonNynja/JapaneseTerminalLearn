import { getLine, write } from './utils/inputOutput.ts';
import Hiragana from './data/hiragana.ts';
import Katakana from './data/katakana.ts';
import Places from './data/places.ts';
import Numbers from './data/numbers.ts';
import Food from './data/food.ts';
import Family from './data/family.ts';
import Animals from './data/animals.ts';
import Pleasantries from './data/pleasantries.ts';

const getRandomItem = (object: any) => {
  const randomIndex = Math.floor(Math.random() * object.length);
  let question = object[randomIndex].kanji
  if (!question) {
    question = object[randomIndex].kanamoji;
  }
  return {
    question,
    answer: object[randomIndex].english,
  };
};

const isAnswerCorrect = (answer: string | string[], given: string) => {
  if(Array.isArray(answer)) {
    if (answer.includes(given)) {
      return true;
    }
  } else {
    if (answer === given) {
      return true;
    }
  }
  return false;
};

write('enter question count: ');
const questionCount = await getLine();

let correctCount = 0;
for (let i = 0; i < Number(questionCount); i++) {
  const { question, answer } = getRandomItem([
    ...Hiragana,
    ...Katakana,
    ...Places,
    ...Numbers,
    ...Food,
    ...Family,
    ...Animals,
    ...Pleasantries,
  ]);
  write('enter translation ' + question + ': ');
  const line = await getLine();
  if (isAnswerCorrect(answer, line)) {
    console.log('✅');
    correctCount += 1;
  } else {
    console.log('❌');
  }
}
console.log('questions answered correctly ' + correctCount + '/' + questionCount);
