import readlineSync from "readline-sync";
import greetings from "../src/cli.js";

export default function brainCalc() {
  const operations = ["+", "-", "*"];
  const name = greetings();
  console.log("What is the result of the expression?");
  for (let i = 0; i < 3; i += 1) {
    const operationRandomNum = Math.round(Math.random() * 2);
    const randomNum = Math.round(Math.random() * 100);
    const secondRandomNum = Math.round(Math.random() * 100);
    const expression = `${randomNum} ${operations[operationRandomNum]} ${secondRandomNum}`;
    const question = readlineSync.question(
      `Question: ${expression}\nYour answer: `
    );
    const answer = eval(expression);
    if (parseInt(question) !== parseInt(answer)) {
      return console.log(
        `'${question}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`
      );
    }
    console.log("Correct!");
  }
  console.log(`Congratulations, ${name}!`);
}
