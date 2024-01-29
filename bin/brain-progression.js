#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcomeUser, { questionName } from '../src/cli.js';

function getRandomNumber(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function brainProg() {
    welcomeUser();
    console.log(`What number is missing in the progression?`);
    for (let i = 0; i < 3; i += 1) {
        const length = Math.floor(Math.random() * 6) + 4;
        const indexMissing = getRandomNumber(0, length);
        const start = Math.floor(Math.random() * 100);
        const diff = Math.floor(Math.random() * 10) + 1;
        const progression = [];

        for (let i = 0; i < length; i++) {
            const value = start + diff * i;
            progression.push(value);
        }
        const missingChar = progression[indexMissing];
        progression[indexMissing] = '..';
        const answer = readlineSync.question(`Question: ${progression}\nYour answer: `);
        if (Number(answer) === missingChar) {
            console.log(`Correct!`);
        } else {
            return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${missingChar}'.\nLet's try again, ${questionName}!`);
        }
    }
    console.log(`Congratulations, ${questionName}!`);
}

brainProg();