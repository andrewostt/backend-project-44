import readlineSync from 'readline-sync';

export default function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  const questionName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${questionName}!`);
  return questionName;
}
