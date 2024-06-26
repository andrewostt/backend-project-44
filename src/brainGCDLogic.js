import readlineSync from 'readline-sync';
import welcomeUser from './cli.js';

export default function brainGCDLogic() {
  const questionName = welcomeUser();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    let firstNum = Math.round(Math.random() * 100);
    let secondNum = Math.round(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${firstNum} ${secondNum}\nYour answer: `);
    while (secondNum !== 0) {
      const t = secondNum;
      secondNum = firstNum % secondNum;
      firstNum = t;
    }
    if (Number(answer) === firstNum) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${firstNum}'.\nLet's try again, ${questionName}!`);
    }
  }
  return console.log(`Congratulations, ${questionName}!`);
}
