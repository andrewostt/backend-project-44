#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { askName } from '../../src/cli.js';

function brainEven() {
    console.log('Welcome to the Brain Games!');
    const name = askName();
    console.log('Answer "yes" if the number is even, otherwise answer "no".\nQuestion: 15');
    const firstAnswer = readlineSync.question('Your answer: ');
    if (firstAnswer === 'no') {
        console.log('Correct!');
    } else {
        return console.log(`'${firstAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    }
    const secondAnswer = readlineSync.question('Question: 6\nYour answer: ');
    if (secondAnswer === 'yes') {
        console.log('Correct!');
    } else {
        return console.log(`'${secondAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);   
    }
    const thirdAnswer = readlineSync.question('Question: 7\nYour answer: ');
    if (thirdAnswer === 'no'){
        console.log('Correct!');
    } else {
        return console.log(`'${thirdAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    }
    console.log(`Congratulations, ${name}`)
}
brainEven();