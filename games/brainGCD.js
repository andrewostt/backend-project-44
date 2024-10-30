import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';
import gcd from '../src/gcd.js';

export default function brainGCD() {
  const name = greetings();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.round(Math.random() * 100);
    const secondRandomNum = Math.round(Math.random() * 100);
    const question = readlineSync.question(
      `Question: ${randomNum} ${secondRandomNum}\nYour answer: `,
    );
    const answer = gcd(randomNum, secondRandomNum);
    if (parseInt(answer, 10) !== parseInt(question, 10)) {
      return console.log(
        `${question} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${name}!`,
      );
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
}
