import readlineSync from 'readline-sync';
import welcomeUser from '../src/cli.js';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function logic(name) {
  const questionName = welcomeUser();
  const expressions = ['-', '+', '*'];
  const primeNumbers = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];
  if (name === 'calc') {
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
  } 
  if (name === 'even') {
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
  }
  if (name === 'gcd') {
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
  }
  if (name === 'progression') {
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
      progression[indexMissing] = "..";
      console.log(`Question: ${progression.join(" ")}`);
      const answer = readlineSync.question('Your answer: ');
      if (Number(answer) === missingChar) {
        console.log('Correct!');
      } else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${missingChar}'.\nLet's try again, ${questionName}!`);
      }
    }
  }
  if (name === 'prime') {
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
        console.log("Correct!");
      } else {
        return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${questionName}!`);
      }
    }
  }
  return console.log(`Congratulations, ${questionName}!`);
}
