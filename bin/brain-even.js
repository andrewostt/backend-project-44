#!/usr/bin/env node
import readlineSync from "readline-sync";

function brainEven() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 100);
    const question = readlineSync.question(
      `Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNum}\nYour answer: `
    );
    const answer = randomNum % 2 === 0 ? "yes" : "no";
    if (question !== answer) {
      return console.log(
        `'${question}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${name}!`
      );
    }
    console.log("Correct!");
  }
  console.log(`Congratulations, ${name}!`);
}
brainEven();
