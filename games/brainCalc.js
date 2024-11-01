import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

export default function brainCalc() {
  const operations = ['+', '-', '*'];
  const name = greetings();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const operationRandomNum = Math.round(Math.random() * 2);
    const randomNum = Math.round(Math.random() * 100);
    const secondRandomNum = Math.round(Math.random() * 100);
    const expression = `${randomNum} ${operations[operationRandomNum]} ${secondRandomNum}`;
    const question = readlineSync.question(
      `Question: ${expression}\nYour answer: `,
    );
    const answer = calculateExpression(expression);
    if (parseInt(question, 10) !== parseInt(answer, 10)) {
      return console.log(
        `'${question}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`,
      );
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
}

function calculateExpression(expr) {
  const parts = expr.split(' ');
  const num1 = parseFloat(parts[0]);
  const operation = parts[1];
  const num2 = parseFloat(parts[2]);

  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return "Неизвестная операция";
  }
}
