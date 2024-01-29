#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser, questionName } from '../src/cli.js';

function brainCalc() {
  welcomeUser();
  const expressions = ['-', '+', '*'];
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const numQuestion1 = Math.round(Math.random() * 100);
    const numQuestion2 = Math.round(Math.random() * 100);
    const randomNum = Math.floor(Math.random() * 3);
    let result = 0;
    if (expressions[randomNum] === '-') {
      result = numQuestion1 - numQuestion2;
    } else if (expressions[randomNum] === '+') {
      result = numQuestion1 + numQuestion2;
    } else {
      result = numQuestion1 * numQuestion2;
    }
    const answer = readlineSync.question(`Question: ${numQuestion1} ${expressions[randomNum]} ${numQuestion2}\nYour answer: `);
    if (Number(answer) === result) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${questionName}!`);
    }
  }
  return console.log(`Congratulations, ${questionName}!`);
}

brainCalc();
