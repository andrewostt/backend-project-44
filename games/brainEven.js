import readlineSync from "readline-sync";
import greetings from "../src/cli.js";

export default function brainEven() {
  const name = greetings();
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
