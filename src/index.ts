import { getLine, write } from './utils/inputOutput.ts';
import { pullItemAndRemoveFromDict } from './utils/dictUtils.ts';
import { dictEntryToQuestionAnswer } from './utils/transformers.ts';
import { createDictionary } from './dictionary.ts';

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

const dict = createDictionary([
  'Food',
  'House',
  'Hiragana',
  'Katakana',
  'Locations',
  'Numbers',
  'Family',
  'Animals',
  'Pleasantries',
  'Education',
  'Time',
  'Places'
]);

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
