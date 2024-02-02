#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser } from '../src/cli.js';

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97];

function brainPrime() {
  const questionName = welcomeUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numQuestion = Math.round(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${numQuestion}\nYour answer: `);
    if (primeNumbers.includes(numQuestion)) {
      if (answer === 'yes') {
        console.log('Correct');
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

brainPrime();
