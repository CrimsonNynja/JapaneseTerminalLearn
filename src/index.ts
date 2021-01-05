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

const getLine = async () => {
  const buffer = new Uint8Array(1024);
  const bytes = <number>await Deno.stdin.read(buffer);
  const line = new TextDecoder().decode(buffer.subarray(0, bytes)).trim();

  return line;
};

const write = (message: string) => {
  const text = new TextEncoder().encode(message);
  Deno.writeAll(Deno.stdout, text);
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
