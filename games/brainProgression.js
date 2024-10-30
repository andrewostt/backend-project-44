import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';
import arithmeticProgression from '../src/arithmeticProgression.js';

export default function brainProgression() {
  const name = greetings();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const progression = arithmeticProgression();
    const question = readlineSync.question(
      `Question: ${progression.progression}\nYour answer: `,
    );
    if (parseInt(question, 10) !== parseInt(progression.swappedNum, 10)) {
      return console.log(
        `${question} is wrong answer ;(. Correct answer was ${progression.swappedNum}. Let's try again, ${name}!`,
      );
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
}
