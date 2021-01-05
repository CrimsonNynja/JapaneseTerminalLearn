import { getLine, write } from './utils/inputOutput.ts';
import Hiragana from './data/hiragana.ts';

const getRandomItem = (object: any) => {
  const keys = Object.keys(object);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomKey = keys[randomIndex];
  return {
    question: object[randomKey],
    answer: randomKey,
  };
};

write('enter question count: ');
const questionCount = await getLine();

let correctCount = 0;
for (let i = 0; i < Number(questionCount); i++) {
  const { question, answer } = getRandomItem(Hiragana);
  write('enter translation ' + question + ': ');
  const line = await getLine();
  if (line === answer) {
    console.log('✅');
    correctCount += 1;
  } else {
    console.log('❌');
  }
}
console.log('questions answered correctly ' + correctCount + '/' + questionCount);
