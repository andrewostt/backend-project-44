import readlineSync from "readline-sync";
import greetings from "../src/cli.js";
import isPrime from "../src/isPrime.js";

export default function brainPrime() {
  const name = greetings();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 100);
    const question = readlineSync.question(
      `Question: ${randomNum}\nYour answer: `
    );
    const answer = isPrime(randomNum);
    if (question !== answer) {
      return console.log(
        `${question} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${name}!`
      );
    }
    console.log("Correct!");
  }
  return console.log(`Congratulations, ${name}!`);
}
