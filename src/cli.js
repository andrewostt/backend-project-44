import readlineSync from "readline-sync";

export default function greetings() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello ${name}!`);
  return name;
}
