import readlineSync from 'readline-sync';
import { askName } from './cli.js';

export function gameLogic(gameRules, num, result1, result2) {
    console.log('Welcome to the Brain Games');
    const name = askName();
    console.log(gameRules);
    for (let i = 0; i < 3; i++) {
        const answer = readlineSync.question(`Question: ${result1[i]} ${num} ${result2[i]}\nYour answer: `);
        if (answer !== String(result1[i] + result2[i])) {
            return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result1[i] + result2[i]}'.\nLet's try again, ${name}!`);
        } else {
            console.log('Correct!');
        }
    }
    return console.log(`Congratulations ${name}!`)
}