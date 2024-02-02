#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser } from '../src/cli.js';

function brainEven() {
  const questionName = welcomeUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numQuestion = Math.round(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${numQuestion}\nYour answer: `);
    if (numQuestion % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${questionName}!`);
      }
    } else if (answer === 'no') {
      console.log('Correct!');
    } else {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${questionName}!`);
    }
  }
  return console.log(`Congratulations, ${questionName}!`);
}

brainEven();
