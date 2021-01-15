import { getLine, write } from './utils/inputOutput.ts';
import { combineDicts, pullItemAndRemoveFromDict } from './utils/dictUtils.ts';
import { dictEntryToQuestionAnswer } from './utils/transformers.ts';
import Hiragana from './data/hiragana.ts';
import Katakana from './data/katakana.ts';
import Locations from './data/locations.ts';
import Numbers from './data/numbers.ts';
import Food from './data/food.ts';
import Family from './data/family.ts';
import Animals from './data/animals.ts';
import Pleasantries from './data/pleasantries.ts';
import House from './data/house.ts';
import Education from './data/education.ts';
import Time from './data/time.ts';

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

const dict = combineDicts([
  ...Hiragana,
  ...Katakana,
  ...Locations,
  ...Numbers,
  ...Food,
  ...Family,
  ...Animals,
  ...Pleasantries,
  ...House,
  ...Education,
  ...Time,
], [...Education]);

let correctCount = 0;
for (let i = 0; i < Number(questionCount); i++) {
  const { question, answer } = dictEntryToQuestionAnswer(pullItemAndRemoveFromDict(dict));
  write('enter translation ' + question + ': ');
  const line = await getLine();
  if (isAnswerCorrect(answer, line)) {
    console.log('✅');
    correctCount += 1;
  } else {
    console.log('❌ correct answer is ' + JSON.stringify(answer));
  }
}
console.log('questions answered correctly ' + correctCount + '/' + questionCount);
