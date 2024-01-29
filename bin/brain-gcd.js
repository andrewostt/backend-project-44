#!/usr/bin/env node
import readlineSync from 'readline-sync';
import * as user from '../src/cli.js';

function brainGCD() {
  user.welcome;
  user.questionName;
  user.hello;
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
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${firstNum}'.\nLet's try again, ${user.questionName}!`);
    }
  }
  return console.log(`Congratulations, ${user.questionName}!`);
}

brainGCD();
