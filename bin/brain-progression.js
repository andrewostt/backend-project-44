#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcomeUser from '../src/cli.js';

function getRandomNumber(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function brainProg() {
  const questionName = welcomeUser();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const length = Math.floor(Math.random() * 6) + 5;
    const indexMissing = getRandomNumber(0, length - 1);
    const start = Math.floor(Math.random() * 100);
    const diff = Math.floor(Math.random() * 10) + 1;
    const progression = [];

    for (let y = 0; y < length; y += 1) {
      const value = start + diff * y;
      progression.push(value);
    }
    const missingChar = progression[indexMissing];
    progression[indexMissing] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === missingChar) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${missingChar}'.\nLet's try again, ${questionName}!`);
    }
  }
  return console.log(`Congratulations, ${questionName}!`);
}

brainProg();
